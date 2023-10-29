// tree = 15         K=3 ,,,,O/p =17
//        / \
//        5  20
//       / \   /\
//       2  5  17 22
//       /\     
//       1 3    

//Time = O(h+k) space =O(h)

class BST{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo{
    constructor(numberOfVisitedNodes, latestVisitednodes){
        this.numberOfVisitedNodes = numberOfVisitedNodes;
        this.latestVisitednodes = latestVisitednodes;
    }
}

function findKthLargestnode(tree, k){
    const treeInfo = new TreeInfo(0, -1);
    reverseInOrder(tree, k, treeInfo); //right root left
    return treeInfo.latestVisitednodes;
}

function reverseInOrder(node, k ,treeInfo){
    if(node === null || treeInfo.numberOfVisitedNodes >=k) return;
    reverseInOrder(node.right, k, treeInfo);
    if(treeInfo.numberOfVisitedNodes <k){
        treeInfo.numberOfVisitedNodes++;
        tree.latestVisitednodes = node.value;
        reverseInOrder(node.left, k, treeInfo);
    }
}
exports.BST = BST;
exports.findKthLargestnode = findKthLargestnode;
