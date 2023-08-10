function isValid(s) {
    const stack = [];
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of s) {
        if (bracketsMap[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || bracketsMap[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

console.log(isValid("(((]]")); // Output: false
console.log(isValid("((((([)]")); // Output: false
