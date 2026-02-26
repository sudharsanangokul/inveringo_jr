const round2Questions = {
    "PYTHON": [
        {
            "type": "code",
            "snippet": "/* PYTHON HARD: DICT HASH COLLISION */\nimport sys, gc, struct, ctypes, dis, weakref\nfrom typing import Generic, TypeVar, Optional, Any, Tuple, Dict\nT = TypeVar('T')\n\nclass _CPythonContextManager:\n    __slots__ = ['_state', '_refs']\n    def __init__(self, trace: bool = False):\n        self._state = ctypes.addressof(sys.getallocatedblocks) if trace else 0\n        self._refs = weakref.WeakSet()\n    def __enter__(self):\n        gc.disable(); sys.setswitchinterval(0.0001)\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        gc.enable(); sys.setswitchinterval(0.005)\n\n# ----------------- SYSTEM EXEC INIT -----------------\nwith _CPythonContextManager(trace=True) as _ctx:\n    _internal_cache_sz = sys.getsizeof(0) * 1024\n    _ptr = ctypes.cast(id(_ctx), ctypes.POINTER(ctypes.c_void_p))\n\n    class Key:\n        def __init__(self, v): self.v = v\n        def __hash__(self): return hash(self.v) % 4\n        def __eq__(self, o): return self.v == o.v\n    d = {}\n    k1, k2, k3, k4 = Key(1), Key(2), Key(5), Key(9)\n    d[k1], d[k2], d[k3] = 'A', 'B', 'C'\n    del d[k3]\n    d[k4] = 'D'\n    print(list(d.keys())[1].v)",
            "output": "9",
            "validAnswers": [
                "1, 5",
                "5, 1",
                "5,1",
                "1,5"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* PYTHON HARD: COMPREHENSION SCOPING */\nimport sys, gc, struct, ctypes, dis, weakref\nfrom typing import Generic, TypeVar, Optional, Any, Tuple, Dict\nT = TypeVar('T')\n\nclass _CPythonContextManager:\n    __slots__ = ['_state', '_refs']\n    def __init__(self, trace: bool = False):\n        self._state = ctypes.addressof(sys.getallocatedblocks) if trace else 0\n        self._refs = weakref.WeakSet()\n    def __enter__(self):\n        gc.disable(); sys.setswitchinterval(0.0001)\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        gc.enable(); sys.setswitchinterval(0.005)\n\n# ----------------- SYSTEM EXEC INIT -----------------\nwith _CPythonContextManager(trace=True) as _ctx:\n    _internal_cache_sz = sys.getsizeof(0) * 1024\n    _ptr = ctypes.cast(id(_ctx), ctypes.POINTER(ctypes.c_void_p))\n\n    x = 1\n    funcs = [lambda: x for x in range(3)]\n    result = [f() for f in funcs]",
            "output": "[0, 1, 2]",
            "validAnswers": [
                "x=x",
                "val=x",
                "i=x",
                "y=x"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* PYTHON IMPOSSIBLE: FLOAT LIMITS */\nimport sys, gc, struct, ctypes, dis, weakref\nfrom typing import Generic, TypeVar, Optional, Any, Tuple, Dict\nT = TypeVar('T')\n\nclass _CPythonContextManager:\n    __slots__ = ['_state', '_refs']\n    def __init__(self, trace: bool = False):\n        self._state = ctypes.addressof(sys.getallocatedblocks) if trace else 0\n        self._refs = weakref.WeakSet()\n    def __enter__(self):\n        gc.disable(); sys.setswitchinterval(0.0001)\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        gc.enable(); sys.setswitchinterval(0.005)\n\n# ----------------- SYSTEM EXEC INIT -----------------\nwith _CPythonContextManager(trace=True) as _ctx:\n    _internal_cache_sz = sys.getsizeof(0) * 1024\n    _ptr = ctypes.cast(id(_ctx), ctypes.POINTER(ctypes.c_void_p))\n\n    def extract_payload(f):\n        b = struct.pack('>d', f)\n        return hex(int.from_bytes(b, 'big') & ((1 << 51) - 1))",
            "output": "0xdeadbeef",
            "validAnswers": [
                "7ff80000deadbeef",
                "7FF80000DEADBEEF"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* PYTHON IMPOSSIBLE: MRO LINEARIZATION */\nimport sys, gc, struct, ctypes, dis, weakref\nfrom typing import Generic, TypeVar, Optional, Any, Tuple, Dict\nT = TypeVar('T')\n\nclass _CPythonContextManager:\n    __slots__ = ['_state', '_refs']\n    def __init__(self, trace: bool = False):\n        self._state = ctypes.addressof(sys.getallocatedblocks) if trace else 0\n        self._refs = weakref.WeakSet()\n    def __enter__(self):\n        gc.disable(); sys.setswitchinterval(0.0001)\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        gc.enable(); sys.setswitchinterval(0.005)\n\n# ----------------- SYSTEM EXEC INIT -----------------\nwith _CPythonContextManager(trace=True) as _ctx:\n    _internal_cache_sz = sys.getsizeof(0) * 1024\n    _ptr = ctypes.cast(id(_ctx), ctypes.POINTER(ctypes.c_void_p))\n\n    class A: pass\n    class B(A): pass\n    class C(A): pass\n    class D(B, C): pass",
            "output": "TypeError",
            "validAnswers": [
                "C, B, A",
                "C, B",
                "A, B",
                "A, C"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* PYTHON IMPOSSIBLE: UNICODE EXPLOIT */\nimport sys, gc, struct, ctypes, dis, weakref\nfrom typing import Generic, TypeVar, Optional, Any, Tuple, Dict\nT = TypeVar('T')\n\nclass _CPythonContextManager:\n    __slots__ = ['_state', '_refs']\n    def __init__(self, trace: bool = False):\n        self._state = ctypes.addressof(sys.getallocatedblocks) if trace else 0\n        self._refs = weakref.WeakSet()\n    def __enter__(self):\n        gc.disable(); sys.setswitchinterval(0.0001)\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        gc.enable(); sys.setswitchinterval(0.005)\n\n# ----------------- SYSTEM EXEC INIT -----------------\nwith _CPythonContextManager(trace=True) as _ctx:\n    _internal_cache_sz = sys.getsizeof(0) * 1024\n    _ptr = ctypes.cast(id(_ctx), ctypes.POINTER(ctypes.c_void_p))\n\n    def check(user):\n        import unicodedata\n        if user == \"admin\": return \"DENIED\"\n        if unicodedata.normalize('NFKC', user) == \"admin\": return \"GRANTED\"",
            "output": "GRANTED",
            "validAnswers": [
                "\\u24d0",
                "\\uFF41"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* PYTHON IMPOSSIBLE: AST OPTIMIZATION */\nimport sys, gc, struct, ctypes, dis, weakref\nfrom typing import Generic, TypeVar, Optional, Any, Tuple, Dict\nT = TypeVar('T')\n\nclass _CPythonContextManager:\n    __slots__ = ['_state', '_refs']\n    def __init__(self, trace: bool = False):\n        self._state = ctypes.addressof(sys.getallocatedblocks) if trace else 0\n        self._refs = weakref.WeakSet()\n    def __enter__(self):\n        gc.disable(); sys.setswitchinterval(0.0001)\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        gc.enable(); sys.setswitchinterval(0.005)\n\n# ----------------- SYSTEM EXEC INIT -----------------\nwith _CPythonContextManager(trace=True) as _ctx:\n    _internal_cache_sz = sys.getsizeof(0) * 1024\n    _ptr = ctypes.cast(id(_ctx), ctypes.POINTER(ctypes.c_void_p))\n\n    def test():\n        a = 256; b = 256\n        x = 257; y = 257\n        return (a is b, x is y)",
            "output": "(True, True)",
            "validAnswers": [
                "(True, True)",
                "(True,True)"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ],
    "LINUX": [
        {
            "type": "code",
            "snippet": "/* LINUX HARD: FD HIJACKING */\n#!/bin/bash\n# =================================================================\n# KERNEL MODULE STUB / SYSFS BRIDGE\n# =================================================================\nset -euo pipefail\nIFS=$'\\n\\t'\n\n__init_kallsyms() {\n  if [ -r /proc/kallsyms ]; then\n    _base_addr=$(awk '/startup_64/ {print $1}' /proc/kallsyms | head -n 1)\n  fi\n}\n\nfunction _map_mem() {\n    local pgsz=$(getconf PAGESIZE)\n    local avail=$(cat /proc/meminfo | grep MemAvailable | awk '{print $2}')\n    if [ \"$avail\" -lt 1024 ]; then exit 1; fi\n}\n\n__init_kallsyms || true\n_map_mem &>/dev/null\n\n# --- EXECUTION PAYLOAD ---\nexec 3<> /dev/tcp/10.0.0.1/8080",
            "output": "stderr bound",
            "validAnswers": [
                "2>&3"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* LINUX HARD: SUID MASK */\n#!/bin/bash\n# =================================================================\n# KERNEL MODULE STUB / SYSFS BRIDGE\n# =================================================================\nset -euo pipefail\nIFS=$'\\n\\t'\n\n__init_kallsyms() {\n  if [ -r /proc/kallsyms ]; then\n    _base_addr=$(awk '/startup_64/ {print $1}' /proc/kallsyms | head -n 1)\n  fi\n}\n\nfunction _map_mem() {\n    local pgsz=$(getconf PAGESIZE)\n    local avail=$(cat /proc/meminfo | grep MemAvailable | awk '{print $2}')\n    if [ \"$avail\" -lt 1024 ]; then exit 1; fi\n}\n\n__init_kallsyms || true\n_map_mem &>/dev/null\n\n# --- EXECUTION PAYLOAD ---\n$ getcap /usr/bin/ping  # Outputs: cap_net_raw+ep",
            "output": "-rwsr-xr-x",
            "validAnswers": [
                "4755"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* LINUX IMPOSSIBLE: SYMLINK EXPLOIT */\n#!/bin/bash\n# =================================================================\n# KERNEL MODULE STUB / SYSFS BRIDGE\n# =================================================================\nset -euo pipefail\nIFS=$'\\n\\t'\n\n__init_kallsyms() {\n  if [ -r /proc/kallsyms ]; then\n    _base_addr=$(awk '/startup_64/ {print $1}' /proc/kallsyms | head -n 1)\n  fi\n}\n\nfunction _map_mem() {\n    local pgsz=$(getconf PAGESIZE)\n    local avail=$(cat /proc/meminfo | grep MemAvailable | awk '{print $2}')\n    if [ \"$avail\" -lt 1024 ]; then exit 1; fi\n}\n\n__init_kallsyms || true\n_map_mem &>/dev/null\n\n# --- EXECUTION PAYLOAD ---\n$ mkdir -m 1777 /tmp/sandbox\n$ touch /tmp/sandbox/flag\n$ ln -s /etc/shadow /tmp/sandbox/link",
            "output": "File Content Read",
            "validAnswers": [
                "owner of the directory",
                "directory owner",
                "the user",
                "root"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* LINUX IMPOSSIBLE: FORK BOMB LIMIT */\n#!/bin/bash\n# =================================================================\n# KERNEL MODULE STUB / SYSFS BRIDGE\n# =================================================================\nset -euo pipefail\nIFS=$'\\n\\t'\n\n__init_kallsyms() {\n  if [ -r /proc/kallsyms ]; then\n    _base_addr=$(awk '/startup_64/ {print $1}' /proc/kallsyms | head -n 1)\n  fi\n}\n\nfunction _map_mem() {\n    local pgsz=$(getconf PAGESIZE)\n    local avail=$(cat /proc/meminfo | grep MemAvailable | awk '{print $2}')\n    if [ \"$avail\" -lt 1024 ]; then exit 1; fi\n}\n\n__init_kallsyms || true\n_map_mem &>/dev/null\n\n# --- EXECUTION PAYLOAD ---\n$ :(){ :|:& };:",
            "output": "Resource unavailable",
            "validAnswers": [
                "nproc"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* LINUX IMPOSSIBLE: INODE EXHAUSTION */\n#!/bin/bash\n# =================================================================\n# KERNEL MODULE STUB / SYSFS BRIDGE\n# =================================================================\nset -euo pipefail\nIFS=$'\\n\\t'\n\n__init_kallsyms() {\n  if [ -r /proc/kallsyms ]; then\n    _base_addr=$(awk '/startup_64/ {print $1}' /proc/kallsyms | head -n 1)\n  fi\n}\n\nfunction _map_mem() {\n    local pgsz=$(getconf PAGESIZE)\n    local avail=$(cat /proc/meminfo | grep MemAvailable | awk '{print $2}')\n    if [ \"$avail\" -lt 1024 ]; then exit 1; fi\n}\n\n__init_kallsyms || true\n_map_mem &>/dev/null\n\n# --- EXECUTION PAYLOAD ---\n$ df -h /data # Shows 90G available\n$ touch /data/test # No space left",
            "output": "IUse% = 100%",
            "validAnswers": [
                "-i"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* LINUX IMPOSSIBLE: CGROUP OOM */\n#!/bin/bash\n# =================================================================\n# KERNEL MODULE STUB / SYSFS BRIDGE\n# =================================================================\nset -euo pipefail\nIFS=$'\\n\\t'\n\n__init_kallsyms() {\n  if [ -r /proc/kallsyms ]; then\n    _base_addr=$(awk '/startup_64/ {print $1}' /proc/kallsyms | head -n 1)\n  fi\n}\n\nfunction _map_mem() {\n    local pgsz=$(getconf PAGESIZE)\n    local avail=$(cat /proc/meminfo | grep MemAvailable | awk '{print $2}')\n    if [ \"$avail\" -lt 1024 ]; then exit 1; fi\n}\n\n__init_kallsyms || true\n_map_mem &>/dev/null\n\n# --- EXECUTION PAYLOAD ---\n$ echo 1 > memory.oom.group",
            "output": "Killed (OOM)",
            "validAnswers": [
                "1"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ],
    "JAVA": [
        {
            "type": "code",
            "snippet": "/* JAVA HARD: BOXING BOUNDARY */\npackage com.inveringo.core.bytecode;\n\nimport sun.misc.Unsafe;\nimport java.lang.reflect.Field;\nimport java.util.concurrent.locks.*;\nimport java.util.concurrent.*;\nimport java.lang.ref.*;\n\n/**\n * JVM Direct Memory allocation and Thread Synchronization bridge.\n * WARNING: Bypasses standard garbage collection semantics.\n * @since 1.8\n */\npublic final class SystemAllocator {\n    private static final Unsafe unsafe;\n    private static final long baseOffset;\n\n    static {\n        try {\n            Field f = Unsafe.class.getDeclaredField(\"theUnsafe\");\n            f.setAccessible(true);\n            unsafe = (Unsafe) f.get(null);\n            baseOffset = unsafe.arrayBaseOffset(Object[].class);\n        } catch (Exception e) {\n            throw new Error(\"JVM Security Violation\", e);\n        }\n    }\n\n    // --- CORE TRANSACTION LOGIC ---\n        Integer a = 127; Integer b = 127;\n    Integer c = 128; Integer d = 128;\n}",
            "output": "true,true",
            "validAnswers": [
                "-XX:AutoBoxCacheMax=200"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* JAVA HARD: STRING POOL */\npackage com.inveringo.core.bytecode;\n\nimport sun.misc.Unsafe;\nimport java.lang.reflect.Field;\nimport java.util.concurrent.locks.*;\nimport java.util.concurrent.*;\nimport java.lang.ref.*;\n\n/**\n * JVM Direct Memory allocation and Thread Synchronization bridge.\n * WARNING: Bypasses standard garbage collection semantics.\n * @since 1.8\n */\npublic final class SystemAllocator {\n    private static final Unsafe unsafe;\n    private static final long baseOffset;\n\n    static {\n        try {\n            Field f = Unsafe.class.getDeclaredField(\"theUnsafe\");\n            f.setAccessible(true);\n            unsafe = (Unsafe) f.get(null);\n            baseOffset = unsafe.arrayBaseOffset(Object[].class);\n        } catch (Exception e) {\n            throw new Error(\"JVM Security Violation\", e);\n        }\n    }\n\n    // --- CORE TRANSACTION LOGIC ---\n        String s = new String(\"A\").intern();\n}",
            "output": "Heap Space",
            "validAnswers": [
                "Heap",
                "Heap Space",
                "Heap Memory"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* JAVA IMPOSSIBLE: FINALLY EXPLOIT */\npackage com.inveringo.core.bytecode;\n\nimport sun.misc.Unsafe;\nimport java.lang.reflect.Field;\nimport java.util.concurrent.locks.*;\nimport java.util.concurrent.*;\nimport java.lang.ref.*;\n\n/**\n * JVM Direct Memory allocation and Thread Synchronization bridge.\n * WARNING: Bypasses standard garbage collection semantics.\n * @since 1.8\n */\npublic final class SystemAllocator {\n    private static final Unsafe unsafe;\n    private static final long baseOffset;\n\n    static {\n        try {\n            Field f = Unsafe.class.getDeclaredField(\"theUnsafe\");\n            f.setAccessible(true);\n            unsafe = (Unsafe) f.get(null);\n            baseOffset = unsafe.arrayBaseOffset(Object[].class);\n        } catch (Exception e) {\n            throw new Error(\"JVM Security Violation\", e);\n        }\n    }\n\n    // --- CORE TRANSACTION LOGIC ---\n        try { return 1; } finally { return 2; }\n}",
            "output": "2",
            "validAnswers": [
                "2"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* JAVA IMPOSSIBLE: DBL BRACE LEAK */\npackage com.inveringo.core.bytecode;\n\nimport sun.misc.Unsafe;\nimport java.lang.reflect.Field;\nimport java.util.concurrent.locks.*;\nimport java.util.concurrent.*;\nimport java.lang.ref.*;\n\n/**\n * JVM Direct Memory allocation and Thread Synchronization bridge.\n * WARNING: Bypasses standard garbage collection semantics.\n * @since 1.8\n */\npublic final class SystemAllocator {\n    private static final Unsafe unsafe;\n    private static final long baseOffset;\n\n    static {\n        try {\n            Field f = Unsafe.class.getDeclaredField(\"theUnsafe\");\n            f.setAccessible(true);\n            unsafe = (Unsafe) f.get(null);\n            baseOffset = unsafe.arrayBaseOffset(Object[].class);\n        } catch (Exception e) {\n            throw new Error(\"JVM Security Violation\", e);\n        }\n    }\n\n    // --- CORE TRANSACTION LOGIC ---\n        java.util.List<String> l = new java.util.ArrayList<String>() {{ add(\"Data\"); }};\n}",
            "output": "OutOfMemoryError",
            "validAnswers": [
                "this",
                "The enclosing class instance",
                "Enclosing instance",
                "Outer class reference"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* JAVA IMPOSSIBLE: FIELD SHADOWING */\npackage com.inveringo.core.bytecode;\n\nimport sun.misc.Unsafe;\nimport java.lang.reflect.Field;\nimport java.util.concurrent.locks.*;\nimport java.util.concurrent.*;\nimport java.lang.ref.*;\n\n/**\n * JVM Direct Memory allocation and Thread Synchronization bridge.\n * WARNING: Bypasses standard garbage collection semantics.\n * @since 1.8\n */\npublic final class SystemAllocator {\n    private static final Unsafe unsafe;\n    private static final long baseOffset;\n\n    static {\n        try {\n            Field f = Unsafe.class.getDeclaredField(\"theUnsafe\");\n            f.setAccessible(true);\n            unsafe = (Unsafe) f.get(null);\n            baseOffset = unsafe.arrayBaseOffset(Object[].class);\n        } catch (Exception e) {\n            throw new Error(\"JVM Security Violation\", e);\n        }\n    }\n\n    // --- CORE TRANSACTION LOGIC ---\n        class P { public String t = \"P\"; }\n    class C extends P { public String t = \"C\"; }\n}",
            "output": "P",
            "validAnswers": [
                "Hiding",
                "Field Hiding",
                "Shadowing",
                "Early Binding",
                "Static Binding"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* JAVA IMPOSSIBLE: ARRAYSTORE */\npackage com.inveringo.core.bytecode;\n\nimport sun.misc.Unsafe;\nimport java.lang.reflect.Field;\nimport java.util.concurrent.locks.*;\nimport java.util.concurrent.*;\nimport java.lang.ref.*;\n\n/**\n * JVM Direct Memory allocation and Thread Synchronization bridge.\n * WARNING: Bypasses standard garbage collection semantics.\n * @since 1.8\n */\npublic final class SystemAllocator {\n    private static final Unsafe unsafe;\n    private static final long baseOffset;\n\n    static {\n        try {\n            Field f = Unsafe.class.getDeclaredField(\"theUnsafe\");\n            f.setAccessible(true);\n            unsafe = (Unsafe) f.get(null);\n            baseOffset = unsafe.arrayBaseOffset(Object[].class);\n        } catch (Exception e) {\n            throw new Error(\"JVM Security Violation\", e);\n        }\n    }\n\n    // --- CORE TRANSACTION LOGIC ---\n        Object[] arr = new String[10]; arr[0] = new Integer(5);\n}",
            "output": "ArrayStoreException",
            "validAnswers": [
                "Generics",
                "Generic Collections",
                "Type Erasure",
                "Generics<>"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ],
    "CRYPTO": [
        {
            "type": "code",
            "snippet": "/* CRYPTO HARD: LENGTH EXTENSION */\nfrom cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes\nfrom cryptography.hazmat.backends import default_backend\nimport os, hashlib, hmac, binascii\nfrom typing import Union, ByteString\n\nclass SecureEnclave:\n    def __init__(self, _seed_len: int = 4096):\n        self._entropy = os.urandom(_seed_len)\n        self._backend = default_backend()\n        self._kdf_iters = 600000\n    \n    def _constant_time_compare(self, val1: bytes, val2: bytes) -> bool:\n        if len(val1) != len(val2): return False\n        return hmac.compare_digest(val1, val2)\n\n    def _derive_master_key(self, hsm_output: bytes) -> bytes:\n        return hashlib.pbkdf2_hmac('sha512', hsm_output, self._entropy[:32], self._kdf_iters)\n\n# --- CRYPTOGRAPHIC PRIMITIVE INSTANTIATION ---\nif __name__ == '__main__':\n    _enclave = SecureEnclave()\n    mac = hashlib.md5((secret + data).encode())",
            "output": "Valid MAC Generated",
            "validAnswers": [
                "State Variables",
                "Chaining Variables",
                "Internal State",
                "Registers"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CRYPTO HARD: AES CTR REUSE */\nfrom cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes\nfrom cryptography.hazmat.backends import default_backend\nimport os, hashlib, hmac, binascii\nfrom typing import Union, ByteString\n\nclass SecureEnclave:\n    def __init__(self, _seed_len: int = 4096):\n        self._entropy = os.urandom(_seed_len)\n        self._backend = default_backend()\n        self._kdf_iters = 600000\n    \n    def _constant_time_compare(self, val1: bytes, val2: bytes) -> bool:\n        if len(val1) != len(val2): return False\n        return hmac.compare_digest(val1, val2)\n\n    def _derive_master_key(self, hsm_output: bytes) -> bytes:\n        return hashlib.pbkdf2_hmac('sha512', hsm_output, self._entropy[:32], self._kdf_iters)\n\n# --- CRYPTOGRAPHIC PRIMITIVE INSTANTIATION ---\nif __name__ == '__main__':\n    _enclave = SecureEnclave()\n    C1 = encrypt(b\"DATA_1\"); C2 = encrypt(b\"DATA_2\")",
            "output": "Plaintext Revealed",
            "validAnswers": [
                "XOR",
                "^",
                "Exclusive OR"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CRYPTO IMPOSSIBLE: ECDSA NONCE REUSE */\nfrom cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes\nfrom cryptography.hazmat.backends import default_backend\nimport os, hashlib, hmac, binascii\nfrom typing import Union, ByteString\n\nclass SecureEnclave:\n    def __init__(self, _seed_len: int = 4096):\n        self._entropy = os.urandom(_seed_len)\n        self._backend = default_backend()\n        self._kdf_iters = 600000\n    \n    def _constant_time_compare(self, val1: bytes, val2: bytes) -> bool:\n        if len(val1) != len(val2): return False\n        return hmac.compare_digest(val1, val2)\n\n    def _derive_master_key(self, hsm_output: bytes) -> bytes:\n        return hashlib.pbkdf2_hmac('sha512', hsm_output, self._entropy[:32], self._kdf_iters)\n\n# --- CRYPTOGRAPHIC PRIMITIVE INSTANTIATION ---\nif __name__ == '__main__':\n    _enclave = SecureEnclave()\n    # s = k^-1 * (z + r * d_A) mod n",
            "output": "Private Key Derived",
            "validAnswers": [
                "(z1 - z2) / (s1 - s2)",
                "(m1 - m2) / (s1 - s2)"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CRYPTO IMPOSSIBLE: RSA PADDING */\nfrom cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes\nfrom cryptography.hazmat.backends import default_backend\nimport os, hashlib, hmac, binascii\nfrom typing import Union, ByteString\n\nclass SecureEnclave:\n    def __init__(self, _seed_len: int = 4096):\n        self._entropy = os.urandom(_seed_len)\n        self._backend = default_backend()\n        self._kdf_iters = 600000\n    \n    def _constant_time_compare(self, val1: bytes, val2: bytes) -> bool:\n        if len(val1) != len(val2): return False\n        return hmac.compare_digest(val1, val2)\n\n    def _derive_master_key(self, hsm_output: bytes) -> bytes:\n        return hashlib.pbkdf2_hmac('sha512', hsm_output, self._entropy[:32], self._kdf_iters)\n\n# --- CRYPTOGRAPHIC PRIMITIVE INSTANTIATION ---\nif __name__ == '__main__':\n    _enclave = SecureEnclave()\n    # PKCS#1 v1.5 padding structure",
            "output": "Padding Validated",
            "validAnswers": [
                "0x00 0x02",
                "00 02",
                "0002"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CRYPTO IMPOSSIBLE: GCM IV LENGTH */\nfrom cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes\nfrom cryptography.hazmat.backends import default_backend\nimport os, hashlib, hmac, binascii\nfrom typing import Union, ByteString\n\nclass SecureEnclave:\n    def __init__(self, _seed_len: int = 4096):\n        self._entropy = os.urandom(_seed_len)\n        self._backend = default_backend()\n        self._kdf_iters = 600000\n    \n    def _constant_time_compare(self, val1: bytes, val2: bytes) -> bool:\n        if len(val1) != len(val2): return False\n        return hmac.compare_digest(val1, val2)\n\n    def _derive_master_key(self, hsm_output: bytes) -> bytes:\n        return hashlib.pbkdf2_hmac('sha512', hsm_output, self._entropy[:32], self._kdf_iters)\n\n# --- CRYPTOGRAPHIC PRIMITIVE INSTANTIATION ---\nif __name__ == '__main__':\n    _enclave = SecureEnclave()\n    # AES-GCM",
            "output": "Zero-overhead",
            "validAnswers": [
                "96",
                "96 bits"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CRYPTO IMPOSSIBLE: FIAT-SHAMIR */\nfrom cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes\nfrom cryptography.hazmat.backends import default_backend\nimport os, hashlib, hmac, binascii\nfrom typing import Union, ByteString\n\nclass SecureEnclave:\n    def __init__(self, _seed_len: int = 4096):\n        self._entropy = os.urandom(_seed_len)\n        self._backend = default_backend()\n        self._kdf_iters = 600000\n    \n    def _constant_time_compare(self, val1: bytes, val2: bytes) -> bool:\n        if len(val1) != len(val2): return False\n        return hmac.compare_digest(val1, val2)\n\n    def _derive_master_key(self, hsm_output: bytes) -> bytes:\n        return hashlib.pbkdf2_hmac('sha512', hsm_output, self._entropy[:32], self._kdf_iters)\n\n# --- CRYPTOGRAPHIC PRIMITIVE INSTANTIATION ---\nif __name__ == '__main__':\n    _enclave = SecureEnclave()\n    # Fiat-Shamir heuristic ZKP",
            "output": "ZKP Verified",
            "validAnswers": [
                "Random Oracle",
                "Random Oracle Model",
                "Preimage Resistance"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ],
    "SQL": [
        {
            "type": "code",
            "snippet": "/* SQL HARD: NULL TRAP */\n-- ==========================================\n-- DBMS CLUSTER NODE ISOLATION LEVEL SETTING\n-- ==========================================\nSET default_transaction_isolation = 'repeatable read';\nSET lock_timeout = '10s';\nSET statement_timeout = '30s';\nSET synchronize_seqscans = on;\nSET client_encoding = 'UTF8';\n\nBEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\nCREATE TEMPORARY TABLE _cluster_state_cache (\n    node_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    xmin_snapshot XID,\n    alloc_pages BIGINT,\n    dirty_flags BIT(8)\n) ON COMMIT DROP;\n\n-- --- VULNERABLE / TARGET QUERY BLOCK ---\n    SELECT id FROM employee WHERE dept_id NOT IN (SELECT dept_id FROM department);\n\nCOMMIT;",
            "output": "Rows Returned",
            "validAnswers": [
                "IS NOT NULL",
                "WHERE dept_id IS NOT NULL"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* SQL HARD: WINDOW GAPS */\n-- ==========================================\n-- DBMS CLUSTER NODE ISOLATION LEVEL SETTING\n-- ==========================================\nSET default_transaction_isolation = 'repeatable read';\nSET lock_timeout = '10s';\nSET statement_timeout = '30s';\nSET synchronize_seqscans = on;\nSET client_encoding = 'UTF8';\n\nBEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\nCREATE TEMPORARY TABLE _cluster_state_cache (\n    node_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    xmin_snapshot XID,\n    alloc_pages BIGINT,\n    dirty_flags BIT(8)\n) ON COMMIT DROP;\n\n-- --- VULNERABLE / TARGET QUERY BLOCK ---\n    SELECT RANK() OVER (ORDER BY salary) FROM emp;\n\nCOMMIT;",
            "output": "1, 1, 1, 2",
            "validAnswers": [
                "DENSE_RANK",
                "DENSE_RANK()"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* SQL IMPOSSIBLE: PHANTOM READS */\n-- ==========================================\n-- DBMS CLUSTER NODE ISOLATION LEVEL SETTING\n-- ==========================================\nSET default_transaction_isolation = 'repeatable read';\nSET lock_timeout = '10s';\nSET statement_timeout = '30s';\nSET synchronize_seqscans = on;\nSET client_encoding = 'UTF8';\n\nBEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\nCREATE TEMPORARY TABLE _cluster_state_cache (\n    node_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    xmin_snapshot XID,\n    alloc_pages BIGINT,\n    dirty_flags BIT(8)\n) ON COMMIT DROP;\n\n-- --- VULNERABLE / TARGET QUERY BLOCK ---\n    -- ANSI phantom read isolation requirement\n\nCOMMIT;",
            "output": "Secured",
            "validAnswers": [
                "SERIALIZABLE"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* SQL IMPOSSIBLE: CUBE vs ROLLUP */\n-- ==========================================\n-- DBMS CLUSTER NODE ISOLATION LEVEL SETTING\n-- ==========================================\nSET default_transaction_isolation = 'repeatable read';\nSET lock_timeout = '10s';\nSET statement_timeout = '30s';\nSET synchronize_seqscans = on;\nSET client_encoding = 'UTF8';\n\nBEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\nCREATE TEMPORARY TABLE _cluster_state_cache (\n    node_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    xmin_snapshot XID,\n    alloc_pages BIGINT,\n    dirty_flags BIT(8)\n) ON COMMIT DROP;\n\n-- --- VULNERABLE / TARGET QUERY BLOCK ---\n    SELECT reg, dept, SUM(s) GROUP BY ROLLUP(reg, dept);\n\nCOMMIT;",
            "output": "Full power set",
            "validAnswers": [
                "CUBE",
                "CUBE()"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* SQL IMPOSSIBLE: MVCC BLOAT */\n-- ==========================================\n-- DBMS CLUSTER NODE ISOLATION LEVEL SETTING\n-- ==========================================\nSET default_transaction_isolation = 'repeatable read';\nSET lock_timeout = '10s';\nSET statement_timeout = '30s';\nSET synchronize_seqscans = on;\nSET client_encoding = 'UTF8';\n\nBEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\nCREATE TEMPORARY TABLE _cluster_state_cache (\n    node_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    xmin_snapshot XID,\n    alloc_pages BIGINT,\n    dirty_flags BIT(8)\n) ON COMMIT DROP;\n\n-- --- VULNERABLE / TARGET QUERY BLOCK ---\n    -- Reclaim disk space in PostgreSQL\n\nCOMMIT;",
            "output": "Table shrunk",
            "validAnswers": [
                "VACUUM FULL"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* SQL IMPOSSIBLE: INDEX DEFEAT */\n-- ==========================================\n-- DBMS CLUSTER NODE ISOLATION LEVEL SETTING\n-- ==========================================\nSET default_transaction_isolation = 'repeatable read';\nSET lock_timeout = '10s';\nSET statement_timeout = '30s';\nSET synchronize_seqscans = on;\nSET client_encoding = 'UTF8';\n\nBEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\nCREATE TEMPORARY TABLE _cluster_state_cache (\n    node_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    xmin_snapshot XID,\n    alloc_pages BIGINT,\n    dirty_flags BIT(8)\n) ON COMMIT DROP;\n\n-- --- VULNERABLE / TARGET QUERY BLOCK ---\n    SELECT * FROM emp WHERE YEAR(date) = 2023;\n\nCOMMIT;",
            "output": "Full Table Scan",
            "validAnswers": [
                "Sargable",
                "Sargability"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ],
    "HTML": [
        {
            "type": "code",
            "snippet": "/* HTML HARD: CORS TABNAPPING */\n<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n    <meta http-equiv=\"X-XSS-Protection\" content=\"1; mode=block\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <style>\n        :root { --sys-color-primary: #1a1a2e; --gpu-layer-z: 9999; }\n        html, body { height: 100vh; overscroll-behavior: none; -webkit-font-smoothing: antialiased; }\n        .render-layer {\n            will-change: transform, opacity;\n            contain: strict;\n            isolation: isolate;\n        }\n    </style>\n</head>\n<body>\n    <div id=\"app-root\" class=\"render-layer\">\n        <!-- DOM INJECTION TARGET -->\n        <a href=\"#\" target=\"_blank\">Click</a>\n    </div>\n</body>\n</html>",
            "output": "Isolated",
            "validAnswers": [
                "rel=\"noopener noreferrer\"",
                "rel=\"noreferrer noopener\"",
                "noopener noreferrer"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* HTML HARD: SCRIPT ORDER */\n<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n    <meta http-equiv=\"X-XSS-Protection\" content=\"1; mode=block\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <style>\n        :root { --sys-color-primary: #1a1a2e; --gpu-layer-z: 9999; }\n        html, body { height: 100vh; overscroll-behavior: none; -webkit-font-smoothing: antialiased; }\n        .render-layer {\n            will-change: transform, opacity;\n            contain: strict;\n            isolation: isolate;\n        }\n    </style>\n</head>\n<body>\n    <div id=\"app-root\" class=\"render-layer\">\n        <!-- DOM INJECTION TARGET -->\n        <script src=\"A.js\" defer></script>\n        <script src=\"B.js\" async></script>\n    </div>\n</body>\n</html>",
            "output": "Execution Verified",
            "validAnswers": [
                "scriptB.js",
                "scriptB",
                "B",
                "B.js"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* HTML IMPOSSIBLE: CSP NONCE */\n<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n    <meta http-equiv=\"X-XSS-Protection\" content=\"1; mode=block\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <style>\n        :root { --sys-color-primary: #1a1a2e; --gpu-layer-z: 9999; }\n        html, body { height: 100vh; overscroll-behavior: none; -webkit-font-smoothing: antialiased; }\n        .render-layer {\n            will-change: transform, opacity;\n            contain: strict;\n            isolation: isolate;\n        }\n    </style>\n</head>\n<body>\n    <div id=\"app-root\" class=\"render-layer\">\n        <!-- DOM INJECTION TARGET -->\n        <meta http-equiv=\"CSP\" content=\"script-src 'nonce-x123';\">\n    </div>\n</body>\n</html>",
            "output": "Exfiltrated",
            "validAnswers": [
                "Attribute selectors",
                "script[nonce^=\"a\"]",
                "^=",
                "*="
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* HTML IMPOSSIBLE: EVENT BUBBLING */\n<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n    <meta http-equiv=\"X-XSS-Protection\" content=\"1; mode=block\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <style>\n        :root { --sys-color-primary: #1a1a2e; --gpu-layer-z: 9999; }\n        html, body { height: 100vh; overscroll-behavior: none; -webkit-font-smoothing: antialiased; }\n        .render-layer {\n            will-change: transform, opacity;\n            contain: strict;\n            isolation: isolate;\n        }\n    </style>\n</head>\n<body>\n    <div id=\"app-root\" class=\"render-layer\">\n        <!-- DOM INJECTION TARGET -->\n        <div onclick=\"f()\"> <button onclick=\"g(); _____\">Click</button> </div>\n    </div>\n</body>\n</html>",
            "output": "Intercepted",
            "validAnswers": [
                "event.stopPropagation()"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* HTML IMPOSSIBLE: BFC MARGINS */\n<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n    <meta http-equiv=\"X-XSS-Protection\" content=\"1; mode=block\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <style>\n        :root { --sys-color-primary: #1a1a2e; --gpu-layer-z: 9999; }\n        html, body { height: 100vh; overscroll-behavior: none; -webkit-font-smoothing: antialiased; }\n        .render-layer {\n            will-change: transform, opacity;\n            contain: strict;\n            isolation: isolate;\n        }\n    </style>\n</head>\n<body>\n    <div id=\"app-root\" class=\"render-layer\">\n        <!-- DOM INJECTION TARGET -->\n        <!-- Margin Collapsing -->\n    </div>\n</body>\n</html>",
            "output": "Defeated",
            "validAnswers": [
                "flow-root",
                "display: flow-root;"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* HTML IMPOSSIBLE: DOM PURIFY */\n<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n    <meta http-equiv=\"X-XSS-Protection\" content=\"1; mode=block\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <style>\n        :root { --sys-color-primary: #1a1a2e; --gpu-layer-z: 9999; }\n        html, body { height: 100vh; overscroll-behavior: none; -webkit-font-smoothing: antialiased; }\n        .render-layer {\n            will-change: transform, opacity;\n            contain: strict;\n            isolation: isolate;\n        }\n    </style>\n</head>\n<body>\n    <div id=\"app-root\" class=\"render-layer\">\n        <!-- DOM INJECTION TARGET -->\n        <script>DOMPurify.sanitize(dirty);</script>\n    </div>\n</body>\n</html>",
            "output": "Isolated",
            "validAnswers": [
                "DOMParser",
                "DOMParser()",
                "new DOMParser()"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ],
    "BINARY": [
        {
            "type": "code",
            "snippet": "/* BINARY HARD: OVERFLOW */\n#include <stdint.h>\n#include <stddef.h>\n#include <immintrin.h>\n\n// GCC/Clang builtins for branch prediction and memory fencing\n#define likely(x)       __builtin_expect(!!(x), 1)\n#define unlikely(x)     __builtin_expect(!!(x), 0)\n#define MEM_BARRIER()   __asm__ volatile(\"mfence\" ::: \"memory\")\n\ntypedef union {\n    uint64_t raw;\n    double fpd;\n    struct {\n        uint32_t low;\n        uint32_t high;\n    } split;\n} fp_pun_t;\n\nstatic inline void _simd_clear_cache(void* p) {\n    _mm_clflush(p);\n    MEM_BARRIER();\n}\n\n// --- LOW LEVEL EXECUTION CONTEXT ---\nvoid __attribute__((noinline)) execute_payload() {\n    int8_t a = 127; int8_t c = a + 1;\n}",
            "output": "-128",
            "validAnswers": [
                "-128"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* BINARY HARD: MAGIC NUM */\n#include <stdint.h>\n#include <stddef.h>\n#include <immintrin.h>\n\n// GCC/Clang builtins for branch prediction and memory fencing\n#define likely(x)       __builtin_expect(!!(x), 1)\n#define unlikely(x)     __builtin_expect(!!(x), 0)\n#define MEM_BARRIER()   __asm__ volatile(\"mfence\" ::: \"memory\")\n\ntypedef union {\n    uint64_t raw;\n    double fpd;\n    struct {\n        uint32_t low;\n        uint32_t high;\n    } split;\n} fp_pun_t;\n\nstatic inline void _simd_clear_cache(void* p) {\n    _mm_clflush(p);\n    MEM_BARRIER();\n}\n\n// --- LOW LEVEL EXECUTION CONTEXT ---\nvoid __attribute__((noinline)) execute_payload() {\n    uint32_t i = _________ - ( i >> 1 );\n}",
            "output": "Approximation",
            "validAnswers": [
                "0x5f3759df",
                "5f3759df",
                "0x5F3759DF",
                "5F3759DF"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* BINARY IMPOSSIBLE: ENDIANNESS */\n#include <stdint.h>\n#include <stddef.h>\n#include <immintrin.h>\n\n// GCC/Clang builtins for branch prediction and memory fencing\n#define likely(x)       __builtin_expect(!!(x), 1)\n#define unlikely(x)     __builtin_expect(!!(x), 0)\n#define MEM_BARRIER()   __asm__ volatile(\"mfence\" ::: \"memory\")\n\ntypedef union {\n    uint64_t raw;\n    double fpd;\n    struct {\n        uint32_t low;\n        uint32_t high;\n    } split;\n} fp_pun_t;\n\nstatic inline void _simd_clear_cache(void* p) {\n    _mm_clflush(p);\n    MEM_BARRIER();\n}\n\n// --- LOW LEVEL EXECUTION CONTEXT ---\nvoid __attribute__((noinline)) execute_payload() {\n    unsigned int x = 0x12345678;\n    if (*(char*)&x == 0x78) printf(\"L\"); else printf(\"B\");\n}",
            "output": "L",
            "validAnswers": [
                "L",
                "Little Endian"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* BINARY IMPOSSIBLE: XOR SWAP */\n#include <stdint.h>\n#include <stddef.h>\n#include <immintrin.h>\n\n// GCC/Clang builtins for branch prediction and memory fencing\n#define likely(x)       __builtin_expect(!!(x), 1)\n#define unlikely(x)     __builtin_expect(!!(x), 0)\n#define MEM_BARRIER()   __asm__ volatile(\"mfence\" ::: \"memory\")\n\ntypedef union {\n    uint64_t raw;\n    double fpd;\n    struct {\n        uint32_t low;\n        uint32_t high;\n    } split;\n} fp_pun_t;\n\nstatic inline void _simd_clear_cache(void* p) {\n    _mm_clflush(p);\n    MEM_BARRIER();\n}\n\n// --- LOW LEVEL EXECUTION CONTEXT ---\nvoid __attribute__((noinline)) execute_payload() {\n    void swap(int *a, int *b) { *a ^= *b; *b ^= *a; *a ^= *b; }\n    swap(&arr[1], &arr[1]);\n}",
            "output": "0",
            "validAnswers": [
                "0"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* BINARY IMPOSSIBLE: PARITY LOOP */\n#include <stdint.h>\n#include <stddef.h>\n#include <immintrin.h>\n\n// GCC/Clang builtins for branch prediction and memory fencing\n#define likely(x)       __builtin_expect(!!(x), 1)\n#define unlikely(x)     __builtin_expect(!!(x), 0)\n#define MEM_BARRIER()   __asm__ volatile(\"mfence\" ::: \"memory\")\n\ntypedef union {\n    uint64_t raw;\n    double fpd;\n    struct {\n        uint32_t low;\n        uint32_t high;\n    } split;\n} fp_pun_t;\n\nstatic inline void _simd_clear_cache(void* p) {\n    _mm_clflush(p);\n    MEM_BARRIER();\n}\n\n// --- LOW LEVEL EXECUTION CONTEXT ---\nvoid __attribute__((noinline)) execute_payload() {\n    n &= (n - 1);\n}",
            "output": "Bit cleared",
            "validAnswers": [
                "Clears the lowest set bit",
                "removes lowest 1",
                "drops lowest set bit",
                "clears LSB"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* BINARY IMPOSSIBLE: FLOAT_MAX */\n#include <stdint.h>\n#include <stddef.h>\n#include <immintrin.h>\n\n// GCC/Clang builtins for branch prediction and memory fencing\n#define likely(x)       __builtin_expect(!!(x), 1)\n#define unlikely(x)     __builtin_expect(!!(x), 0)\n#define MEM_BARRIER()   __asm__ volatile(\"mfence\" ::: \"memory\")\n\ntypedef union {\n    uint64_t raw;\n    double fpd;\n    struct {\n        uint32_t low;\n        uint32_t high;\n    } split;\n} fp_pun_t;\n\nstatic inline void _simd_clear_cache(void* p) {\n    _mm_clflush(p);\n    MEM_BARRIER();\n}\n\n// --- LOW LEVEL EXECUTION CONTEXT ---\nvoid __attribute__((noinline)) execute_payload() {\n    if (FLT_MAX == FLT_MAX + 1.0f) { printf(\"TRUE\"); }\n}",
            "output": "TRUE",
            "validAnswers": [
                "24",
                "24 bits"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ],
    "CACHE": [
        {
            "type": "code",
            "snippet": "/* CACHE HARD: FALSE SHARING */\n// ==========================================\n// L1/L2 CACHE COHERENCY & MESI SIMULATOR\n// ==========================================\n#include <pthread.h>\n#include <sched.h>\n#include <stdlib.h>\n\n#define CACHE_LINE_SIZE 64\n#define L1_ASSOC 8\n#define PAGE_SIZE 4096\n\ntypedef struct __attribute__((aligned(CACHE_LINE_SIZE))) {\n    volatile uint64_t spinlock;\n    volatile uint64_t epoch_counter;\n    char _pad[CACHE_LINE_SIZE - 16];\n} cache_aligned_ctx;\n\ncache_aligned_ctx* _global_ctx;\n\nstatic inline void thread_pin(int core_id) {\n    cpu_set_t cpuset;\n    CPU_ZERO(&cpuset);\n    CPU_SET(core_id, &cpuset);\n    pthread_setaffinity_np(pthread_self(), sizeof(cpu_set_t), &cpuset);\n}\n\n// --- CACHE MISS GENERATOR LOGIC ---\n    // CPU 0 writes to c1",
            "output": "Performance increased",
            "validAnswers": [
                "alignas(64)",
                "__attribute__((aligned(64)))"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CACHE HARD: MISS MODEL */\n// ==========================================\n// L1/L2 CACHE COHERENCY & MESI SIMULATOR\n// ==========================================\n#include <pthread.h>\n#include <sched.h>\n#include <stdlib.h>\n\n#define CACHE_LINE_SIZE 64\n#define L1_ASSOC 8\n#define PAGE_SIZE 4096\n\ntypedef struct __attribute__((aligned(CACHE_LINE_SIZE))) {\n    volatile uint64_t spinlock;\n    volatile uint64_t epoch_counter;\n    char _pad[CACHE_LINE_SIZE - 16];\n} cache_aligned_ctx;\n\ncache_aligned_ctx* _global_ctx;\n\nstatic inline void thread_pin(int core_id) {\n    cpu_set_t cpuset;\n    CPU_ZERO(&cpuset);\n    CPU_SET(core_id, &cpuset);\n    pthread_setaffinity_np(pthread_self(), sizeof(cpu_set_t), &cpuset);\n}\n\n// --- CACHE MISS GENERATOR LOGIC ---\n    // array size vastly exceeding capacity",
            "output": "Cache Thrashing",
            "validAnswers": [
                "Capacity",
                "Capacity Miss"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CACHE IMPOSSIBLE: BGSAVE LATENCY */\n// ==========================================\n// L1/L2 CACHE COHERENCY & MESI SIMULATOR\n// ==========================================\n#include <pthread.h>\n#include <sched.h>\n#include <stdlib.h>\n\n#define CACHE_LINE_SIZE 64\n#define L1_ASSOC 8\n#define PAGE_SIZE 4096\n\ntypedef struct __attribute__((aligned(CACHE_LINE_SIZE))) {\n    volatile uint64_t spinlock;\n    volatile uint64_t epoch_counter;\n    char _pad[CACHE_LINE_SIZE - 16];\n} cache_aligned_ctx;\n\ncache_aligned_ctx* _global_ctx;\n\nstatic inline void thread_pin(int core_id) {\n    cpu_set_t cpuset;\n    CPU_ZERO(&cpuset);\n    CPU_SET(core_id, &cpuset);\n    pthread_setaffinity_np(pthread_self(), sizeof(cpu_set_t), &cpuset);\n}\n\n// --- CACHE MISS GENERATOR LOGIC ---\n    // CoW Write Operations",
            "output": "Latency Spiked",
            "validAnswers": [
                "Duplicating pages",
                "Copying memory",
                "Page Fault allocations"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CACHE IMPOSSIBLE: MEMCACHED */\n// ==========================================\n// L1/L2 CACHE COHERENCY & MESI SIMULATOR\n// ==========================================\n#include <pthread.h>\n#include <sched.h>\n#include <stdlib.h>\n\n#define CACHE_LINE_SIZE 64\n#define L1_ASSOC 8\n#define PAGE_SIZE 4096\n\ntypedef struct __attribute__((aligned(CACHE_LINE_SIZE))) {\n    volatile uint64_t spinlock;\n    volatile uint64_t epoch_counter;\n    char _pad[CACHE_LINE_SIZE - 16];\n} cache_aligned_ctx;\n\ncache_aligned_ctx* _global_ctx;\n\nstatic inline void thread_pin(int core_id) {\n    cpu_set_t cpuset;\n    CPU_ZERO(&cpuset);\n    CPU_SET(core_id, &cpuset);\n    pthread_setaffinity_np(pthread_self(), sizeof(cpu_set_t), &cpuset);\n}\n\n// --- CACHE MISS GENERATOR LOGIC ---\n    // 97-byte objects into Slab 2",
            "output": "Wasted",
            "validAnswers": [
                "Internal Fragmentation"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CACHE IMPOSSIBLE: TLB SHOOTDOWN */\n// ==========================================\n// L1/L2 CACHE COHERENCY & MESI SIMULATOR\n// ==========================================\n#include <pthread.h>\n#include <sched.h>\n#include <stdlib.h>\n\n#define CACHE_LINE_SIZE 64\n#define L1_ASSOC 8\n#define PAGE_SIZE 4096\n\ntypedef struct __attribute__((aligned(CACHE_LINE_SIZE))) {\n    volatile uint64_t spinlock;\n    volatile uint64_t epoch_counter;\n    char _pad[CACHE_LINE_SIZE - 16];\n} cache_aligned_ctx;\n\ncache_aligned_ctx* _global_ctx;\n\nstatic inline void thread_pin(int core_id) {\n    cpu_set_t cpuset;\n    CPU_ZERO(&cpuset);\n    CPU_SET(core_id, &cpuset);\n    pthread_setaffinity_np(pthread_self(), sizeof(cpu_set_t), &cpuset);\n}\n\n// --- CACHE MISS GENERATOR LOGIC ---\n    // Virtual to Physical lookup cache",
            "output": "Page Faults Increased",
            "validAnswers": [
                "TLB",
                "Translation Lookaside Buffer"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* CACHE IMPOSSIBLE: MESI PROTOCOL */\n// ==========================================\n// L1/L2 CACHE COHERENCY & MESI SIMULATOR\n// ==========================================\n#include <pthread.h>\n#include <sched.h>\n#include <stdlib.h>\n\n#define CACHE_LINE_SIZE 64\n#define L1_ASSOC 8\n#define PAGE_SIZE 4096\n\ntypedef struct __attribute__((aligned(CACHE_LINE_SIZE))) {\n    volatile uint64_t spinlock;\n    volatile uint64_t epoch_counter;\n    char _pad[CACHE_LINE_SIZE - 16];\n} cache_aligned_ctx;\n\ncache_aligned_ctx* _global_ctx;\n\nstatic inline void thread_pin(int core_id) {\n    cpu_set_t cpuset;\n    CPU_ZERO(&cpuset);\n    CPU_SET(core_id, &cpuset);\n    pthread_setaffinity_np(pthread_self(), sizeof(cpu_set_t), &cpuset);\n}\n\n// --- CACHE MISS GENERATOR LOGIC ---\n    // Write to Var_X strictly isolated in L1",
            "output": "Desynced",
            "validAnswers": [
                "Modified",
                "M",
                "Dirty"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ],
    "REACT": [
        {
            "type": "code",
            "snippet": "/* REACT HARD: STALE STATE */\nimport React, { useState, useEffect, useLayoutEffect, useCallback, memo, Suspense } from 'react';\nimport { createRoot } from 'react-dom/client';\n\n// ==========================================\n// VIRTUAL DOM RECONCILIATION OVERRIDES\n// ==========================================\nconst _fiberNodeContext = React.createContext(null);\n\nfunction withProfiler(WrappedComponent) {\n    return function ProfilerHOC(props) {\n        const onRender = (id, phase, actualDuration) => {\n            if (actualDuration > 16.6) console.warn(`Frame drop on ${id}`);\n        };\n        return (\n            <React.Profiler id={WrappedComponent.name} onRender={onRender}>\n                <WrappedComponent {...props} />\n            </React.Profiler>\n        );\n    };\n}\n\n// --- COMPONENT TREE INJECTION ---\n    setInterval(() => { setCount(count + 1); }, 1000);",
            "output": "UI renders correctly",
            "validAnswers": [
                "c => c + 1",
                "prev => prev + 1",
                "(prev) => prev + 1",
                "count => count + 1"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* REACT HARD: BATCHING */\nimport React, { useState, useEffect, useLayoutEffect, useCallback, memo, Suspense } from 'react';\nimport { createRoot } from 'react-dom/client';\n\n// ==========================================\n// VIRTUAL DOM RECONCILIATION OVERRIDES\n// ==========================================\nconst _fiberNodeContext = React.createContext(null);\n\nfunction withProfiler(WrappedComponent) {\n    return function ProfilerHOC(props) {\n        const onRender = (id, phase, actualDuration) => {\n            if (actualDuration > 16.6) console.warn(`Frame drop on ${id}`);\n        };\n        return (\n            <React.Profiler id={WrappedComponent.name} onRender={onRender}>\n                <WrappedComponent {...props} />\n            </React.Profiler>\n        );\n    };\n}\n\n// --- COMPONENT TREE INJECTION ---\n    // async state calls execution",
            "output": "Batched",
            "validAnswers": [
                "unstable_batchedUpdates"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* REACT IMPOSSIBLE: EVENT POOLING */\nimport React, { useState, useEffect, useLayoutEffect, useCallback, memo, Suspense } from 'react';\nimport { createRoot } from 'react-dom/client';\n\n// ==========================================\n// VIRTUAL DOM RECONCILIATION OVERRIDES\n// ==========================================\nconst _fiberNodeContext = React.createContext(null);\n\nfunction withProfiler(WrappedComponent) {\n    return function ProfilerHOC(props) {\n        const onRender = (id, phase, actualDuration) => {\n            if (actualDuration > 16.6) console.warn(`Frame drop on ${id}`);\n        };\n        return (\n            <React.Profiler id={WrappedComponent.name} onRender={onRender}>\n                <WrappedComponent {...props} />\n            </React.Profiler>\n        );\n    };\n}\n\n// --- COMPONENT TREE INJECTION ---\n    // React 16 SyntheticEvent handler lifecycle",
            "output": "TypeError",
            "validAnswers": [
                "event.persist()",
                "persist()"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* REACT IMPOSSIBLE: USELAYOUTEFFECT */\nimport React, { useState, useEffect, useLayoutEffect, useCallback, memo, Suspense } from 'react';\nimport { createRoot } from 'react-dom/client';\n\n// ==========================================\n// VIRTUAL DOM RECONCILIATION OVERRIDES\n// ==========================================\nconst _fiberNodeContext = React.createContext(null);\n\nfunction withProfiler(WrappedComponent) {\n    return function ProfilerHOC(props) {\n        const onRender = (id, phase, actualDuration) => {\n            if (actualDuration > 16.6) console.warn(`Frame drop on ${id}`);\n        };\n        return (\n            <React.Profiler id={WrappedComponent.name} onRender={onRender}>\n                <WrappedComponent {...props} />\n            </React.Profiler>\n        );\n    };\n}\n\n// --- COMPONENT TREE INJECTION ---\n    useLayoutEffect(() => { /* 500ms synchronous block */ });",
            "output": "Measured",
            "validAnswers": [
                "Blank screen",
                "White screen",
                "Screen freeze",
                "Blocking",
                "Blank"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* REACT IMPOSSIBLE: STRICT MODE */\nimport React, { useState, useEffect, useLayoutEffect, useCallback, memo, Suspense } from 'react';\nimport { createRoot } from 'react-dom/client';\n\n// ==========================================\n// VIRTUAL DOM RECONCILIATION OVERRIDES\n// ==========================================\nconst _fiberNodeContext = React.createContext(null);\n\nfunction withProfiler(WrappedComponent) {\n    return function ProfilerHOC(props) {\n        const onRender = (id, phase, actualDuration) => {\n            if (actualDuration > 16.6) console.warn(`Frame drop on ${id}`);\n        };\n        return (\n            <React.Profiler id={WrappedComponent.name} onRender={onRender}>\n                <WrappedComponent {...props} />\n            </React.Profiler>\n        );\n    };\n}\n\n// --- COMPONENT TREE INJECTION ---\n    // React.StrictMode render behavior pass",
            "output": "State initialized (x2)",
            "validAnswers": [
                "Side effects",
                "Impure functions",
                "Mutations",
                "Side-effects"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* REACT IMPOSSIBLE: KEY HEURISTIC */\nimport React, { useState, useEffect, useLayoutEffect, useCallback, memo, Suspense } from 'react';\nimport { createRoot } from 'react-dom/client';\n\n// ==========================================\n// VIRTUAL DOM RECONCILIATION OVERRIDES\n// ==========================================\nconst _fiberNodeContext = React.createContext(null);\n\nfunction withProfiler(WrappedComponent) {\n    return function ProfilerHOC(props) {\n        const onRender = (id, phase, actualDuration) => {\n            if (actualDuration > 16.6) console.warn(`Frame drop on ${id}`);\n        };\n        return (\n            <React.Profiler id={WrappedComponent.name} onRender={onRender}>\n                <WrappedComponent {...props} />\n            </React.Profiler>\n        );\n    };\n}\n\n// --- COMPONENT TREE INJECTION ---\n    // List reconciliation utilizing array index",
            "output": "Desynchronization",
            "validAnswers": [
                "item.id",
                "unique identifier",
                "id"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ],
    "DOCKER": [
        {
            "type": "code",
            "snippet": "/* DOCKER HARD: PID 1 */\n# syntax=docker/dockerfile:1.4\n# ==========================================\n# MULTI-STAGE OCI IMAGE BUILD MANIFEST\n# ==========================================\nFROM ubuntu:22.04 AS sys-base\n\nENV DEBIAN_FRONTEND=noninteractive \\\n    LD_LIBRARY_PATH=/usr/local/lib \\\n    TINI_VERSION=v0.19.0\n\nRUN apt-get update && apt-get install -y --no-install-recommends \\\n    curl ca-certificates ptrace strace libcap2-bin \\\n    && rm -rf /var/lib/apt/lists/*\n\nADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini\nRUN chmod +x /tini\n\n# --- OVERLAYFS INSTRUCTION SET ---\nRUN groupadd -r appuser && useradd -r -g appuser appuser\n# Node PID 1 signal swallowing mitigation",
            "output": "Zombies cleared",
            "validAnswers": [
                "tini"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* DOCKER HARD: CACHE INVALIDATION */\n# syntax=docker/dockerfile:1.4\n# ==========================================\n# MULTI-STAGE OCI IMAGE BUILD MANIFEST\n# ==========================================\nFROM ubuntu:22.04 AS sys-base\n\nENV DEBIAN_FRONTEND=noninteractive \\\n    LD_LIBRARY_PATH=/usr/local/lib \\\n    TINI_VERSION=v0.19.0\n\nRUN apt-get update && apt-get install -y --no-install-recommends \\\n    curl ca-certificates ptrace strace libcap2-bin \\\n    && rm -rf /var/lib/apt/lists/*\n\nADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini\nRUN chmod +x /tini\n\n# --- OVERLAYFS INSTRUCTION SET ---\nCOPY . .\nRUN pip install -r reqs.txt",
            "output": "---> Using cache",
            "validAnswers": [
                "COPY reqs.txt",
                "COPY reqs.txt ."
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* DOCKER IMPOSSIBLE: DOCKER.SOCK */\n# syntax=docker/dockerfile:1.4\n# ==========================================\n# MULTI-STAGE OCI IMAGE BUILD MANIFEST\n# ==========================================\nFROM ubuntu:22.04 AS sys-base\n\nENV DEBIAN_FRONTEND=noninteractive \\\n    LD_LIBRARY_PATH=/usr/local/lib \\\n    TINI_VERSION=v0.19.0\n\nRUN apt-get update && apt-get install -y --no-install-recommends \\\n    curl ca-certificates ptrace strace libcap2-bin \\\n    && rm -rf /var/lib/apt/lists/*\n\nADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini\nRUN chmod +x /tini\n\n# --- OVERLAYFS INSTRUCTION SET ---\nVOLUME [\"/var/run/docker.sock\"]\n# Elevated privilege escalation vector",
            "output": "Host compromised",
            "validAnswers": [
                "root",
                "root access"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* DOCKER IMPOSSIBLE: OVERLAYFS2 */\n# syntax=docker/dockerfile:1.4\n# ==========================================\n# MULTI-STAGE OCI IMAGE BUILD MANIFEST\n# ==========================================\nFROM ubuntu:22.04 AS sys-base\n\nENV DEBIAN_FRONTEND=noninteractive \\\n    LD_LIBRARY_PATH=/usr/local/lib \\\n    TINI_VERSION=v0.19.0\n\nRUN apt-get update && apt-get install -y --no-install-recommends \\\n    curl ca-certificates ptrace strace libcap2-bin \\\n    && rm -rf /var/lib/apt/lists/*\n\nADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini\nRUN chmod +x /tini\n\n# --- OVERLAYFS INSTRUCTION SET ---\nRUN rm -f /etc/config.default\n# Lowerdir hiding mechanism",
            "output": "No such file",
            "validAnswers": [
                "whiteout",
                "whiteout file"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* DOCKER IMPOSSIBLE: DANGLING IMAGES */\n# syntax=docker/dockerfile:1.4\n# ==========================================\n# MULTI-STAGE OCI IMAGE BUILD MANIFEST\n# ==========================================\nFROM ubuntu:22.04 AS sys-base\n\nENV DEBIAN_FRONTEND=noninteractive \\\n    LD_LIBRARY_PATH=/usr/local/lib \\\n    TINI_VERSION=v0.19.0\n\nRUN apt-get update && apt-get install -y --no-install-recommends \\\n    curl ca-certificates ptrace strace libcap2-bin \\\n    && rm -rf /var/lib/apt/lists/*\n\nADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini\nRUN chmod +x /tini\n\n# --- OVERLAYFS INSTRUCTION SET ---\n# Garbage collection routine for unreferenced overlays",
            "output": "Space reclaimed",
            "validAnswers": [
                "docker system prune",
                "system prune"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        },
        {
            "type": "code",
            "snippet": "/* DOCKER IMPOSSIBLE: USER NAMESPACE */\n# syntax=docker/dockerfile:1.4\n# ==========================================\n# MULTI-STAGE OCI IMAGE BUILD MANIFEST\n# ==========================================\nFROM ubuntu:22.04 AS sys-base\n\nENV DEBIAN_FRONTEND=noninteractive \\\n    LD_LIBRARY_PATH=/usr/local/lib \\\n    TINI_VERSION=v0.19.0\n\nRUN apt-get update && apt-get install -y --no-install-recommends \\\n    curl ca-certificates ptrace strace libcap2-bin \\\n    && rm -rf /var/lib/apt/lists/*\n\nADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini\nRUN chmod +x /tini\n\n# --- OVERLAYFS INSTRUCTION SET ---\n# Daemon daemon.json configuration security policy",
            "output": "Isolated",
            "validAnswers": [
                "--userns-remap",
                "userns-remap"
            ],
            "softHint": "Consult the core documentation.",
            "strongHint": "Trace the logic inside the payload section."
        }
    ]
};
