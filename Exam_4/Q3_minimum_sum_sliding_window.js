
const sum=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let arr=[1,2,3,4,5];
let k=3;
let csum=[];
let minsum=0;

for(let i=0;i<arr.length;i++){
    let subarray=[];
    for(let j=i;j<arr.length;j++){
        subarray.push(arr[j]);
        if(subarray.length==k){
            csum[i]=sum(subarray);
        }
    }
}
csum.sort((a,b)=>a-b);
console.log(csum[0]);