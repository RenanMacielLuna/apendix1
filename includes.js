const myArray = [1, 2, 3, 4, 5];

console.log(myArray.includes(3, 3));

console.log(myArray.includes({ id: 2 }));

const o1 = { id: 1 };
const o2 = { id: 2 };
const o3 = { id: 3 };

const newArr = [o1, o2, o3];
console.log(newArr.includes(o1));