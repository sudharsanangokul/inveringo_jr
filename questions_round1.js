const round1Questions = [
    // --- Existing Questions (Reframed as "Hard" Metaphorical Riddles) ---
    {
        question: "I am the asymmetry of the digital world. Born from the product of two giants, my security lies in the impossibility of their separation. I share one key with the world, but keep the other in shadow. What three-letter acronym defines me?",
        answer: "RSA",
        difficulty: "moderate"
    },
    {
        question: "No teacher guides my hand, no labels mark my path. I wander through the raw wilderness of data, seeking clusters and structures in the silence of the unknown. I learn from the data itself. What am I?",
        answer: "Unsupervised",
        difficulty: "moderate"
    },
    {
        question: "I am the arbiter of memory's weight. When you beg the allocator for space to house a single integer, you must whisper my invocation to ensure the bytes match the machine's heart. What expression defines this precise width?",
        answer: "sizeof(int)",
        difficulty: "moderate"
    },
    {
        question: "To ascend the mountain of products, I must first descend. I am the echo of the function calling itself, stripping one away from the whole until the void of zero is reached. What is the recursive step that binds 'n' to its predecessor?",
        answer: "factorial(n-1)",
        difficulty: "moderate"
    },
    {
        question: "I am the illusion of plurality. I take a single physical spinner and slice it into logical realms, allowing one drive to wear many masks and host rival systems side by side. What is this act of division?",
        answer: "Partitioning",
        difficulty: "moderate"
    },
    {
        question: "When the tree loses its balance and degenerates into a line, the swift search becomes a weary trudge. I am the cost of this failure, growing linearly with every node added to the chain. What is my worst-case time complexity?",
        answer: "O(n)",
        difficulty: "moderate"
    },
    {
        question: "I am the ancient shield of the web, the predecessor to the modern guard. Though my children now protect the transport layer, my three-letter name is still the ghost synonymous with the lock icon. Who am I?",
        answer: "SSL",
        difficulty: "moderate"
    },
    {
        question: "The multiplier is five, the array is counted from one to five. I am the harvest of the map, the sequence that blooms when each seed is touched by the factor. What numeric sequence is the result?",
        answer: "5,10,15,20,25",
        difficulty: "moderate"
    },

    // --- New Questions (Tag: Hard -> Very Hard / Abstract Riddles) ---
    {
        question: "I am the state of purity where no servant serves another servant. In my realm, every non-prime attribute bows only to the primary key, and transitive dependencies are banished. What level of normal form is this?",
        answer: "3rd",
        difficulty: "hard"
    },
    {
        question: "Two titans stand frozen, each clutching what the other demands. Neither yields, neither advances. Time ticks on, but progress is halted in this circular embrace of eternal waiting. What is this fatal condition?",
        answer: "Deadlock",
        difficulty: "hard"
    },
    {
        question: "I am the keeper of history and the reverser of time. The last to enter my gates is the first to leave. I power the 'Undo' and the 'Back' button, burying the old under the new. What structure am I?",
        answer: "Stack",
        difficulty: "hard"
    },
    {
        question: "I am the throttle of the network. I expand when the path is clear and shrink when the congestion rises. I dictate how much can be sent before silence is broken by an acknowledgement. What flow control mechanism am I?",
        answer: "Windowing",
        difficulty: "hard"
    },
    {
        question: "To know the shortest path between every soul in the graph, I must iterate three times. I am the cubic cost of total knowledge in a weighted world. What is the complexity of Floyd-Warshall?",
        answer: "V^3",
        difficulty: "hard"
    },
    {
        question: "I am the juggler of the CPU. I keep multiple tasks in the arena, ensuring that when one rests for I/O, another takes the stage. I maximize utilization by never letting the processor sleep. What is this concept?",
        answer: "Multiprogramming",
        difficulty: "hard"
    },
    {
        question: "I am the kidnapper of the digital age. I lock your memories behind an unbreakable cipher and demand a tribute in untraceable coin to return the key. I am the malware of extortion. What am I?",
        answer: "Ransomware",
        difficulty: "hard"
    },
    {
        question: "The father defines a behavior, but the son rejects it. I am the act of the child class providing a specific, darker truth to replace the inheritance of the parent. What is this polymorphic defiance?",
        answer: "Overriding",
        difficulty: "hard"
    },
    {
        question: "I am the fourth pillar of the model. I guarantee end-to-end delivery, segmenting the stream and checking for errors. I am the bridge between the application's conversation and the network's packet storm. What layer am I?",
        answer: "Transport",
        difficulty: "hard"
    },
    {
        question: "I am the shadow in the middle. Alice speaks to me thinking it is Bob; Bob listens to me thinking it is Alice. I intercept, I relay, I deceive. What four-letter acronym marks this attack?",
        answer: "MITM",
        difficulty: "hard"
    },
    {
        question: "When the logic fractures and cannot proceed, I do not crash in silence. I hurl the error into the aether, seeking a handler to catch the falling sky. What keyword launches this exception?",
        answer: "throw",
        difficulty: "hard"
    },
    {
        question: "I am the equalizer of time. I grant every process a brief quantum of the CPU before banishing it to the back of the line. I circle endlessly, ensuring no one starves. What scheduling algorithm am I?",
        answer: "Round-Robin",
        difficulty: "hard"
    },
    {
        question: "I was once the fingerprint of the world, a 128-bit digest. Now I am shattered by collisions, no longer trusted for signatures, yet I linger in the shadows of file integrity. What broken hash function am I?",
        answer: "MD5",
        difficulty: "hard"
    },
    {
        question: "In the court of Red and Black, balance is mandated. The longest path from the root to the leaf can be no more than _this_ many times the shortest path. What is the number?",
        answer: "Two",
        difficulty: "hard"
    },
    {
        question: "I am the great translator. I take the high-level prose of the programmer and transmute it into the raw machine code of the processor. I build the executable from the source. What am I?",
        answer: "Compiler",
        difficulty: "hard"
    },
    {
        question: "The `WHERE` clause sifts the sand before the pile is made. But I am the judge that stands *after* the gathering. I filter the groups themselves based on their aggregated truths. What SQL clause am I?",
        answer: "HAVING",
        difficulty: "hard"
    },
    {
        question: "I am the signal of the railway, the integer of control. Dijkstra named me. I increment and decrement to guard the critical section, letting only the chosen few pass. What synchronization primitive am I?",
        answer: "Semaphore",
        difficulty: "hard"
    },
    {
        question: "I divide to conquer. I split the chaos until it is singular, then I weave the pieces back together in perfect order. My cost is O(n log n), stable and consistent. What algorithm am I?",
        answer: "Merge Sort",
        difficulty: "hard"
    },
    {
        question: "I am the HTTP verb of replacement. I do not just modify; I overwrite. If the resource is there, I update it fully. If not, I create it. I am idempotent. What method am I?",
        answer: "PUT",
        difficulty: "hard"
    }
];
