function sort2DList(list, colIndex) {
    return list.sort((a, b) => a[colIndex] - b[colIndex]);
}


// Test cases   

let list = [
    [21, 4, 79],
    [6, 34, 43],
    [15, 54, 23],
    ];

console.log(sort2DList(list, 2));
