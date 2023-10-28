//array = [1,3,4,10
//         2,5,9,11
//         6,8,12,15
//         7,13,14,16]

//output = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

function zigzagTraverse(array){
    const height = array.length - 1;
    const width = array[0].length - 1;
    const result = [];
    let row = 0;
    let col = 0;
    let goingDown = true;
    while(!isOutOfBound(row, col, height,width)){
      result.push(array[row][col]);
      if(goingDown){
        if(col === 0 || row === height){
          goingDown = false;
          if(row === height){
            col++;
          }else{
            row++;
          }
        }else{
          row++;
          col--;
        }
      }else{
        if(row ===  0|| col === width){
          goingDown = true;
          if(col === width){
            row++;
          }else{
            col++;
          }
        }else{
          row--;
          col++;
        }
      }
    }
    return result;
}
function isOutOfBound(row, col, height, width){
    return row<0 || row > height || col <0 || col > width;
  }