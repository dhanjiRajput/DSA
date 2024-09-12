
const print=(arr,n,i)=>{

    if(n==i){
        return
    }

    console.log(arr[i]);

    print(arr,n,i+1);
    
}

let arr=[1,2,3,4,5];

print(arr,arr.length,0);
