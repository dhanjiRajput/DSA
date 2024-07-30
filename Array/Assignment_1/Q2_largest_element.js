
const largest_element=(arr)=>{
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

let arr=[8,7,6,5,9,4,3];

let max=largest_element(arr);

console.log(max);