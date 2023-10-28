// if left no is smaller than pivot , increment left no.
// if left no > pivot then swap left and right no.
//if right no > pivot , decrement right pointer
// once in loop right ptr < left ptr , swap right ptr with pivot


//best Time = O(nlogn) space = O(logn)
//worst time = O(n^2) space = O(logn)
function quickSort(array) {
    quickSortHelper(array, 0, array.length -1);
    return array;
  }
  
  function quickSortHelper(array, startidx, endIdx){
    if(startidx >= endIdx) return;
    const pivotIdx = startidx;
    let leftIdx = startidx + 1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx){
      if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
        swap(leftIdx, rightIdx, array);
      }
      if(array[leftIdx] <= array[pivotIdx]) leftIdx++;
      if(array[rightIdx] >= array[pivotIdx]) rightIdx--;
    }
    swap(pivotIdx, rightIdx, array);
    const leftSubarrayIsSmaller = rightIdx -1-startidx < endIdx - (rightIdx + 1);
    if(leftSubarrayIsSmaller){
      quickSortHelper(array, startidx, rightIdx - 1);
      quickSortHelper(array, rightIdx + 1, endIdx);
    }else{
      quickSortHelper(array, rightIdx + 1, endIdx);
      quickSortHelper(array, startidx, rightIdx - 1);
    }
  }
  function swap(i, j, array){
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  
  exports.quickSort = quickSort;
  