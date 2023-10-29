//input = [1,2,3,null,5,null,4]
//output = [1,3,4]

// tree = 1       <-----
//       / \
//      2   3     <-----
//      \    \
//       5    4   <-----

// first solution is BFS and take last value at each level. --- we need queue
// in js we dont have inbuilt queue.

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function rightSideView(node) {
    let res = [];
    rightSideViewHelper(node, 0, res);
    return res;
}

function rightSideViewHelper(node, depth, res) {
    if (node === null) {
        return;
    }

    if (depth === res.length) {
        res.push(node.value);
    }

    rightSideViewHelper(node.right, depth + 1, res);
    rightSideViewHelper(node.left, depth + 1, res);
}

// Create a binary tree from the input values
const input = [1, 2, 3, null, 5, null, 4];
const root = createTree(input);

function createTree(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    const node = new BinaryTree(arr[index]);
    node.left = createTree(arr, 2 * index + 1);
    node.right = createTree(arr, 2 * index + 2);
    return node;
}

const result = rightSideView(root);
console.log(result); // Output: [1, 3, 4]
