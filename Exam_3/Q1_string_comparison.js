
const comparison=(str1,str2)=>{
    let arr1=[...str1];
    let arr2=[...str2];
    arr1.sort();
    arr2.sort();
    let l1=arr1.length;
    let l2=arr2.length;

    let flag=false;

    if(l1==l2){
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
                if(arr1[i]==arr2[j]){
                    return true;
                }else{
                    return false;   
                }
            }
        }
    }else{
        return false;
    }
}
let str1="hello";
let str2="elloh";

console.log(comparison(str1,str2));

