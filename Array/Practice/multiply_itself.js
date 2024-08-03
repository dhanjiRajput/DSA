
const multiply_itself=(nums)=>{
    let total=1;
    for(let i=0;i<nums.length;i++){
        total*=nums[i];
    }

    for(let i=0;i<nums.length;i++){
        nums[i]=total/nums[i];
    }
    return nums;
    
}

let nums=[-1,1,0,-3,3];

let result=multiply_itself(nums);

console.log(result);