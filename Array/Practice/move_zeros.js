
const move_zeros=(nums)=>{
    let count=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            nums.splice(i,1);
            count++;
            i--;
        }
    }
    for(let i=0;i<count;i++){
        nums.push(0);
    }
    return nums;
}

let nums=[0,1,0,3,12];

let result=move_zeros(nums);

console.log(result);
