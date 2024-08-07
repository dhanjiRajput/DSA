
const maximum_sum_of_subarray=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let arr=[1, 4, 20, 3, 10, 5];
let sum=33;
let flag=false;

for(let i=0;i<arr.length;i++){
    let sub_array=[];
    for(let j=i;j<arr.length;j++){
        sub_array.push(arr[j]);
        let crn_sum=maximum_sum_of_subarray(sub_array);
        if(crn_sum==sum){
            flag=true;
        }
    }
}

if(flag){
    console.log("true");
}else{
    console.log("false");
    
}


