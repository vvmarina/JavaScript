var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength1 = arr.map (item => item.length) 

var arrLength2 = arr.map (function (item) {
return item.length;
});

console.log( arrLength1 ); // 4,5,2,3
console.log( arrLength2 ); // 4,5,2,3