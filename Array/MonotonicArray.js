//array = [-1,-5,-10,-1101,-2000,-1102,-9001]
//output = ture

function monotonicArray(array){
    let isNonIncreasing = true;
    let isNonDecreasing = true;

    for(let i=0; i< array.length ; i++){
        if(array[i] < array[i-1]) isNonDecreasing = false;
        if(array[i] > array[i - 1]) isNonIncreasing = false;
    }
    return isNonDecreasing || isNonIncreasing;
}