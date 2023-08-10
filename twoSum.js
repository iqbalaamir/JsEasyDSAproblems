function twoSum(arr, target) {
    const numMap = {};

    for (let num of arr) {
        const complement = target - num;
        if (numMap[complement]) {
            return [complement, num];
        }
        numMap[num] = true;
    }

    return null;
}

const arr = [2, 9, 3, 12, 17, 1];
const target = 10;
const result = twoSum(arr, target);
console.log(result); // Output: [3, 7]
