let str="abcabcbb";
let arr=[...str];
let max=0;

for(let i=0;i<arr.length;i++){
    let subarray=new Set();
    for(let j=i;j<arr.length;j++){
        subarray.add(arr[j]);

        let len=subarray.size;
        if(len>max){
            max=len;
        }
    }
}
console.log(max);

