
const target_sum=(nums,target)=>{
    
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
}

let arr=[3,2,3];

let result=target_sum(arr,6);

console.log(result);
