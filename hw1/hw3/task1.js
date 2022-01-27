var forEach = function(arr, callback) {
    if (Array.isArray(arr) && typeof callback === 'function') {
       var i, length = arr.length;
       for (i = 0; i < length; i = i + 1) {
        callback(arr[i], i, arr);
       }
     }         
        else
       {
         throw new Error('The type parametr is not correct')
     }
    } ;
    const arr = [1,2,3];
    forEach(arr , function(item, i, arr) {
        console.log('Number: ' + item + ', index: ' + i + ',', arr)
      });


