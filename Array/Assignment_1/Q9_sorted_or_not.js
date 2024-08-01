
const sorted_or_not=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            return true;
        }
    }
    return false;
}

let arr=[1,2,3,4,5];

if(sorted_or_not(arr)){
    console.log("Sorted...");
}else{
    console.log("Not Sorted...");
}