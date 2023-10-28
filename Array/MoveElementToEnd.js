//array = [2,1,2,2,2,3,4,2]
//toMove = 2
//output = [1,3,4,2,2,2,2,2]

function moveElementToEnd(array, toMove){
    let i =0;
    let j = array.length - 1;
    while(i < j){
        while(i < j && array[j] === toMove)j--;
        if(array[i] === toMove){
            swap(i, j, array);
        }
        i++;
    }
    return array;
}
function swap(i, j, array){
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}