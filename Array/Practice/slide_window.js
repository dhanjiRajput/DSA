// Shortest way to calculate sliding window

let arr=[1, 3, 2, 6, -1, 4, 1, 8, 2];
let crsum=0;
let maxsum=0;
let k=3;

for(let i=0;i<k;i++){
    crsum+=arr[i];
}

maxsum=crsum;

for(let i=k;i<arr.length;i++){
    crsum+=arr[i];
    crsum-=arr[i-k];
    maxsum=Math.max(maxsum,crsum);
}

console.log(maxsum);

//Regular Way to solve sliding window
// const sum=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// let arr=[4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
// let k=4;
// let crsum=0;
// let maxsum=0;

// for(let i=0;i<arr.length;i++){
//     let subarray=[];
//     for(let j=i;j<arr.length;j++){
//         subarray.push(arr[j]);
//         // console.log(subarray);

//         if(subarray.length==k){
//             // console.log(subarray);
//             crsum=sum(subarray);
//             console.log(subarray,crsum);
//             maxsum=Math.max(maxsum,crsum);
//         }
        
//     }
// }

// console.log(maxsum);

