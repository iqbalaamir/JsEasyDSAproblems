const merge = (a, b) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }

    while (i < a.length) {
        result.push(a[i]);
        i++;
    }

    while (j < b.length) {
        result.push(b[j]);
        j++;
    }

    return result;
};

const a = [1, 3, 5, 7, 8];
const b = [9, 3, 2];
console.log(merge(a, b));
