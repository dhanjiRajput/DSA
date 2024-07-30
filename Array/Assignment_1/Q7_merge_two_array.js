let arr1=[10,20,30];
let arr2=[40,50,60];

let merge=[];

for(let i=0;i<arr1.length;i++){
    merge[i]=arr1[i];
}

for(let i=0;i<arr2.length;i++){
    merge[arr1.length+i+1]=arr2[i];
}

for(let i=0;i<merge.length;i++){
    console.log(merge[i]);
}




