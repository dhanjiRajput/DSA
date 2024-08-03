
const square_sorted=(nums)=>{
    for(let i=0;i<nums.length;i++){
        nums[i]=nums[i]*nums[i];
    }
    console.log(nums);
    
}

let nums=[-4,-1,0,3,10];

let result=square_sorted(nums);

console.log(result);
