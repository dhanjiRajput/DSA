let arr=[
    [1,1,1,1],
    [1,1,3,4],
    [1,1,1,4],
    [1,1,2,1]
]

let n=arr.length;
let m=arr[0].length;

let max=0;
let row=0;

for(let i=0;i<n;i++){
    let count=0;
    for(let j=0;j<m;j++){
        if(arr[i][j]==1){
            count++;
        }
        if(max<count){
            max=count;
            row=i+1;
        }
    }
}
console.log(`${row} Index => ${max} times 1`);
