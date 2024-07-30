
const count_occurence=(arr,target)=>{
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            count++;
        }
    }

    return count;
}

let arr=[1,2,5,4,5,5,5,6];

let count=count_occurence(arr,5);

console.log(count);