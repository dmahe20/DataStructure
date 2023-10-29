//Avg Time = O(logn) Space = O(1)

// tree = 10          target = 12
//        / \
//        5  15
//       /\   /\
//       2 5  13 22
//       /     \
//       1      14

function findClosestValueInBST(tree,target){
    return findClosesetValueInBSTHelper(tree, target, tree.value);
}

function findClosesetValueInBSTHelper(tree, target, closest){
    if(tree===null) return closest;
    if(Math.abs(target - closest) > Math.abs(target - tree.value)){
        closest = tree.value;
    }
    if(target < tree.value){
        findClosesetValueInBSTHelper(tree.left, target, closest);
    }else if(target > tree.value){
        findClosesetValueInBSTHelper(tree.right, target, closest);
    }else{
        return closest;
    }
}

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }