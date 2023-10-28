//array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3]
//output = 6 // 0,10,6,5,-1,-3

function longestPeak(array){
    let longestPeakLength = 0;
    let i = 1;
    while(i < array.length-1){
        const isPeak = array[i-1] < array[i] && array[i+1] < array[i]; //1<2 && 3<2 false
        if(!isPeak){//true
          i++;//i=2
          continue;
        }
    
        let leftIdx = i - 2; //0
        while(leftIdx >= 0 && array[leftIdx] < array[leftIdx +1]){//0>=0 ,1<2
          leftIdx --;
        }
        let rightIdx = i + 2;//4
        while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]){// 4<13, 4<3
          rightIdx++;
        }
        const currentPeakLength = rightIdx - leftIdx - 1;
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
        i = rightIdx;
      }
      return longestPeakLength;
    }
}