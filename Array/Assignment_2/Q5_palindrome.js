
let arr="nayan";
let len=arr.length;
if(len%2!=0){
    let i=0;
    let j=arr.length-1;
    let flag=false;

    while(i<=j){
        if(arr[i]==arr[j]){
            flag=true;
            i++;
            j--;
        }else{
            flag=false;
        }
    }

    if(flag){
        console.log("Is Palindrome.....");
    }else{
        console.log("Not Palindrome...");
    }
}else{
    console.log("Not Palindrome...");
}