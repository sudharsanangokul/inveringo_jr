document.addEventListener("DOMContentLoaded", () => {
    // --- Constants & Variables ---
    let questions = [];
    if (typeof round1Questions !== 'undefined') {
        const easyQuestions = round1Questions.filter(q => q.difficulty === 'easy');
        const hardQuestions = round1Questions.filter(q => q.difficulty === 'hard');
        const numEasy = 3;
        const numHard = 6;
        const selectedEasy = easyQuestions.sort(() => Math.random() - 0.5).slice(0, numEasy);
        const selectedHard = hardQuestions.sort(() => Math.random() - 0.5).slice(0, numHard);
        questions = [...selectedEasy, ...selectedHard].sort(() => Math.random() - 0.5);
        console.log(`Loaded ${questions.length} questions: ${numEasy} Easy, ${numHard} Hard.`);
    } else {
        console.error("Questions data not found!");
    }

    // UI Elements
    const setupContainer = document.getElementById('setup-container');
    const gameContainer = document.getElementById('game-container');
    const confirmButton = document.getElementById('confirm-button');
    const setupCells = document.querySelectorAll('#setup-grid .cell');
    const questionBox = document.getElementById("current-question");
    const answerInput = document.getElementById("answer-input");
    const nextButton = document.getElementById("next-button");
    const submitButton = document.getElementById("submit-button");
    const generatedWords = document.getElementById("generated-words");
    const noWordsMessage = document.getElementById("no-words");
    const timerElement = document.getElementById("timer");
    const scoreDisplay = document.getElementById("score-display");

    // Game State
    let gridOrder = [];
    let currentIndex = 0;
    let currentGridIndex = 0;
    let answers = Array(9).fill(false);
    let answeredQuestions = Array(9).fill(false);
    let lettersGenerated = [];

    // --- Scoring State ---
    let score = 0;
    let streak = 0;
    let riskMode = false;         // true = player chose RISK for current question
    let freeRiskToken = false;    // true = next RISK attempt has no penalty
    let negativeEvents = [];      // stores indices in score events where -15 happened
    let scoreHistory = [];        // full log for end screen
    let powerCellGridIndex = -1;  // which grid cell (0-8) is the power cell
    let powerCellUsed = false;
    let pendingPowerCellReward = false;

    // Timer Variables
    const GAME_DURATION = 10 * 60 * 1000;
    let startTime;
    let timerInterval;

    // --- Setup Phase: Drag and Drop ---
    let draggedElement = null;

    setupCells.forEach(cell => {
        cell.addEventListener('dragstart', () => {
            draggedElement = cell;
            cell.classList.add('dragging');
        });
        cell.addEventListener('dragend', () => {
            draggedElement = null;
            cell.classList.remove('dragging');
        });
        cell.addEventListener('dragover', (e) => { e.preventDefault(); });
        cell.addEventListener('drop', () => {
            if (draggedElement && draggedElement !== cell) {
                const temp = cell.textContent;
                cell.textContent = draggedElement.textContent;
                draggedElement.textContent = temp;
            }
        });
    });

    confirmButton.addEventListener('click', () => {
        const arrangement = Array.from(setupCells).map(cell => cell.textContent);
        const confirmation = confirm(`You have arranged the grid in the following order:\n${arrangement.join(', ')}\n\nIs this order correct?`);
        if (confirmation) {
            gridOrder = arrangement;
            startGame(gridOrder);
        } else {
            alert("You can continue rearranging the grid.");
        }
    });

    // --- Game Logic ---
    function startGame(order) {
        setupContainer.classList.add('hidden');
        gameContainer.classList.remove('hidden');

        answers = Array(9).fill(false);
        answeredQuestions = Array(9).fill(false);
        lettersGenerated = [];
        currentIndex = parseInt(order[0]) - 1;
        currentGridIndex = 0;
        score = 0;
        streak = 0;
        freeRiskToken = false;
        negativeEvents = [];
        scoreHistory = [];
        powerCellUsed = false;

        // Pick a random power cell
        powerCellGridIndex = Math.floor(Math.random() * 9);

        initializeGameBoard(order);
        questions.sort(() => Math.random() - 0.5);
        updateScoreDisplay();

        // Show risk modal before first question
        showRiskModal(0);

        startTimer();
    }

    function initializeGameBoard(order) {
        const gameCells = document.querySelectorAll('#bingo-grid .cell');
        gameCells.forEach((cell, index) => {
            cell.textContent = order[index];
            cell.onclick = () => {
                if (answeredQuestions[parseInt(order[index]) - 1]) {
                    // Already answered — just load without risk modal
                    loadStep(index);
                } else {
                    showRiskModal(index);
                }
            };
            // Mark power cell with ⚡
            if (index === powerCellGridIndex) {
                cell.classList.add('power-cell');
                cell.setAttribute('title', '⚡ Power Cell');
            }
        });
    }

    function loadStep(stepIndex) {
        if (stepIndex < 0 || stepIndex >= gridOrder.length) return;
        currentGridIndex = stepIndex;
        const qNum = parseInt(gridOrder[currentGridIndex]);
        currentIndex = qNum - 1;
        loadQuestion(currentIndex);
    }

    function loadQuestion(index) {
        questionBox.textContent = `${index + 1}. ${questions[index].question}`;
        answerInput.value = "";
        const isAnswered = answeredQuestions[index];
        answerInput.disabled = isAnswered;
        submitButton.disabled = isAnswered;
    }

    // --- Risk Modal ---
    function showRiskModal(stepIndex) {
        const modal = document.getElementById('risk-modal');
        modal.classList.remove('hidden');

        document.getElementById('risk-safe-btn').onclick = () => {
            riskMode = false;
            modal.classList.add('hidden');
            loadStep(stepIndex);
        };
        document.getElementById('risk-risk-btn').onclick = () => {
            riskMode = true;
            modal.classList.add('hidden');
            loadStep(stepIndex);
        };
    }

    // --- Submit Answer ---
    submitButton.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim();
        if (userAnswer === "") {
            alert("Please enter an answer.");
            return;
        }
        if (answeredQuestions[currentIndex]) return;

        const correctAnswer = questions[currentIndex].answer;
        const qNumStr = (currentIndex + 1).toString();
        const boxIndex = gridOrder.indexOf(qNumStr);
        const gameCells = document.querySelectorAll('#bingo-grid .cell');
        const cell = gameCells[boxIndex];

        answeredQuestions[currentIndex] = true;
        const isCorrect = userAnswer === correctAnswer;

        if (isCorrect) {
            cell.classList.add("strike");
            cell.classList.remove("power-cell"); // remove glow after answered
            answers[boxIndex] = true;
            applyScoreCorrect(boxIndex);
        } else {
            cell.classList.add("disabled");
            cell.classList.remove("power-cell");
            applyScoreWrong();
            streak = 0;
        }

        answerInput.disabled = true;
        submitButton.disabled = true;
        checkGameProgress();
    });

    // --- Scoring Logic ---
    function applyScoreCorrect(boxIndex) {
        let gained = 0;
        if (riskMode) {
            gained = 25;
            showToast("⚡ RISK PAID OFF! +25 pts", "success");
        } else {
            gained = 10;
            showToast("✅ Correct! +10 pts", "success");
        }
        score += gained;
        scoreHistory.push({ type: 'correct', points: gained, riskMode });

        // Streak check
        streak++;
        if (streak > 0 && streak % 3 === 0) {
            score += 15;
            scoreHistory.push({ type: 'streak', points: 15 });
            setTimeout(() => showToast("🔥 3 STREAK BONUS! +15 pts", "streak"), 800);
        }

        // Power cell check
        if (boxIndex === powerCellGridIndex && !powerCellUsed) {
            powerCellUsed = true;
            setTimeout(() => showPowerCellReward(), 1200);
        }

        updateScoreDisplay();
    }

    function applyScoreWrong() {
        if (riskMode) {
            if (freeRiskToken) {
                freeRiskToken = false;
                showToast("🛡️ Free Risk Token used! No penalty.", "info");
                scoreHistory.push({ type: 'free-risk', points: 0 });
            } else {
                score -= 15;
                negativeEvents.push(scoreHistory.length);
                scoreHistory.push({ type: 'wrong-risk', points: -15 });
                showToast("❌ RISK FAILED! −15 pts", "danger");
            }
        } else {
            showToast("❌ Wrong. No penalty (Safe mode).", "info");
            scoreHistory.push({ type: 'wrong-safe', points: 0 });
        }
        updateScoreDisplay();
    }

    function updateScoreDisplay() {
        if (scoreDisplay) {
            scoreDisplay.textContent = `Score: ${score} pts`;
            scoreDisplay.className = score < 0 ? 'score-negative' : '';
        }
    }

    // --- Power Cell Reward Modal ---
    function showPowerCellReward() {
        const modal = document.getElementById('power-modal');
        modal.classList.remove('hidden');

        document.getElementById('power-bonus-btn').onclick = () => {
            score += 20;
            scoreHistory.push({ type: 'power-bonus', points: 20 });
            updateScoreDisplay();
            showToast("⚡ Power Cell: +20 Bonus!", "streak");
            modal.classList.add('hidden');
        };

        document.getElementById('power-remove-btn').onclick = () => {
            if (negativeEvents.length > 0) {
                score += 15; // reverse last -15
                negativeEvents.pop();
                scoreHistory.push({ type: 'power-remove', points: 15 });
                updateScoreDisplay();
                showToast("⚡ Power Cell: Last penalty removed!", "streak");
            } else {
                showToast("⚡ No penalties to remove. +5 pts consolation!", "info");
                score += 5;
                updateScoreDisplay();
            }
            modal.classList.add('hidden');
        };

        document.getElementById('power-freerisk-btn').onclick = () => {
            freeRiskToken = true;
            scoreHistory.push({ type: 'power-freerisk', points: 0 });
            showToast("⚡ Free Risk Token earned! Next RISK is penalty-free.", "streak");
            modal.classList.add('hidden');
        };
    }

    // --- Toast Notification ---
    function showToast(message, type) {
        const toast = document.getElementById('toast-notification');
        toast.textContent = message;
        toast.className = `toast toast-${type} toast-visible`;
        setTimeout(() => {
            toast.className = 'toast';
        }, 2500);
    }

    // --- Next Button: jump to next unanswered cell, wrap around ---
    nextButton.addEventListener("click", () => {
        // Simple JavaScript popup prompt:
        const confirmNext = confirm("Are you sure you want to skip to the next question? Any typed answer will be lost.");
        if (!confirmNext) {
            return;
        }

        // Search from current+1, then wrap around
        for (let offset = 1; offset <= gridOrder.length; offset++) {
            const nextIndex = (currentGridIndex + offset) % gridOrder.length;
            const nextQNum = parseInt(gridOrder[nextIndex]);
            if (!answeredQuestions[nextQNum - 1]) {
                showRiskModal(nextIndex);
                return;
            }
        }
        // All answered — trigger end if not already done
        checkGameProgress();
    });

    // --- Core Logic for Unlocking ---
    let selectedRiddleData = {
        word: ["P", "Y", "T", "H", "O", "N"],
        riddle: "Default Riddle: Born from a Circus..."
    };

    if (typeof finalRiddles !== 'undefined' && finalRiddles.length > 0) {
        selectedRiddleData = finalRiddles[Math.floor(Math.random() * finalRiddles.length)];
    } else {
        console.error("Final Riddles data not found! Using default.");
    }

    const TARGET_WORD = selectedRiddleData.word;
    const GAME_RIDDLE = selectedRiddleData.riddle;

    function generateRandomIndices(wordLength) {
        const allIndices = Array.from({ length: wordLength }, (_, i) => i);
        for (let i = allIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allIndices[i], allIndices[j]] = [allIndices[j], allIndices[i]];
        }
        return allIndices.slice(0, Math.min(3, wordLength)).sort((a, b) => a - b);
    }

    const REVEAL_INDICES = generateRandomIndices(TARGET_WORD.length);
    console.log("Values to be revealed at indices:", REVEAL_INDICES);

    function checkGameProgress() {
        let correctCount = answers.filter(Boolean).length;
        let totalAnswered = answeredQuestions.filter(Boolean).length;

        if (correctCount >= 3 && !lettersGenerated.includes(0)) {
            lettersGenerated.push(0);
            showClueNotification(TARGET_WORD[REVEAL_INDICES[0]], 1);
        }
        if (correctCount >= 6 && !lettersGenerated.includes(1)) {
            lettersGenerated.push(1);
            showClueNotification(TARGET_WORD[REVEAL_INDICES[1]], 2);
        }
        if (correctCount === 9 && !lettersGenerated.includes(2)) {
            lettersGenerated.push(2);
            showClueNotification(TARGET_WORD[REVEAL_INDICES[2]], 3);
        }

        updateWordDisplay();

        if (totalAnswered === 9) {
            endRound1();
        }
    }

    function updateWordDisplay() {
        generatedWords.innerHTML = "";
        let displayHTML = "";
        for (let i = 0; i < TARGET_WORD.length; i++) {
            let char = "_";
            if (i === REVEAL_INDICES[0] && lettersGenerated.includes(0)) char = TARGET_WORD[i];
            if (i === REVEAL_INDICES[1] && lettersGenerated.includes(1)) char = TARGET_WORD[i];
            if (i === REVEAL_INDICES[2] && lettersGenerated.includes(2)) char = TARGET_WORD[i];
            displayHTML += `<span style="margin: 0 10px; font-size: 2em; border-bottom: 2px solid #333; display: inline-block; width: 30px; text-align: center;">${char}</span>`;
        }
        generatedWords.innerHTML = displayHTML;
        if (noWordsMessage) noWordsMessage.style.display = "none";
    }

    function showClueNotification(letter, count) {
        setTimeout(() => {
            alert(`Milestone Reached! You found a letter: ${letter}\n(${count}/3 clues found)`);
        }, 200);
    }

    function endRound1() {
        timerElement.textContent = "00:00";
        const totalTime = Date.now() - startTime;
        const minutes = Math.floor(totalTime / 60000);
        const seconds = Math.floor((totalTime % 60000) / 1000);
        const timeText = `${minutes}min ${seconds}s`;
        const finalScore = score;
        const correctTotal = answers.filter(Boolean).length;

        document.body.classList.add("game-over");
        timerElement.style.display = "none";

        setTimeout(() => {
            submitButton.disabled = true;
            nextButton.disabled = true;
            document.querySelectorAll('.cell').forEach(c => c.style.pointerEvents = 'none');

            const originalGrid = document.getElementById("bingo-grid");
            const clonedGrid = originalGrid.cloneNode(true);
            clonedGrid.id = "summary-grid";
            clonedGrid.style.pointerEvents = "none";

            const modalHTML = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; z-index: 5000; overflow-y: auto;">
                    <h1 style="color: #4caf50; font-size: 3em; margin-bottom: 20px;">ROUND 1 COMPLETE</h1>
                    
                    <div style="display: flex; gap: 40px; align-items: flex-start; flex-wrap: wrap; justify-content: center; width: 90%;">
                        
                        <!-- Left: The Matrix -->
                        <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; border: 1px solid #4caf50;">
                            <h3 style="color: #ffeb3b; margin-bottom: 10px;">MISSION MATRIX</h3>
                            <div id="modal-grid-container"></div>
                            <p style="margin-top: 10px; color: #fff;">Total Time: <span style="color: #4caf50; font-weight: bold; font-size: 1.2em;">${timeText}</span></p>
                        </div>

                        <!-- Middle: Score Panel -->
                        <div style="background: #1a1a2e; padding: 30px; border-radius: 10px; border: 2px solid #ffeb3b; text-align: center; min-width: 220px;">
                            <h2 style="color: #ffeb3b; margin-bottom: 15px;">📊 SCORE</h2>
                            <div style="font-size: 3em; font-weight: bold; color: ${finalScore >= 0 ? '#4caf50' : '#ff5252'};">${finalScore}</div>
                            <p style="color: #aaa; margin-top: 8px;">pts</p>
                            <hr style="border-color: #333; margin: 15px 0;">
                            <p style="color: #ccc; font-size: 0.95em;">✅ Correct: <b style="color:#4caf50">${correctTotal}/9</b></p>
                        </div>

                        <!-- Right: The Riddle -->
                        <div style="background: #222; padding: 30px; border-radius: 10px; border: 2px solid #4caf50; max-width: 500px; text-align: center;">
                            <h2 style="color: #ffeb3b;">THE RIDDLE</h2>
                            <p style="font-size: 1.5em; margin: 20px 0;">"${GAME_RIDDLE}"</p>
                            <div style="margin: 30px 0; font-family: monospace; letter-spacing: 5px; font-size: 2em;">
                                ${generatedWords.innerHTML}
                            </div>
                            <p style="color: #aaa; margin-top: 20px;">Use the riddle answer to unlock Round 2.</p>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            document.getElementById("modal-grid-container").appendChild(clonedGrid);
        }, 1000);
    }

    // --- Timer ---
    function startTimer() {
        startTime = Date.now();
        updateTimer();
    }

    function updateTimer() {
        if (document.body.classList.contains("game-over")) return;
        const now = Date.now();
        const elapsed = now - startTime;
        const remaining = GAME_DURATION - elapsed;

        if (remaining <= 0) {
            timerElement.textContent = "00:00";
            endRound1();
            return;
        }

        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        requestAnimationFrame(updateTimer);
    }
});
