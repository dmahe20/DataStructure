//Input = "abcdcba"
//output = true

function palindromeCheck(string){
    let leftPtr = 0;
    let rightPtr = string.length - 1;
    while(leftPtr < rightPtr){
        if(string[leftPtr] !== string[rightPtr]) return false;
        leftPtr++;
        rightPtr--;
    }
    return true;
}