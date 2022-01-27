var filter = function(arr, callback) {
    if (Array.isArray(arr) && typeof callback === 'function') {
    var i, length = arr.length, results = [];
    for (i = 0; i < length; i++) {
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

const arr1 = [1,2,3];
filter(arr1, function(item, i, arr1) {
      console.log('Number: ' + item + ', index: ' + i)});
