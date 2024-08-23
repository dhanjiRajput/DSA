let arr=[4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
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
    maxsum=Math.min(maxsum,crsum);
}

console.log(maxsum);