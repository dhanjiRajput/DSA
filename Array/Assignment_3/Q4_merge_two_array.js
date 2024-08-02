let arr1=[1,2,3,4];
let arr2=[2,5,6];
let merge=[];

let i=0;
let j=0;

let len1=arr1.length;
let len2=arr2.length;

while(i<len1 && j<len2){
    if(arr1[i]<arr2[j]){
        merge.push(arr1[i]);
        i++;
    }else{
        merge.push(arr2[j]);
        j++;
    }
}
while(j<len2){
    merge.push(arr2[j])
    j++;
}
console.log(merge);