let string = "the quick Brown fox jumps over The lazy dog";
let words = string.split(" ");
const capital = (word) =>{
  return word.charAt(0).toUpperCase() + word.slice(1);
}



let JoinStringCapital = words.map(capital);

let result = JoinStringCapital.join(" ");

console.log("Result:", result);
