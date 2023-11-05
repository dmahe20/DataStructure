//Normal construction and with getting min and max number in stack at any given point of time 

//Stack 

class Stack{
    constructor(){
      this.minMaxStack = [];
      this.stack = [];
    }
    
    peek(){
      return this.stack[this.stack.length-1];
    }
    
    pop(){
      this.minMaxStack.pop();
      return this.stack.pop();
    }
    
  //   push(number){
  //     return this.stack.push(number);
  //   }
  
    push(number){
      const newMinMaxNo = {min : number, max : number};
      if(this.minMaxStack.length){
        const lastMinMaxNo = this.minMaxStack[this.minMaxStack.length];
        newMinMaxNo.min = Math.min(lastMinMaxNo, number);
        newMinMaxNo.max = Math.max(lastMinMaxNo, number);
      }
      this.minMaxStack.push(lastminMaxNo);
      this.stack.push(number);
    }
    
    getMin(){
      return this.minMaxStack[this.minMaxStack.length - 1].min;
    }
    
     getMax(){
      return this.minMaxStack[this.minMaxStack.length - 1].max;
    }
    
    printStack(){
      let str ='';
      for(let i =0; i< this.stack.length; i++){
        str+= this.stack[i] + " ";
      }
      return str;
    }
  }