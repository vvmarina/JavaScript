var array = [2,9,105,-3];
var i = 0;
 
function f(arr) {
if (Array.isArray(arr)&&arr.length !== 0) {
   console.log(arr[i]);
   i++;
   if (i < arr.length) f(arr);
} else  if (Array.isArray(arr)&&arr.length == 0) {
    throw new Error ('parameter can\'t be an empty');
}  else  {
    throw new Error ('parameter type should be an array');
 }   
}

f(array);