const arr = [1, 2, 3, 4, 5];


arr.reduce(function(accumulator, currentValue, index, array) {
    return accumulator + currentValue;
}, initialValue);



arr.reduce(function (box, e, i ,array) {
    // boxにcb関数の返り値が蓄積されていく(初期値はreduceの第2引数)
    return box + e;
}, 0)


arr.forEach(function (e, i ,array) {
    e = e + e;
    console.log(e);
})
