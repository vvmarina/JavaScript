var kub = function (a) {
    if (typeof a === 'number'){
    return a*a*a;
    } else {
      throw new Error ('type is not a number')  
    }  
}

var result = kub(2);

console.log(result);