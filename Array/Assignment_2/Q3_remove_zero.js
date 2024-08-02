
let arr=[0,1,0,3,12];
let temp=[];
let temp1=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        temp.push(arr[i]);
    }else{
        temp1.push(arr[i]);
    }
}
let len=temp1.length-1;
for(let i=0;i<temp.length;i++){
    temp1[len+i+1]=temp[i];
}

console.log(temp1);