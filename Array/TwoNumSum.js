//array = [3,5,-4,8,11,1,-1,6]
//target sum = 10
//o/p [-1,11]

function twoNumSum(array,target){
const nums = {};
for(const num of array){
    const remianingsum = target - num;
    if(remianingsum in nums){
        return [remianingsum, num];
    }else{
        nums[num] = true;
    }
}
return [];
}