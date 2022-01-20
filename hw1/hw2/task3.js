var f = function (a,b,c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    return (a-b)/c;
    } else {
      throw new Error ('all parameters type should be a Number')  
    }  
}

var result = f(12,2,5);

console.log(result);