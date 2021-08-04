// forEachってなに？
/**
 * @return {undefined}
 */
Array.prototype.forEach(function (currentValue, index, array) {});

const arr = [1, 2, 3, 4, 5];
arr.forEach(function (e, i, array) {
    console.log(`${i}番目の要素は${e}です`);
});
