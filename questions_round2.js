const round2Questions = {
    "PYTHON": [
        {
            "type": "code",
            "snippet": `def protocol(s):
    if len(set(s)) != 3:
        return 0
    total = 0
    for i, ch in enumerate(s):
        total += (i + 1) * ord(ch)
    return total % 100

print(protocol(INPUT))`,
            "output": "94",
            "validAnswers": ["cab", "bca"],
            "softHint": "Character positions matter.",
            "strongHint": "Weighted ASCII sum mod 100 must equal 94 with exactly 3 unique chars."
        },
        {
            "type": "code",
            "snippet": `def protocol(n):
    count = 0
    for i in range(1, n + 1):
        if n % i == 0:
            count += 1
    return count * n

print(protocol(INPUT))`,
            "output": "12",
            "validAnswers": ["3", "2"],
            "softHint": "Divisors matter.",
            "strongHint": "Return (number of divisors of n) * n."
        },
        {
            "type": "code",
            "snippet": `def protocol(n):
    if n < 10:
        return n
    return protocol(n // 10) + n % 10

print(protocol(INPUT))`,
            "output": "10",
            "validAnswers": ["55", "19"],
            "softHint": "Recursive digit logic.",
            "strongHint": "It sums digits recursively."
        },
        {
            "type": "code",
            "snippet": `def protocol(arr):
    # arr string converts to list, e.g. eval("[1,2]")
    arr = eval(arr) 
    if len(arr) != 5:
        return 0
    return sum(arr[i] * (-1)**i for i in range(5))

print(protocol(INPUT))`,
            "output": "3",
            "validAnswers": ["[5,2,4,1,-3]", "[3,0,3,0,-3]"],
            "softHint": "Alternating signs.",
            "strongHint": "Even index positive, odd index negative. You must pass a 5-element list like [1,2,3,4,5]."
        },
        {
            "type": "code",
            "snippet": `def protocol(d):
    # dict string converts to dict, e.g. eval('{"a":1}')
    d = eval(d)
    if len(d) != 2:
        return -1
    keys = sorted(d.keys())
    return d[keys[1]] - d[keys[0]]

print(protocol(INPUT))`,
            "output": "5",
            "validAnswers": ["{\"a\":2,\"b\":7}", "{\"x\":3,\"y\":8}"],
            "softHint": "Sorted keys determine subtraction order.",
            "strongHint": "Subtract smaller-key value from larger-key value. Input format: {\"a\":2,\"b\":7}."
        },
        {
            "type": "code",
            "snippet": `def protocol(a, b):
    # Format: INPUT_A input should map to string "[1,2,3,4], 2" 
    # This unpacks that string into list (a) and int (b)
    temp = eval(a)  
    a = temp[0]
    b = temp[1]
    
    if len(a) != 4:
        return -1
    s = sum(a)
    p = 1
    for x in a:
        p *= x
    return (p - s) + b

print(protocol(INPUT_X))`,
            "output": "20",
            "validAnswers": ["[1,2,3,4], 2", "[2,2,3,3], -2"],
            "softHint": "Product and sum both matter.",
            "strongHint": "Solve (product - sum) + b = 20 with exactly 4 elements. Input array and number."
        }
    ],
    "LINUX": [
        {
            "type": "code",
            "snippet": `# Assume INPUT is a filename
echo $(grep -E '^[^#].*[^ ]$' INPUT | wc -l)`,
            "output": "3",
            "validAnswers": ["fileA.txt", "fileB.txt"],
            "softHint": "Lines starting with # are ignored.",
            "strongHint": "Counts non-comment lines that do not end with space."
        },
        {
            "type": "code",
            "snippet": `# INPUT is a directory
find INPUT -type f -size +1k -size -5k | wc -l`,
            "output": "2",
            "validAnswers": ["dirAlpha", "dirBeta"],
            "softHint": "File size constraints.",
            "strongHint": "Only files strictly between 1KB and 5KB."
        },
        {
            "type": "code",
            "snippet": `# INPUT is a string
echo INPUT | tr -d 'aeiou' | rev`,
            "output": "tpsrC",
            "validAnswers": ["CorruptSapi", "ScriptOpua"],
            "softHint": "Vowels removed first.",
            "strongHint": "Remove lowercase vowels before reversing."
        },
        {
            "type": "code",
            "snippet": `# INPUT is a file
awk '{s+=$1} END {print s}' INPUT`,
            "output": "15",
            "validAnswers": ["numsA.txt", "numsB.txt"],
            "softHint": "Only first column is summed.",
            "strongHint": "Whitespace separated numeric first column."
        },
        {
            "type": "code",
            "snippet": `# INPUT is a username
id INPUT | cut -d '(' -f2 | cut -d ')' -f1`,
            "output": "daemon",
            "validAnswers": ["1", "daemon"],
            "softHint": "ID lookup behavior.",
            "strongHint": "Both numeric UID and username work."
        },
        {
            "type": "code",
            "snippet": `# INPUT is a process name
ps aux | grep INPUT | grep -v grep | wc -l`,
            "output": "1",
            "validAnswers": ["sshd", "cron"],
            "softHint": "Exact running process required.",
            "strongHint": "Must exist exactly once in process table."
        }
    ],
    "JAVA": [
        {
            "type": "code",
            "snippet": `public static int protocol(int a, int b) {
    // Inputs passed as literal integers
    Integer x = a;
    Integer y = b;
    return (x == y) ? 1 : 0;
}
System.out.println(protocol(INPUT_A, INPUT_B));`,
            "output": "1",
            "validAnswers": ["100, 100", "-128, -128"],
            "softHint": "Autoboxing is involved.",
            "strongHint": "Integer cache range matters. Pass inputs joined by commas, like: 100, 100"
        },
        {
            "type": "code",
            "snippet": `public static int protocol(String s) {
    return s.intern() == s ? 1 : 0;
}
System.out.println(protocol(INPUT));`,
            "output": "1",
            "validAnswers": ["JAVA", "HELLO"],
            "softHint": "String pool behavior.",
            "strongHint": "Literal strings behave differently from dynamically created ones."
        },
        {
            "type": "code",
            "snippet": `public static int protocol(int x) {
    int y = x << 2;
    return (y >> 2) == x ? 1 : 0;
}
System.out.println(protocol(INPUT));`,
            "output": "0",
            "validAnswers": ["1073741824", "-1073741824"],
            "softHint": "Bit shifting overflow.",
            "strongHint": "Left shift may overflow sign bit."
        },
        {
            "type": "code",
            "snippet": `public static int protocol(int[] arr) {
    // Input must be passed as an array format, eg: new int[]{1, 2, 3}
    return Arrays.stream(arr)
                 .distinct()
                 .reduce(0, Integer::sum);
}
System.out.println(protocol(INPUT));`,
            "output": "6",
            "validAnswers": ["[1,2,3]", "[1,1,2,3]"],
            "softHint": "Duplicate values removed first.",
            "strongHint": "Distinct elements are summed. Note: Format inputs as array strings like [1,2,3]"
        },
        {
            "type": "code",
            "snippet": `public static int protocol(List<String> list) {
    // Passed as a List of strings
    list.sort((a,b) -> b.length() - a.length());
    return list.get(0).length();
}
System.out.println(protocol(INPUT));`,
            "output": "5",
            "validAnswers": ["[\"apple\",\"hi\",\"cat\"]", "[\"world\",\"a\",\"bb\"]"],
            "softHint": "Descending sort by length.",
            "strongHint": "Largest string length returned. Format input arrays as [\"str1\", \"str2\"]"
        },
        {
            "type": "code",
            "snippet": `public static int protocol(int a) {
    int result = 0;
    for(int i = 0; i < 32; i++) {
        if(((a >> i) & 1) == 1) result++;
    }
    return result;
}
System.out.println(protocol(INPUT));`,
            "output": "2",
            "validAnswers": ["3", "5"],
            "softHint": "Bit counting.",
            "strongHint": "Counts number of 1 bits in binary representation."
        }
    ],
    "CRYPTO": [
        {
            "type": "code",
            "snippet": `# XOR protocol
def protocol(a, b):
    # INPUT_A maps to string "10, 42" -> unpack to separate ints
    return (a ^ b) ^ a

# Submit format: a, b
temp_A = eval(INPUT_A)
temp_B = eval(INPUT_B)
print(protocol(temp_A[0], temp_A[1]))
print(protocol(temp_B[0], temp_B[1]))`,
            "output": "42",
            "validAnswers": ["10, 42", "999, 42"],
            "softHint": "XOR has cancellation property.",
            "strongHint": "a ^ b ^ a simplifies."
        },
        {
            "type": "code",
            "snippet": `# Modular inverse trap
def protocol(x):
    return (7 * x) % 26

print(protocol(int(INPUT_A)))
print(protocol(int(INPUT_B)))`,
            "output": "1",
            "validAnswers": ["15", "41"],
            "softHint": "Solve modular equation.",
            "strongHint": "7x ≡ 1 (mod 26)."
        },
        {
            "type": "code",
            "snippet": `# RSA-like small trap
def protocol(m):
    e = 3
    n = 55
    return pow(m, e, n)

print(protocol(int(INPUT_A)))
print(protocol(int(INPUT_B)))`,
            "output": "8",
            "validAnswers": ["2", "57"],
            "softHint": "Small modulus arithmetic.",
            "strongHint": "Compute m³ mod 55."
        },
        {
            "type": "code",
            "snippet": `# Caesar shift reverse
def protocol(s):
    return ''.join(chr((ord(c)-65+3)%26 + 65) for c in s)

print(protocol(INPUT_A))
print(protocol(INPUT_B))`,
            "output": "DEF",
            "validAnswers": ["ABC", "XYZ"],
            "softHint": "Shift by 3.",
            "strongHint": "Reverse engineer Caesar cipher."
        },
        {
            "type": "code",
            "snippet": `# Hash-length trap
import hashlib
def protocol(s):
    return len(hashlib.md5(s.encode()).hexdigest())

print(protocol(INPUT_A))
print(protocol(INPUT_B))`,
            "output": "32",
            "validAnswers": ["crypto", "security"],
            "softHint": "MD5 output format.",
            "strongHint": "MD5 hex digest length is constant."
        },
        {
            "type": "code",
            "snippet": `# Base conversion trap
def protocol(n):
    return bin(n).count('1')

print(protocol(int(INPUT_A)))
print(protocol(int(INPUT_B)))`,
            "output": "3",
            "validAnswers": ["7", "11"],
            "softHint": "Binary representation matters.",
            "strongHint": "Count number of 1 bits."
        }
    ],
    "SQL": [
        {
            "type": "code",
            "snippet": `-- Table: employees(id INT, salary INT)

SELECT COUNT(*) 
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);`,
            "output": "2",
            "validAnswers": [
                "[{id:1, salary:10}, {id:2, salary:20}, {id:3, salary:30}, {id:4, salary:40}]",
                "[{id:1, salary:5}, {id:2, salary:5}, {id:3, salary:15}, {id:4, salary:25}]"
            ],
            "softHint": "Average affects threshold.",
            "strongHint": "Exactly two salaries must exceed overall average. Input as an array of objects."
        },
        {
            "type": "code",
            "snippet": `-- Table: orders(user_id INT, amount INT)

SELECT user_id
FROM orders
GROUP BY user_id
HAVING SUM(amount) > 100;`,
            "output": "Only one user returned",
            "validAnswers": [
                "[{user_id:1, amount:60}, {user_id:1, amount:50}, {user_id:2, amount:30}]",
                "[{user_id:3, amount:120}, {user_id:4, amount:20}, {user_id:4, amount:30}]"
            ],
            "softHint": "Aggregation happens after grouping.",
            "strongHint": "Exactly one group must have sum > 100."
        },
        {
            "type": "code",
            "snippet": `-- Table: A(id INT)
-- Table: B(id INT)

SELECT COUNT(*)
FROM A
LEFT JOIN B ON A.id = B.id
WHERE B.id IS NULL;`,
            "output": "1",
            "validAnswers": [
                "[{id:1},{id:2}], [{id:1}]",
                "[{id:5},{id:6}], [{id:6}]"
            ],
            "softHint": "Left join preserves unmatched rows.",
            "strongHint": "Exactly one row in A must not match B. Input table A, then table B arrays."
        },
        {
            "type": "code",
            "snippet": `-- Table: sales(region TEXT, revenue INT)

SELECT region
FROM sales
GROUP BY region
HAVING COUNT(*) = 2;`,
            "output": "One region",
            "validAnswers": [
                "[{region:\"North\", revenue:10}, {region:\"North\", revenue:20}, {region:\"South\", revenue:30}]",
                "[{region:\"East\", revenue:5}, {region:\"East\", revenue:15}, {region:\"West\", revenue:7}]"
            ],
            "softHint": "Exactly two rows per region.",
            "strongHint": "Only one region must appear exactly twice."
        },
        {
            "type": "code",
            "snippet": `-- Table: nums(val INT)

SELECT SUM(DISTINCT val)
FROM nums;`,
            "output": "6",
            "validAnswers": [
                "[{val:1},{val:2},{val:3}]",
                "[{val:1},{val:1},{val:2},{val:3}]"
            ],
            "softHint": "Duplicates removed first.",
            "strongHint": "Distinct values must sum to 6."
        },
        {
            "type": "code",
            "snippet": `-- Table: scores(player TEXT, points INT)

SELECT player
FROM (
  SELECT player, 
         RANK() OVER (ORDER BY points DESC) r
  FROM scores
) t
WHERE r = 1;`,
            "output": "Exactly one player",
            "validAnswers": [
                "[{player:\"A\", points:100}, {player:\"B\", points:80}]",
                "[{player:\"X\", points:50}, {player:\"Y\", points:40}]"
            ],
            "softHint": "Window functions assign rank.",
            "strongHint": "Top score must be unique (no ties)."
        }
    ],
    "HTML": [
        {
            "type": "code",
            "snippet": `<!-- Browser renders text inside body -->
<body>
  <div hidden>Secret</div>
  <p>Visible</p>
</body>`,
            "output": "Visible",
            "validAnswers": [
                "<div hidden>Secret</div><p>Visible</p>",
                "<div style='display:none'>Secret</div><p>Visible</p>"
            ],
            "softHint": "Hidden elements are not rendered.",
            "strongHint": "display:none and hidden behave similarly."
        },
        {
            "type": "code",
            "snippet": `<form>
  <input name="x" value="10">
  <input name="x" value="20">
</form>
<!-- Server receives only last value -->`,
            "output": "x=20",
            "validAnswers": [
                "<input name='x' value='10'><input name='x' value='20'>",
                "<input name='x' value='5'><input name='x' value='20'>"
            ],
            "softHint": "Duplicate names overwrite.",
            "strongHint": "Last input with same name wins."
        },
        {
            "type": "code",
            "snippet": `<ul>
  <li>One
  <li>Two
</ul>`,
            "output": "Two list items rendered",
            "validAnswers": [
                "<ul><li>One<li>Two</ul>",
                "<ul><li>One</li><li>Two</li></ul>"
            ],
            "softHint": "Some tags auto-close.",
            "strongHint": "<li> does not require explicit closing."
        },
        {
            "type": "code",
            "snippet": `<a href="#" onclick="return false">Click</a>`,
            "output": "No navigation occurs",
            "validAnswers": [
                "<a href='#' onclick='return false'>Click</a>",
                "<a href='#' onclick='event.preventDefault()'>Click</a>"
            ],
            "softHint": "Default action can be prevented.",
            "strongHint": "Returning false stops navigation."
        },
        {
            "type": "code",
            "snippet": `<img src="image.jpg">`,
            "output": "No closing tag required",
            "validAnswers": [
                "<img src='image.jpg'>",
                "<img src='image.jpg' />"
            ],
            "softHint": "Void elements behave differently.",
            "strongHint": "img is self-closing in HTML."
        },
        {
            "type": "code",
            "snippet": `<table>
  <tr>
    <td>A
    <td>B
</table>`,
            "output": "Two cells rendered in one row",
            "validAnswers": [
                "<table><tr><td>A<td>B</table>",
                "<table><tr><td>A</td><td>B</td></tr></table>"
            ],
            "softHint": "Browsers auto-correct missing tags.",
            "strongHint": "<td> auto-closes previous <td>."
        }
    ],
    "BINARY": [
        {
            "type": "code",
            "snippet": `# Two's complement trap
def protocol(x):
    return (~x) & 0xF

print(protocol(INPUT))`,
            "output": "5",
            "validAnswers": ["10", "26"],
            "softHint": "Bitwise NOT within 4-bit mask.",
            "strongHint": "~x flips bits, then masked to lower 4 bits."
        },
        {
            "type": "code",
            "snippet": `# XOR symmetry
def protocol(a, b):
    return (a ^ b) ^ b

print(protocol(INPUT_A, INPUT_B))`,
            "output": "13",
            "validAnswers": ["13, 7", "13, 99"],
            "softHint": "XOR cancels identical operands.",
            "strongHint": "(a ^ b) ^ b simplifies to a."
        },
        {
            "type": "code",
            "snippet": `# Bit shift overflow (32-bit signed simulation)
def protocol(x):
    y = (x << 1) & 0xFFFFFFFF
    return y >> 31

print(protocol(INPUT))`,
            "output": "1",
            "validAnswers": ["1073741824", "3221225472"],
            "softHint": "Left shift moves sign bit.",
            "strongHint": "Check highest bit after shift."
        },
        {
            "type": "code",
            "snippet": `# Hamming weight parity
def protocol(n):
    return bin(n).count('1') % 2

print(protocol(INPUT))`,
            "output": "1",
            "validAnswers": ["7", "11"],
            "softHint": "Odd number of 1 bits.",
            "strongHint": "Return 1 if bit count is odd."
        },
        {
            "type": "code",
            "snippet": `# Bit mask extraction
def protocol(x):
    return (x & 0b1010)

print(protocol(INPUT))`,
            "output": "8",
            "validAnswers": ["8", "12"],
            "softHint": "Mask keeps only certain positions.",
            "strongHint": "Binary 1010 keeps bits 3 and 1."
        },
        {
            "type": "code",
            "snippet": `# Rotate right (4-bit simulation)
def protocol(x):
    x = x & 0xF
    return ((x >> 1) | ((x & 1) << 3))

print(protocol(INPUT))`,
            "output": "9",
            "validAnswers": ["3", "19"],
            "softHint": "Right rotation, not shift.",
            "strongHint": "Lowest bit moves to highest position."
        }
    ],
    "CACHE": [
        {
            "type": "code",
            "snippet": `# Direct Mapped Cache
# Cache size = 16 bytes
# Block size = 4 bytes

def protocol(address):
    block = address // 4
    index = block % 4
    return index

print(protocol(INPUT))`,
            "output": "2",
            "validAnswers": ["8", "40"],
            "softHint": "Index depends on block number.",
            "strongHint": "Block = address / 4, index = block % 4."
        },
        {
            "type": "code",
            "snippet": `# 2-way set associative cache
# 4 sets total

def protocol(address):
    block = address // 8
    set_index = block % 4
    return set_index

print(protocol(INPUT))`,
            "output": "1",
            "validAnswers": ["8", "40"],
            "softHint": "Set index calculation.",
            "strongHint": "Divide by block size first."
        },
        {
            "type": "code",
            "snippet": `# LRU simulation
# Cache holds 2 elements

def protocol(seq):
    cache = []
    for x in seq:
        if x in cache:
            cache.remove(x)
        elif len(cache) == 2:
            cache.pop(0)
        cache.append(x)
    return cache

print(protocol(eval(INPUT)))`,
            "output": "[2, 3]",
            "validAnswers": ["[1,2,3]", "[2,1,3]"],
            "softHint": "LRU evicts oldest.",
            "strongHint": "Only 2 slots, order matters. Input as sequence array, e.g. [1,2,3]"
        },
        {
            "type": "code",
            "snippet": `# Write-back vs write-through
def protocol(policy):
    if policy == "write-back":
        return "memory updated later"
    elif policy == "write-through":
        return "memory updated immediately"
    return "invalid"

print(protocol(INPUT))`,
            "output": "memory updated later",
            "validAnswers": ["write-back", "write-back"],
            "softHint": "Policy name exact match.",
            "strongHint": "Only write-back delays memory update."
        },
        {
            "type": "code",
            "snippet": `# Tag extraction
# 16-bit address
# 4-bit offset
# 4-bit index

def protocol(address):
    tag = address >> 8
    return tag

print(protocol(INPUT))`,
            "output": "5",
            "validAnswers": ["1280", "1312"],
            "softHint": "Shift removes offset and index.",
            "strongHint": "Upper 8 bits form tag."
        },
        {
            "type": "code",
            "snippet": `# HTTP Cache Control
def protocol(header):
    if "no-store" in header:
        return "not cached"
    if "max-age=0" in header:
        return "revalidate"
    return "cached"

print(protocol(INPUT))`,
            "output": "revalidate",
            "validAnswers": ["Cache-Control: max-age=0", "max-age=0, private"],
            "softHint": "Specific directive triggers revalidation.",
            "strongHint": "max-age=0 forces validation."
        }
    ],
    "REACT": [
        {
            "type": "code",
            "snippet": `function App({ value }) {
  const [count, setCount] = React.useState(value);

  React.useEffect(() => {
    setCount(value);
  }, [value]);

  return <h1>{count}</h1>;
}`,
            "output": "Displays 5",
            "validAnswers": ["{ value: 5 }", "{ value: 5, extra: true }"],
            "softHint": "State syncs with prop changes.",
            "strongHint": "useEffect updates count whenever value changes."
        },
        {
            "type": "code",
            "snippet": `function App() {
  const [state, setState] = React.useState(0);

  const handleClick = () => {
    setState(state + 1);
    setState(state + 1);
  };

  return <button onClick={handleClick}>{state}</button>;
}`,
            "output": "After one click → 1",
            "validAnswers": ["single click", "React 18 default batching"],
            "softHint": "State batching.",
            "strongHint": "Both updates use same stale closure value."
        },
        {
            "type": "code",
            "snippet": `function App() {
  const ref = React.useRef(0);
  const [x, setX] = React.useState(0);

  React.useEffect(() => {
    ref.current += 1;
  });

  return <div>{ref.current}</div>;
}`,
            "output": "Displays 0 initially",
            "validAnswers": ["Initial render only", "StrictMode disabled"],
            "softHint": "useEffect runs after render.",
            "strongHint": "ref mutation does not trigger re-render."
        },
        {
            "type": "code",
            "snippet": `function App() {
  const [list, setList] = React.useState([1,2,3]);

  const add = () => {
    list.push(4);
    setList(list);
  };

  return <button onClick={add}>{list.length}</button>;
}`,
            "output": "Still shows 3 after click",
            "validAnswers": ["No re-render due to same reference", "Mutating state directly"],
            "softHint": "Reference equality matters.",
            "strongHint": "React shallow compares state reference."
        },
        {
            "type": "code",
            "snippet": `function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 0);
  }, []);

  return <h1>{count}</h1>;
}`,
            "output": "Displays 1",
            "validAnswers": ["Initial render only", "No StrictMode double invoke"],
            "softHint": "Closure captures initial value.",
            "strongHint": "Timeout executes after first render."
        },
        {
            "type": "code",
            "snippet": `function Child() {
  console.log("Child Render");
  return <div>Child</div>;
}

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Inc</button>
      <Child />
    </>
  );
}`,
            "output": "Child Render logs on every click",
            "validAnswers": ["No memoization", "Child not wrapped in React.memo"],
            "softHint": "Parent re-render affects children.",
            "strongHint": "Without memo, child always re-renders."
        },
        {
            "type": "code",
            "snippet": `function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(c => c + 1);
  }, []);

  return <h1>{count}</h1>;
}`,
            "output": "2",
            "validAnswers": [
                "Rendered in React 18 with StrictMode enabled",
                "Development build using <React.StrictMode>"
            ],
            "softHint": "This effect may not run only once in development.",
            "strongHint": "React 18 StrictMode intentionally runs effects twice, and functional updates accumulate."
        }
    ],
    "DOCKER": [
        {
            "type": "code",
            "snippet": `# Dockerfile
FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "server.js"]

# Build twice without changing package.json
# What happens to npm install layer?`,
            "output": "Layer is cached",
            "validAnswers": ["No change in package.json", "Only source code files modified"],
            "softHint": "Docker layers depend on previous instruction.",
            "strongHint": "COPY package.json invalidates only when file changes."
        },
        {
            "type": "code",
            "snippet": `# Dockerfile
FROM ubuntu
ENTRYPOINT ["echo"]
CMD ["Hello"]

# Run:
docker run image World`,
            "output": "World",
            "validAnswers": ["docker run image World", "docker run image 'World'"],
            "softHint": "CMD can be overridden.",
            "strongHint": "Arguments passed override CMD but not ENTRYPOINT."
        },
        {
            "type": "code",
            "snippet": `docker run -v /host/data:/container/data image

# File exists in image at /container/data/file.txt
# Host folder is empty.
# What happens inside container?`,
            "output": "Host directory hides image content",
            "validAnswers": ["Bind mount overrides container path", "Volume mount masks image layer content"],
            "softHint": "Mount precedence.",
            "strongHint": "Bind mount replaces container directory view."
        },
        {
            "type": "code",
            "snippet": `# Multi-stage build
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Final image size minimal?`,
            "output": "Node not present in final image",
            "validAnswers": ["Multi-stage removes build dependencies", "Only dist copied to nginx stage"],
            "softHint": "Stages are isolated.",
            "strongHint": "Final image contains only last stage."
        },
        {
            "type": "code",
            "snippet": `docker run --network host nginx

# Access via localhost:80`,
            "output": "Accessible on host directly",
            "validAnswers": ["Host network mode shares namespace", "No port mapping required"],
            "softHint": "Network namespace difference.",
            "strongHint": "--network host bypasses Docker NAT."
        },
        {
            "type": "code",
            "snippet": `# Dockerfile
FROM python:3.11
CMD ["sleep", "1000"]

# Container stopped with docker stop
# Why might it not terminate immediately?`,
            "output": "PID 1 signal handling issue",
            "validAnswers": ["No init process", "PID 1 ignores SIGTERM"],
            "softHint": "PID 1 behaves differently.",
            "strongHint": "Processes running as PID 1 must handle signals explicitly."
        }
    ]
};
