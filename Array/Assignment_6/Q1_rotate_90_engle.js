let arr=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let n=arr.length;
let m=arr[0].length;


for(let i=0;i<n;i++){
    let k=n-1;
    for(let j=0;j<m;j++){
        console.log(arr[k][i]);
        k--;
    }
}