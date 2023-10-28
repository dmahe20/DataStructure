//input array = [12,3,1,2,-6,5,-8,6]
//target sum = 0;
//output = [[-8,2,6],[-8,3,5],[-6,1,5]]

function SumTriplets(array, targetSum){
    array.sort((a , b) => a - b);

    //[-8,-6,1,2,3,5,6,12]

    const triplets = [];
    for(let i = 0; i< array.length - 2;i++){
        const left = i + 1;
        const right = array.length - 1;
        while(left < right){
            const currentSum = array[i] + array[left] + array[right];
            if(currentSum === targetSum){
                triplets.push([array[i],array[left],array[right]]);
                left ++;
                right --;
            }else if(currentSum < targetSum){
                left++;
            }else if(currentSum > targetSum){
                right--;
            }
        }
    }
return triplets;
}