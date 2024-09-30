
const first_last=(arr,target)=>{
    let i=0;
    let j=arr.length-1;

    while(i<=j){
        let mid=Math.floor((i+j)/2);

        console.log(mid);
        
        if(arr[mid]==target){
            return [i];
        }
    }
    return [-1,-1];
}

let arr= [5,7,7,8,8,10];
let target=8;

console.log(first_last(arr,target));