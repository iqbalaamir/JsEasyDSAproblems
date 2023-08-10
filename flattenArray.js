function flattenArray(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

const a = [1, 5, 3, [4, 8, 7, 0, 6, [7, 9, 7, 8]]];
const flattened = flattenArray(a);
console.log(flattened); // Output: [1, 5, 3, 4, 8, 7, 0, 6, 7, 9, 7, 8]
