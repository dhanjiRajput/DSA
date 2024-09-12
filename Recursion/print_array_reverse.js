
const print=(arr,n,i)=>{

    if(n==i){
        return
    }

    print(arr,n,i+1);
    
    console.log(arr[i]);
}

let arr=[1,2,3,4,5];

print(arr,arr.length,0);
