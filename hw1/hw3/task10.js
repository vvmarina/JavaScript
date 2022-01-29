var reverseNew = function(arr, callback) {
  if (Array.isArray(arr) && typeof callback === 'function') {
  var i, length = arr.length, results = [];
  for (i = length-1; i >= 0; i--) {
    if (callback(arr[i], i, arr)) {
               results.push(arr[i]);
       }
     }
     return results;
    }
      else
      {
      throw new Error('The type parametr is not correct')
      }
  };

const arr1 = ['k','l', 1, 5];
var show = reverseNew(arr1, function(item, i, arr1) {
return item });
console.log(show);