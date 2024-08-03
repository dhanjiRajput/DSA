
const check_duplicates=(nums)=>{
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            return true;
        }
    }
    return false;
    
}

let nums=[1,2,3];

let result=check_duplicates(nums)

console.log(result);
