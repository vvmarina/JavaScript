var reduce = function(arr, callback, startValue) {
    if (Array.isArray(arr) && typeof callback === 'function'&& (Number.isInteger(startValue)|| typeof startValue === 'string')) {
    var i, length = arr.length, result = startValue;
    for (i = length-1; i >= 0; i = i - 1) {
        result= callback(result, arr[i], i, arr);
     }
     return result;
    }
   else
   {
   throw new Error('The type parametr is not correct')
   }
  };

const arr = [1,2,3];
const acc = 0;
var sum = reduce(arr, function(acc, item, i, arr) {return item + acc;}, acc);
console.log(sum);