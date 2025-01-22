export function getOccurrencesObject(str) {
    // b - two times; c and d - one time
    const res = {};
    if (str !== undefined && str !== null) {
        str = str.toString();
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (!res[char]) {
                res[char] = 0;
            }
            res[char]++;
        }
    }
    return res;
}

// Example usage:
console.log(getOccurrencesObject("abc"));
