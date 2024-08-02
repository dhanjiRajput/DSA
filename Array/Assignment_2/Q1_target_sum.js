
const target_sum_element=(arr,target)=>{
    let i=0;
    let j=arr.length-1;
    
    while(i<j){
        if(arr[i]+arr[j]==target){
            return true;
        }else if(arr[i]+arr[j]>target){
            j--;
        }else{
            i++;
        }
    }

    return false;
}

let arr=[1,2,3,4,5];

let result=target_sum_element(arr,9);

console.log(result);