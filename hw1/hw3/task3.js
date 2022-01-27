var every = function(arr, callback) {
    if (Array.isArray(arr) && typeof callback === 'function') {
    var i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
      if (callback(arr[i], i, arr)) {
        return false;
            }
      else
       {
       return true;
       }
      }
    }
    else
        {
        throw new Error('The type parametr is not correct')
        }
  };

const arr = [1,-2,3];
var state= every(arr, function(item, i, arr) {
        return item>0;});
console.log(state);