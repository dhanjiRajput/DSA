const mySentence = "the quick Brown fox jumps over The lazy dog";
const words = mySentence.split("");

for(let i=0;i<words.length;i++){
    words[0]=words[0].toUpperCase();
    if(words[i]==" "){
        words[i+1]=words[i+1].toUpperCase();
    }
}
console.log(words.join(""));