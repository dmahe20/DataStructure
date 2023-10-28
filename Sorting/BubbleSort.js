//compares adjacent elements
//array = [8,5,2,9,5,6,3]
//ouptut = [2,3,5,5,6,8,9]

function bubbleSort(array){
    let isSorted = false;
    let counter = 0;
    while(!isSorted){
        isSorted = true;
        for(let i =0; i < array.length - 1;i++){
            if(array[i] > array[i + 1]){
                swap(i,i+1,array);
                isSorted = false;
            }
        }
        counter++;
    }
}
function swap(i, j, array){
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

//[8,5,2,9,5,6,3] i/p
//o/p [2,3,5,5,6,8,9]
//for(i=0;i<=6)
//if(array[0]> array[1])---8>5
//swap (0,1,[8,5,2,9,5,6,3])
//temp = array[1] = 5
//array[1] = array[0] =8
//array[0] =5 [5,8,2,9,5,6,3] 