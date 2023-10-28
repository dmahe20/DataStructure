//input matrix = [1,2]
//output [[1],
//        [2]]


function transposeMatrix(matrix){
    const newMatrix = [];
    for(let col =0; col < matrix[0].length; col ++){
        const newRow = [];
        for(let row= 0; row < matrix.length ; row++){
            newRow.push(matrix[row][col]);
        }
            newMatrix.push(newRow);
    }
            return newMatrix;       
}