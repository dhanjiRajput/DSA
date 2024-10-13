class Node{
    constructor(value){
        this.value=value;
        this.add=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    insertAtHead(value){
        let node=new Node(value);

        if(!this.head){
            this.head=node;
        }else{
            node.add=this.head;
            this.head=node;
        }
    }

    insertAtTail(value){
        let node=new Node(value);
        if(!this.head){
            this.head=node;
        }else{
            let temp=this.head;
            while(temp.add){
                temp=temp.add;
            }
            temp.add=node;
        }
    }
    
    print(){
        let temp=this.head;
        while(temp){
            console.log(temp.value);
            temp=temp.add;
        }
    }

    getLength(){
        let count=0;
        let temp=this.head;
        while(temp){
            count++;
            temp=temp.add;
        }
        return count;
    }

    insertAtAnyPosition(pos,value){
        let len=this.getLength();

        if(pos==1){
            this.insertAtHead(value);
        }else if(pos==len){
            this.insertAtTail(value);
        }else{
            let node=new Node(value);
            let temp=this.head;

            for(let i=1;i<pos-1;i++){
                temp=this.add;
            }
            node.add=temp.add;
            temp.add=node;
        }
    }

    removeTail(){
        let temp=this.head;
        while(temp.add.add){
            temp=temp.add;
        }
        temp.add=null;
    }

    removeHead(){
    }
}

let list=new LinkedList();
list.insertAtHead(30);
list.insertAtHead(20);
list.print();
list.insertAtTail(40);
list.print();
console.log(list.getLength());
list.insertAtAnyPosition(1,10);
list.print();
list.removeTail();
list.print();