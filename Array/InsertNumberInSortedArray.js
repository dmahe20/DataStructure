// Given an unsorted array of numbers and another number, you are required to find the index at which the number would be placed 
// if it were to be inserted in a sorted version of the array of numbers.

//([5,4,1,3],2)
//1

const getIndex = (arr, number) => {
    arr.sort((a,b) => a - b);
    console.log(arr);
    let left =0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] < number){
            left = mid + 1;
        }else if(arr[mid] > number){
            right = mid - 1;
        }else{
            return mid;
        }
    }
    return left;
}


//sol 2
const getIndexNumber = (arr, number) =>
    arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);