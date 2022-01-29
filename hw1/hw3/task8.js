function flatten(array) {
    if (Array.isArray(arr)) {
    var flattend = [];
    (function flat(array) {
      array.forEach(function(el) {
        if (Array.isArray(el)) flat(el);
        else flattend.push(el);
      });
    })(array);
    return flattend;
}
else
   {
   throw new Error('The type parametr must be array')
   }
}

function sumElements (array) {
    var result;
    if (array.length == 0) {
        console.log('0');
      }
    else if (array.every(function(n){
        return typeof n === 'number';
         }))
     {
    return result = array.reduce(function(sum, current) {
        return sum + current;
    });
     }  
     else  {
        throw new Error ('The type parametr must be number');
    } 
}   


const arr =  [[[[[]]]]];
var show = sumElements(flatten(arr));
console.log(show);