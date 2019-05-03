// Recursive
function fibR(position) {
    if (position < 3) {
        return 1;
    } else {
        return fib(position - 1) + fib(position - 2);
    }
}
// Recursive 2
function fibR2(position) {
    if (position < 2) {
        return position;
    } else {
        return fibR2(position - 1) + fibR2(position - 2);
    }
}

// Iteractive
function fibI(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b)
    }

    return result[n];
}

// Memoization

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;