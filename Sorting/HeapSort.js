//transform entire array into max heap. we can do it in min heap as well but here we will implement in max heap
//space = O(1) Time= O(n(logn))

function heapSort(array) {
    buildMaxHeap(array);
    for(let endIdx = array.length -1; endIdx > 0 ; endIdx--){
      swap(0, endIdx, array);
      siftDown(0, endIdx - 1,array)
    }
    return array;
  }
  
  function buildMaxHeap(array){
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for(let currentIdx = firstParentIdx; currentIdx >=0; currentIdx--){
      siftDown(currentIdx, array.length - 1, array);
    }
  }
  
  function siftDown(currentidx , endIdx, heap){
    let childOneIdx = currentidx * 2 + 1;
    while(childOneIdx <= endIdx){
      const childTwoIdx = currentidx * 2 + 2 <= endIdx ? currentidx * 2+2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      }else{
        idxToSwap = childOneIdx;
      }
      if(heap[idxToSwap] > heap[currentidx]){
        swap(currentidx, idxToSwap, heap);
        currentidx = idxToSwap;
        childOneIdx = currentidx * 2 + 1;
      }else{
        return;
      }
    }
  }
  function swap(i , j, array){
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  // Do not edit the line below.
  exports.heapSort = heapSort;
  