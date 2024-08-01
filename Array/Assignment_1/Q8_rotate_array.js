
const rotate_array=(arr,position)=>{
    let n=position%arr.length;

    let half=arr.slice(n);
    let first=[];

    for(let i=0;i<position;i++){
        first[i]=arr[i];
    }

    for(let i=0;i<position;i++){
        half[half.length+i-1]=arr[i]
    }

    console.log(half);
}

let arr=[1,2,3,4,5,6,7,8,9];

rotate_array(arr,2);