var reduce = function(arr, callback, startValue) {
    if (Array.isArray(arr) && typeof callback === 'function'&& (Number.isInteger(startValue)|| typeof startValue === 'string')) {
    var i, length = arr.length, result = startValue;
    for (i = 0; i < length; i = i + 1) {
        result= callback(result, arr[i], i, arr);
     }
     return result;
    }
   else
   {
   throw new Error('The type parametr is not correct')
   }
  };

const arr = ['g','f','a'];
const acc = '';
var sum = reduce(arr, function(acc, item, i, arr) {return item + acc;}, acc);
console.log(sum);

