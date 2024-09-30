
const peak_element=(arr)=>{
    let i=0
    let j=arr.length-1;
    while(i<j){
        let mid=Math.floor((i+j)/2);
        if(arr[mid]>arr[mid+1]){
            j=mid;
        }
        else{
            i=mid+1;
        }
    }
    return i;
}

let arr=[1,2,3,1];
console.log(peak_element(arr));