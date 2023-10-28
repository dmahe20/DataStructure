// in selection sort there are at first only unsorted list
//we compare first element with every element and check if its smallest element in unsorted list
// once we find smallest element in unsorted list we swap it to sorted list


// best , avg, worst time O(n^2) and space O(1)
function selectionSort(array){
    let startIdx = 0;
    while (startIdx < array.length - 1){
        let smallestIdx = startIdx;
        for(let i = startIdx + 1; i < array.length; i++){
            if(array[smallestIdx] > array[i]) smallestIdx = i;
        }
        swap(startIdx, smallestIdx, array);
        startIdx++;
    }
    return array;
}
function swap(i , j, array){
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
//ip = [8,5,2,9,5,6,3]
//op = [2,3,5,5,6,8,9]
//startIdx = 0;
//while (0 < 6){
//smallestIdx = 0;
//for(i=0;i<6;i++){
//if(array[0] > array[1]) 8>5 true
//smallestidx = 1
//i = 0
//if(array[1] > array[1]) false
//swap - (0, 1,array)
//array = [5,8,2,9,5,6,3]
//startIdx = 1
//}
//}