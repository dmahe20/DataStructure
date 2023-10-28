// start from 2nd element in array as make 1st element as sorted list
// nor iterate through unsorted list and swap in sorted list

function insertionSort(array){
    for(let i = 1; i< array.length -1; i++){
        let j = i;
        while(j > 0 && array[j] < array[j - 1]){
            swap(j, j-1, array);
            j -= 1;
        }
    }
    return array;
}
function swap(i, j, array){
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}