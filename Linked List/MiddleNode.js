//spolution 1  Time O(n) space O(1)

class LinkedList{
constructor(value){
    this.value  = value;
    this.next = null;
}
}
function middleNode(linkedList){
    let count = 0;
    let currentNode = linkedList;
    while(currentNode !== null){
        count ++;
        currentNode = currentNode.next;
    }
    let middleNode = linkedList;
    for(let i =0;i<Math.floor(count/2);i++){
        middleNode = middleNode.next;
    }
    return middleNode;
}


//solution 2  Time O(n) space O(1)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function middleNode(linkedList) {
    let slowNode = linkedList;
    let fastNode = linkedList;
    while (fastNode !== null && fastNode.next !== null){
      slowNode = slowNode.next; //7 ,3
      fastNode = fastNode.next.next //3 ,5
    }
    return slowNode;
  }
  
  // Do not edit the line below.
  exports.middleNode = middleNode;
  //// 2-7-3-5