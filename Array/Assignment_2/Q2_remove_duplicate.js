
let arr=[1,2,3,4,5,5,6,6,7];
let temp=[];

const isExist=(val)=>{
    for(let i=0;i<arr.length;i++){
        if(temp[i]==val){
            return true;
        }
    }
    return false;
}

for(let i=0;i<arr.length;i++){
    if(!isExist(arr[i])){
        temp.push(arr[i])
    }
}

console.log(temp);