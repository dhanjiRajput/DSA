let n=20;

for(let i=2;i<=n;i++){
    let count=0;
    for(let j=1;j<=n;j++){
        if(i%j==0){
            count++;
        }
    }

    if(count<=2){
        console.log(i);
    }
}