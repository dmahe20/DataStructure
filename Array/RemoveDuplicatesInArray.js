//Remove duplicate values in array
function removeDuplicateValues(array){
    let arraySet = {};
    for(let i = 0; i < array.length; i++){
        if(!arraySet[array[i]]){
            arraySet[array[i]] = i;
        }
    }
    return Object.keys(arraySet);
}
let array = [1,1,2,2,4,4,4,5,6,7,7,9];
console.log(removeDuplicateValues(array));