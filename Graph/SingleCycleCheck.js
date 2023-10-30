//array = [2,3,1,-4,-4,2]
//output true
//time O(n) space O(1)
function hasSingleCycleCheck(array){
    let numElementVisited = 0;
    let currentIdx = 0;

    while(numElementVisited < array.length){
        if(numElementVisited > 0 && currentIdx === 0) return false;
        numElementVisited++;
        currentIdx = getNextIdx(currentIdx, array);
    }
}

function getNextIdx(idx,array){
  const jump = array[idx];
  const nextIdx  = (idx + jump) % array.length;
  return nextIdx >=0 ? nextIdx : nextIdx + array.length;
}