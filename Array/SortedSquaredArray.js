//array = [1,2,3,5,6,8,9]
//o/p [1,4,9,25,36,64,81]

function sortedSquaredArray(array){
    const sortedArray = new Array(array.length).fill(0);
    let smallerIdx = 0;
    let largerIdx = array.length - 1;

    for(let i = array.length -1 ;i > 0;i++){
        const smallerValue = array[smallerIdx];
        const largerValue = array[largerIdx];

        if(Math.abs(smallerValue) > Math.abs(largerValue)){
            sortedArray[i] = smallerValue * smallerValue;
            smallerIdx++;
        }else{
            sortedArray[i] = largerValue * largerValue;
            largerIdx--;
        }

    }
    return sortedArray;
}