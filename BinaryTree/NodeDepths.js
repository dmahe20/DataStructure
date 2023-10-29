// tree = 1      
//       / \
//      2   3    
//      /\  /\
//     4 5  6 7
//    /\ 
//   8 9 
//output - 16
//dfs

class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function nodeDepths(root){
    const sumOfDepths = 0;
    const stack = [{node: root, depth:0}]; //1,0
    while(stack.length > 0){
        const {node, depth} = stack.pop();
        if(node === null) continue;
        sumOfDepths += depth;// 0
        stack.push({node: root.left, depth:depth + 1});
        stack.push({node: root.right, depth:depth+1});
    }
    return sumOfDepths;
}