//FInd no of occurance in array
function noOfOccuranceElements(array){
    let arraySet = {};
    for(let i = 0; i < array.length; i++){
        if(!arraySet[array[i]]){
            arraySet[array[i]] = 1;
        }
        else{
            arraySet[array[i]]++;
        }
    }
    return arraySet;
}
let array = [1,1,2,2,4,4,4,5,6,7,7,9];
console.log(noOfOccuranceElements(array));