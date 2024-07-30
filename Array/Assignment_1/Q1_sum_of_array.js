const sum_of_array=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let arr=[1,2,3,4,5,6,7,8,9];

let sum=sum_of_array(arr);

console.log(sum);

