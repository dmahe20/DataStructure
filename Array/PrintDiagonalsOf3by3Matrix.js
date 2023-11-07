//Time Complexity: O(n). 
//Space: O(1). 

function Diagonal(input){
    let diagonal1 = [];
    for(let i =0; i<input.length;i++){
        diagonal1.push(input[i][i]);
    }
    console.log(diagonal1);
    
    let diagonal2 = [];
    
    for(let j = 0 ;j<input.length;j++){
        diagonal2.push(input[j][input.length - 1 - j]);
    }
     console.log(diagonal2);
  }
  let array =[[1, 2 ,3],
             [4 ,5, 6],
             [7, 8, 9]
             ]
  Diagonal(array);