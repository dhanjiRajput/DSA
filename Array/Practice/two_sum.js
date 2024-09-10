

const sum=(arr,target)=>{
    let map=new Map();

    for(let i=0;i<arr.length;i++){
        if(map.has(target-arr[i])){
            return [map.get(target-arr[i]),i];
        }else{
            map.set(arr[i],i);
        }
    }
}
let arr=[2,7,4,15,7,5];
let target=22;

console.log(sum(arr,target));



