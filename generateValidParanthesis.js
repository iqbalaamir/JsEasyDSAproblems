function generateValidParentheses(input) {
    const stack = [];
    let result = '';

    for (let char of input) {
        if (char === '(') {
            stack.push(result);
            result = '';
        } else if (char === ')') {
            result = stack.pop() + '(' + result + ')';
        } else {
            result += char;
        }
    }

    return result;
}

const invalidParentheses = '(a(ab)(a)))';
const validParentheses = generateValidParentheses(invalidParentheses);
console.log(validParentheses); // Output: "(a(ab)(a))"
