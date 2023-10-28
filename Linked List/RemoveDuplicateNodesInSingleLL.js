class LinkedList{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function RemoveDuplicateNodes(linkedList){
        let currentNode = linkedList;
        while(currentNode !== null){
            let nextnode = currentNode.next;
            while(nextnode !== null && nextnode.value === currentNode.value){
                nextnode = nextnode.next;
            }
                currentNode.next = nextnode;
                currentNode = nextnode;
        }
        return linkedList;
}


exports.LinkedList = LinkedList;
exports.RemoveDuplicateNodes = RemoveDuplicateNodes;

//ip

const linkedList = new LinkedList(1);
linkedList.next = new LinkedList(1);
linkedList.next.next = new LinkedList(2);
linkedList.next.next.next = new LinkedList(2);
linkedList.next.next.next.next = new LinkedList(3);
linkedList.next.next.next.next.next = new LinkedList(4);
linkedList.next.next.next.next.next.next = new LinkedList(4);
const deduplicatedList = RemoveDuplicateNodes(linkedList);

let current = deduplicatedList;
while (current !== null) {
    console.log(current.value);
    current = current.next;