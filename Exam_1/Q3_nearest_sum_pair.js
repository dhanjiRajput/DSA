
const target_sum_element=(arr,target)=>{
    let i=0;
    let j=arr.length-1;
    
    while(i<j){
        if(arr[i]+arr[j]==target){
            return [arr[i],arr[j]];
        }else if(arr[i]+arr[j]>target){
            j--;
        }else{
            i++;
        }
    }

    return  [arr[i-1],arr[j+1]];
}

let arr=[2,5,9,12];

let result=target_sum_element(arr,10);

console.log(result);



