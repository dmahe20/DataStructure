//array =[
//          [1,2,3,4],
//          [12,13,14,5],
//          [11,16,15,6],
//          [10,9,8,7]
//]

//output = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

function spiralTraverse(array){
    const result =[];
    spiralTraversehelper(array, 0, array.length-1 ,0, array[0].length -1 , result);
    return result;
}

function spiralTraversehelper(array, startRow, endRow, startCol, endCol, result){
    if(startRow > endRow || startCol > endCol) return;

    for(let col = 0; col < =endCol; col++){
        result.push(array[startRow][col]);
    }

    for(let row=startRow + 1; row<= endRow; row++){
        result.push(array[row][endCol]);
    }

    for(let col = endCol - 1; col>= startCol; col --){
        result.push(array[endRow][col]);
    }
    for(let row = endRow -1; row >= startRow + 1; row--){
        if(startCol === endCol) break;
        result.push(array[row][startCol]);
    }
    spiralTraversehelper(array, startRow +1, endRow -1,startCol + 1, endCol -1, result);
}