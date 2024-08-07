
// const maximum_sum_of_subarray=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// let arr=[-2,1,-3,4,-1,2,1,-5,4];
// let max=0;

// for(let i=0;i<arr.length;i++){
//     let sub_array=[];
//     for(let j=i;j<arr.length;j++){
//         sub_array.push(arr[j]);
//         let current_sum=maximum_sum_of_subarray(sub_array);
//         if(current_sum>max){
//             max=current_sum;
//         }
//     }
// }

// console.log(max);

let arr=[-2,1,-3,4,-1,2,1,-5,4];
let max_sum=arr[0];
let crn_sum=arr[0];

for(let i=1;i<arr.length;i++){
    crn_sum+=arr[i];
    if(crn_sum>max_sum){
        max_sum=crn_sum;
    }

    if(crn_sum<0){
        crn_sum=0;
    }
}

console.log(max_sum);



