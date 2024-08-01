
let arr=[1,2,3,5,0];
let sum_index=0;
let sum_element=0;

for(let i=1;i<=arr.length;i++){
    sum_index+=i;
}

// console.log(sum_index);

for(let i=0;i<arr.length;i++){
    sum_element+=arr[i];
}

console.log(sum_index-sum_element);



