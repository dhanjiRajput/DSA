
let arr=[1,2,3,4,5];

// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }

let i=-0;
let j=arr.length-1;

while(i<j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}
console.log(arr);


