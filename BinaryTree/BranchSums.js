// tree = 1      
//       / \
//      2   3    
//      /\  /\
//     4 5  6 7
//    /\ /
//   8 9 10
//op = [15,16,18,10,11]

class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

function branchSums(root){
    const sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}

function calculateBranchSums(node, runningSums, sums ){
    if(!node) return;

    const newRunningSum = runningSums + node.value;
    if(!node.left && !node.right){
        sums.push(newRunningSum);
        return;
    }
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
}
