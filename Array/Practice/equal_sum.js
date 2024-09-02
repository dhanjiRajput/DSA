
const sum=(arr)=>{
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}

let arr=[
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]

let n=arr.length;
let m=arr[0].length;

let firstrowsum=sum(arr[0]);
let flag=false;

for(let i=1;i<arr.length;i++){
    let crsum=sum(arr[i]);

    if(crsum!=firstrowsum){
        flag=true;
    }
}

if(flag){
    console.log("Not an Magical Matrix..");    
}else{
    console.log("Magical Matrix..");
}

