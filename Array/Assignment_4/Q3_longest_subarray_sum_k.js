
const maximum_sum_of_subarray=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let arr=[1,-1,5,-2,3];
let k=3;
let max=0;

for(let i=0;i<arr.length;i++){
    let sub_array=[];
    for(let j=i;j<arr.length;j++){
        sub_array.push(arr[j]);
        let crn_sum=maximum_sum_of_subarray(sub_array);

        if(crn_sum==k){
            let crnlen=sub_array.length;
            if(crnlen>max){
                max=crnlen;
            }
        }

    }
}

console.log(max);


