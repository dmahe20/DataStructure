//input arr[] = {1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10} 
//output Frequency of 1 is: 3
//Frequency of 2 is: 1
// Frequency of 3 is: 2
// Frequency of 5 is: 2
// Frequency of 8 is: 3
// Frequency of 9 is: 2
// Frequency of 10 is: 1

//Time Complexity: O(N)
//Auxiliary Space: O(1)

let array = [1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10];
function frequencyElements(array){
    let size = array.length;
    console.log("size",size);
    let freq =1;
    for(let i = 1; i < size; i++){
        if(array[i] === array[i - 1]){
            freq++;
        }else{
            console.log("Frequency of" + array[i - 1] + "is" + freq);
            freq = 1;
        }
    }
    console.log("Frequency of" + array[size-1] + "is" + freq);
}
frequencyElements(array);