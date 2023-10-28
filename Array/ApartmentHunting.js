// 0    1      2       3    4 
// sc   G     G,Sc     Sc   Sc,St
//req = Gym, school , store

//op = 3

//1st soultion Time = O(b^2r) spcae = O(b)
//2nd solution Time = O(br) Space = O(b)
// G = [1,0,0,1,2]
//Sc = [0,1,0,0,0]
//St = [4,3,2,1,0] count max of each index

function apartmentHunting(blocks, reqs) {
    const minDistanceFromBlocks = reqs.map(req => getminDistance(blocks, req));
    const maxDistancesAtBlocks = getMaxDistanceAtBlocks(blocks, minDistanceFromBlocks);
    return getIdxAtMinValue(maxDistancesAtBlocks);
  }
  
  function getminDistance(blocks, req){
    const minDistances = new Array(blocks.length);
    let closestReqIdx = Infinity;
    for(let i= 0; i< blocks.length;i++){
      if(blocks[i][req]) closestReqIdx = i;
      minDistances[i] = distanceBetween(i, closestReqIdx);
    }
    for(let i = blocks.length - 1; i >= 0;i--){
      if(blocks[i][req]) closestReqIdx = i;
      minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closestReqIdx));
    }
    return minDistances;
  }
  
  function getMaxDistanceAtBlocks(blocks, minDistancesFromBlocks){
    const maxDistancesAtBlcoks = new Array(blocks.length);
    for(let i = 0; i< blocks.length ; i++){
      const minDistancesAtBlocks = minDistancesFromBlocks.map(distances => distances[i]);
      maxDistancesAtBlcoks[i] = Math.max(...minDistancesAtBlocks);
    }
    return maxDistancesAtBlcoks;
  }
  
  function getIdxAtMinValue(array){
    let idxAtMinValue = 0;
    let minValue = Infinity;
    for(let i = 0; i<array.length; i++){
      const currentValue = array[i];
      if(currentValue < minValue){
        minValue = currentValue;
        idxAtMinValue = i;
      }
     
    }
     return idxAtMinValue;
  }
  
  function distanceBetween(a,b){
        return Math.abs(a - b);
      }
  // Do not edit the line below.
  exports.apartmentHunting = apartmentHunting;
  


