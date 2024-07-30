const smallest_element=(arr)=>{
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

let arr=[9,8,7,6,5,4,3,2];

let min=smallest_element(arr);

console.log(min);