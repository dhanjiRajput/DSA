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
