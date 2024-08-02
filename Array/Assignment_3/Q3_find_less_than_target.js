
let arr=[1,2,3,4,5];
let target=4;

const find_less_than_target=(arr,target)=>{
    let i=0;
    let j=arr.length-1;

    while(i<j){
        if(arr[i]<target){
            i++;
        }else if(arr[i]>=target){
            return arr[i-1];
        }
    }
}

console.log(find_less_than_target(arr,target));