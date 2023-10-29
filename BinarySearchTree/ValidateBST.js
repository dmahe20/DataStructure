class validateBST{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function ValidateBST(tree){
 return ValidateBSTHelper(tree, -Infinity, Infinity);
}
function ValidateBSTHelper(tree, minValue, maxValue){
    if(tree === null) return true;
    if(tree.value < minValue || tree.value >= maxValue) return false;
    const leftIsValid = ValidateBSTHelper(tree.left,minValue, tree.value);
    return leftIsValid && ValidateBSTHelper(tree.right, tree.value, maxValue);
  }