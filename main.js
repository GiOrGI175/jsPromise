const nums = [10, 40, 50, 70, 11];

let maxNum = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (maxNum < nums[i]) {
    maxNum = nums[i];
  }
}
console.log(maxNum);

// const max = nums.sort((a, b) => {
//   return a - b;
// });

// console.log(max.pop());

const arr = [10, 10, 5, 7, 7, 66, 77, 77];
const uniqueNum = [];

for (let i = 0; i < nums.length; i++) {
  if (!uniqueNum.includes(nums[i])) {
    uniqueNum.push(nums[i]);
  }
}

console.log(uniqueNum);

const numss = [12, false, true, 'giorgi', undefined, 'lasha'];

const srtingArr = [];

for (let i = 0; i < numss.length; i++) {
  if (nums[i] === 'string') {
    srtingArr.push(nums[i]);
  }
}

console.log(srtingArr);
