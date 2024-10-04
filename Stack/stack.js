class Stack {

    constructor(size) {
        this.items = new Array(size);
        this.index = -1;
        this.size = size;
    }

    push(item) {
        this.index++;
        if (this.index < this.size) {
            this.items[this.index] = item;
        } else {
            console.log("Stack Overflow......!");
        }
    }

    pop() {
        if (this.index != -1) {
            this.items[this.index--] = -1;
        } else {
            console.log("Nothing to POP");
        }
    }

    peak() {
        if (this.index != -1) {
            let val = this.items[this.index];
            return val;
        }
    }

    lenght() {
        return this.index + 1;
    }

    isEmpty() {
        if (this.index == -1) {
            return true;
        } else {
            return false;
        }
    }

    reverse() {
        let arr=[4];
        if (this.index != -1) {
            for(let i=0;i<this.lenght();i++){
                arr[i]=this.items.pop();
            }
        }
        console.log(arr);
    }

    inserttAtBottm(stack,val){
       if(isEmpty()) {
            stack.push(val);
       }

       let top=stack.pop()
       inserttAtBottm(stack,val)
       stack.push(top);
    }

    Reverse(stack){
        if(stack.isEmpty()){
            return;
        }
        let val =stack.pop();
        Reverse(stack);
        insertBottom(stack,val);
    }

    isValid(stack){
        if(stack.lenght % 2==1){
            return false;
        }

        for(let i=0;i<stack.lenght;i++){
            let curr=stack[i];
            if(curr=="{" || curr =="(" || curr=="["){
                stack.push(curr);
            }else if(!stack.isEmpty()){
                let peek=stack.peek();
                if((peek == "{" && curr == "}")||
                    (peek == "(" && curr == ")") ||
                    (peek == "[" && curr == "]")){
                        stack.pop();
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }

        if(stack.isEmpty()){
            return true;
        }else{
            return false;
        }
    }
};

let stk = new Stack(4);

stk.push("j");
stk.push("a");
stk.push("v");
stk.push("a");

console.log(stk.reverse());