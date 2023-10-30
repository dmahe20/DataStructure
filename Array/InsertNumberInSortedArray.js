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
// const getIndexNumber = (arr, number) =>
//     arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);

//     On line 2, we have the reduce function, which takes a reducer function as its first parameter and applies it 
//to each value of the array arr on which it is called and returns a single output value.

// The reducer function itself is another arrow function that takes four arguments, two of which are optional.

// Accumulator: named counter in our case

// Current Value: named curr in our case

// Current Index: optional

// Source Array: optional

// In our example, we only pass it two arguments, counter and the current array value curr. The value returned from the reducer function 
//is assigned to the accumulator whose value is remembered through all iterations and ultimately becomes the final single value returned.

// Inside this reducer function, we check if number > curr, that is if number is greater than the current value in the array.
// This condition is part of a ternary expression; hence, if it resolves to true, we increment the counter.
// When the number becomes less than the curr value, the counter value is returned.

// As you can see, the reduce function also takes a second parameter, 0. 
//This value is used to set the initial value of the counter.
// Hence, on the first iteration, counter is set to zero, and curr value is set to the first element of the array.

