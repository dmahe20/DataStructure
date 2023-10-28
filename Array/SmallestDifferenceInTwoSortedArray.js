//array 1 = [-1,5,10,20,28,3]
//array 2 = [26,134,135,15,17]
//output =[28,26]

function smallestDiff(arrayOne, arrayTwo){
    arrayOne.sort((a,b) => a-b); //[-1,3,5,10,20,28]
    arrayTwo.sort((a,b) => a-b); //[15,17,26,134,135]

    let idxOne = 0;
    let idxTwo = 0;
    let current = Infinity;
    let smallest = Infinity;
    let smalledPair = [];

    while(idxOne < arrayOne.length && idxTwo < arrayTwo.length){
        let firstnum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];
        if(firstnum < secondNum){
            current = secondNum - firstnum;
            idxOne++;
        }else if(firstnum > secondNum){
            current = firstnum - secondNum;
            idxTwo++;
        }else{
            return [firstnum,secondNum];
        }
        if(smallest > current){
            smallest = current;
            smalledPair =[firstnum,secondNum];
        }
    }
    return smalledPair;
}