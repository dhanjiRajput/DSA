const checkPalindrome = (str) => {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

let str = "babad";
let k = 3;
let arr = [...str];

for (let i = 0; i < arr.length; i++) {
  let substring = [];
  for (let j = i; j < arr.length; j++) {
    substring.push(arr[j]);
    
    if (checkPalindrome(substring)) {
      if (substring.length >= k) {
        console.log(substring);
      }else{
        flag=true;
      }
    }
  }
}
