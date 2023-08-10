
function matrix(numberOfRows, numberOfColumns) {
    var arr = new Array(numberOfRows);
    for (var i = 0; i < numberOfRows; i++) {
        arr[i] = new Array(numberOfColumns);
        for (var j = 0; j < numberOfColumns; j++) {
            arr[i][j] = Math.floor(Math.random() * 100);
        }
    }
    return arr;
}

console.log(matrix(2, 3));
