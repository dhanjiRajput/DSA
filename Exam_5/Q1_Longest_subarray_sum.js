const sum=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let arr=[1,2,2,4,5];
let total=0;

for(let i=0;i<arr.length;i++){
    let subarray=new Set();
    for(let j=i;j<arr.length;j++){
        subarray.add(arr[j]);
        let sub=[...subarray];
        // console.log(sub,sum(sub));
        total=Math.max(total,sum(sub))
    }
}

console.log(total);