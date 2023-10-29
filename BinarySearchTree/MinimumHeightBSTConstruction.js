//Time = O(n)
//Space = O(1)

//array = [1,2,5,7,10,13,14,15,22]

function minHeightBst(array) {
    return constructMinHeightBstHelper(array, 0, array.length - 1);
  }


function constructMinHeightBstHelper(array, startIdx, endIdx){
    if(endIdx < startIdx) return null;
    const middleIdx = Math.floor((startIdx + endIdx)/2);
    const bst = new BST(array[middleIdx]);
    bst.left = constructMinHeightBstHelper(array, startIdx,  middleIdx - 1);
    bst.right = constructMinHeightBstHelper(array, middleIdx + 1, endIdx);
    return bst;
  }

class BST{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value){
        if(value < this.value){
            if(this.left === null){
                this.left = new BST(value);
            }else{
                this.left.insert(value);
            }
        }else if(value > this.value){
            if(tree.right === null){
                this.right = new BST(value);
            }else{
                this.right.insert = value;
            }
        }
    }
}