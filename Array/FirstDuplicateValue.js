//array = [2,1,5,2,3,4]
//output = 2

function firstDuplicate(array){
    let minimumScoreIdx = array.length;
    for(let i =0 ;i < array.length -1;i++){
        const value  = array[i];
        for(let j = i + 1; j <= array.length - 1; j++){
            const valueToCompare = array[j];
                if(value === valueToCompare){
                    minimumScoreIdx = Math.min(minimumScoreIdx, j);
                }
    }
}
if(minimumScoreIdx === array.length) return -1;
  return array[minimumScoreIdx];
}