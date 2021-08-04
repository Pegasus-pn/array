Function.prototype.apply();

const arr = [(1, 2, 3, 4, 5)];
Math.max(arr); // 5

Math.max.apply(arr, [6, 7, 8, 9, 10]); // 10
Math.max([(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)]);



const array = ['a', 'b'];
const elements = [0, 1, 2];

const example = array.concat(elements);
console.log(example);

array.push.apply(array, elements);
console.info(array);
