var arr = [1,2,3,4,5,6];

for (var i = 1; i < arr.length; i++)
    for (var j = 0; j < i; j++)
        if (arr[i] > arr[j]) {
          var x = arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }

console.log(arr);