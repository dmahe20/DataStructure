//find duplicate values in array 
function duplicateValuesInArray(array){
    let unique = new Set();
    let duplicatedElement = [];
    for(let i= 0; i < array.length - 1; i++){
        if(unique.has(array[i])){
            duplicatedElement.push(array[i]);
        }else{
            unique.add(array[i]);
        }
    }
    return Array.from(new Set(duplicatedElement));
}
let array = [1,1,2,2,4,4,4,5,6,7,7,9];
console.log(duplicateValuesInArray(array));