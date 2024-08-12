
const mySentence = "the quick Brown fox jumps over The lazy dog";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

console.log(words.join(" "));