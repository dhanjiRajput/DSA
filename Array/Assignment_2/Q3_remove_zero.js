
const move_zeros = (nums) => {
    let temp = [];
    let temp1 = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            temp.push(nums[i]);
        } else {
            temp1.push(nums[i]);
        }
    }
    let len = temp1.length - 1;
    for (let i = 0; i < temp.length; i++) {
        temp1[len + i + 1] = temp[i];
    }

    return temp1
}
let arr = [0, 1, 0, 3, 12];

let result=move_zeros(arr);

console.log(result);