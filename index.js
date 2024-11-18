console.log('hi');

const Array1 = [null, () => {}, 'giorig', undefined, 12];

const firstNames = ['givori', 'vano', 'xvicha', 'daviti'];

// splice igebs nebismieri elemntis indexss da Shlis pirveli argumenti aris romeli indeqsi da mere elmenti im apidan ramdeni washalos da gaaketebs mutacias dzveli masivis

const delateName = firstNames.splice(2, 1);

console.log(delateName);
// mutacia gaakete
console.log(firstNames);

const arr = ['levani', 'vano'];

console.log(arr.join());

const arr2 = [];

for (let i = 1; i <= 10; i++) {
  arr2.push(i);
}
console.log(arr2);

const arr3 = [];

for (let i = 10; i >= 1; i--) {
  arr3.push(i);
}
console.log(arr3);

const arr4 = [1, 2, 3, 4, 5];
let odds = [];

arr4.forEach((el) => {
  if (el % 2 === 0) {
    odds.push(el);
  }
});

console.log(odds);

const arr5 = [1, 2, 3, 4, 5];

const qrr = [1, [2, 3, [4, 5], 6], 7, [8, 9]];
// const flatArr = arr5.flat(2);
const flatArr = arr5.flat(Infinity);

console.log(arr5);

const sum = flatArr.reduce((tot, cur) => {
  return tot + cur;
}, 0);

console.log(sum, 'sum');

const movies = [
  {
    genre: 'comedy',
    title: 'trueMan show',
    IMDB: 8.8,
  },
  {
    genre: 'Hrror',
    title: 'Paradox',
    IMDB: 8.2,
  },
  {
    genre: 'animation',
    title: 'madagascar',
    IMDB: 8.8,
  },
  {
    genre: 'comedy',
    title: 'Hangover',
    IMDB: 8.8,
  },
];

const groupMoves = movies.reduce((acc, curr) => {
  const genre = curr.genre;
  if (!acc[genre]) acc[genre] = [];
  acc[genre].push(curr);
  return acc;
}, {});

console.log(groupMoves);

const nums = [20, 25, 30, 501, 23, 34, 700, 20, 101];
const persom = {
  name: 'giorig',
  age: 25,
};

const badNums = nums.sort((a, b) => a - b);

console.log(badNums);
console.log(typeof persom);

const person = {
  name: 'giorgi',
  age: 22,
};

console.log(person.name);

console.log(person['age']);

person.ismarred = false;
console.log(person.ismarred);

person['isSmoker'] = 'smoker';
console.log(person.isSmoker);

const { age, name } = person;

delete person.name;

console.log(person);

Object.freeze(person); //yinavs da vegar amoshli
