
const print=(n)=>{
    if(n==0){
        return
    }
    print(n-1);
    console.log(n);
}

print(10);