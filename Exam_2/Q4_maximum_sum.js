
const maximum_sum_of_subarray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr = [1, 2, 3, 4, -10, 5, 6];
let max = 0;
let start = 0;
let end = 0;

for (let i = 0; i < arr.length; i++) {
  let sub_array = [];
  for (let j = i; j < arr.length; j++) {
    sub_array.push(arr[j]);
    let current_sum = maximum_sum_of_subarray(sub_array);
    if (current_sum > max) {
      max = current_sum;
      start = i;
      end = j;
    }
  }
}

console.log(`Max Sum Is : ${max}\nStart Index : ${start}\nEnd Index : ${end}`);