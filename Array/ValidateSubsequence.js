//array = [5,1,22,25,6,-1,8,10]
//squence = [1,6,-1,10]
//op true

function subSequence(array,sequence){
    let arrIdx = 0;
    let seqIdx = 0;
    while(arrIdx < array.length && seqIdx < sequence.length){
        if(array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}