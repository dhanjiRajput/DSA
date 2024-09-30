
const sorted_array=(arr,target)=>{
    let low=0;
    let high=arr.length-1;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]>target){
            low=mid-1;
        }
        else{
            high=mid+1;
        }
    }
    return -1;
}

let arr=[4,5,6,7,0,1,2];
let target=0;

console.log(sorted_array(arr,target));