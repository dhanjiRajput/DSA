let arr=[1,2,3,4,5,2,2,1];
let no_duplicate=[];

const isExist=(val)=>{
    for(let i=0;i<arr.length;i++){
        if(no_duplicate[i]==val){
            return true;
        }
    }
    return false;
}

for(let i=0;i<arr.length;i++){
    if(!isExist(arr[i])){
        no_duplicate.push(arr[i]);
    }
}

console.log(no_duplicate);