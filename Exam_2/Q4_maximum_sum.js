let arr = [1,2,3,4,-10,5,6];
const findSum = () =>{
  let sum = arr.reduce((total,arr)=>total+arr)
  return sum;
}
let maxsum = 0;
let start = 0;
let end = 0;

for(let i=0;i<arr.length;i++){
  let subarray = [];
  for(let j=i;j<arr.length;j++){
    subarray.push(arr[j]);
    
    let currsum = findSum(subarray);
    console.log(subarray.length);
    
    if(maxsum < currsum){
      maxsum = currsum;
      startIdx = i; 
      endIdx = j;
    }

  }
}
console.log(maxsum);
console.log(startIdx);
console.log(endIdx);