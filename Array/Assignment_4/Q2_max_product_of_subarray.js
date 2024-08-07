
// const maximum_product_of_subarray=(arr)=>{
//     let product=1;
//     for(let i=0;i<arr.length;i++){
//         product*=arr[i];
//     }
//     return product;
// }

// let arr=[2,3,-2,4];
// let max=0;

// for(let i=0;i<arr.length;i++){
//     let sub_array=[];
//     for(let j=i;j<arr.length;j++){
//         sub_array.push(arr[j]);
//         let current_product=maximum_product_of_subarray(sub_array);
//         if(current_product>max){
//             max=current_product;
//         }
//     }
// }

// console.log(max);

let arr=[2,3,-2,4];
let max_product=arr[0];
let crn_product=arr[0];

for(let i=1;i<arr.length;i++){
    crn_product*=arr[i];
    if(crn_product>max_product){
        max_product=crn_product;
    }

    if(crn_product<0){
        crn_product=0;
    }
}

console.log(max_product);
