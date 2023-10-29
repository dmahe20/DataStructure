// uses queue
//time O(V+e) space O(V)
class BFS{
    constructor(value){
        this.value = value;
        this.children =  [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
      }

      breadthFirstSearch(array){
        const queue = [this];
        while(queue.length > 0){
            const current = queue.shift();
            array.push(current.name);
            for(const child of current.children){
                array.push(child);
            }
        }
        return array;
      }
}