function calculateSumAndCalls(arr) {
    let sum = 0;
    let numberOfCalls = 1;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const { sum: subSum, numberOfCalls: subCalls } = calculateSumAndCalls(arr[i]);
            sum += subSum;
            numberOfCalls += subCalls;
        } else {
            sum += arr[i];
        }
    }

    return { sum, numberOfCalls };
}

const arr = [[1, 2, 3], [0, 1, 1], [3, 45, 7], [1, 1, 1], [4, 6, 7], [3, 45, 7], [3, 45, 7], [1, 1, 1]];
const { sum, numberOfCalls } = calculateSumAndCalls(arr);
console.log("sum:", sum); // Output: 6 + 2 + 55 + 3 + 17 + 55 + 55 + 3 = 196
console.log("numberOfCalls:", numberOfCalls); // Output: 5
