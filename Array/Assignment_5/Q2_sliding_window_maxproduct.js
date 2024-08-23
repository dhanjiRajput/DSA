const sum=(arr)=>{
    let sum=1;
    for(let i=0;i<arr.length;i++){
        sum*=arr[i];
    }
    return sum;
}

let arr=[4, 2, 6, 3, 8];
let k=3;
let crsum=0;
let maxsum=0;

for(let i=0;i<arr.length;i++){
    let subarray=[];
    for(let j=i;j<arr.length;j++){
        subarray.push(arr[j]);
        // console.log(subarray);

        if(subarray.length==k){
            // console.log(subarray);
            crsum=sum(subarray);
            console.log(subarray,crsum);
            maxsum=Math.max(maxsum,crsum);
        }
        
    }
}

console.log(maxsum);

