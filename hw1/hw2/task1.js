var kub = function (a) {
    if (typeof a === 'number'){
    return a*a*a;
    } else {
      throw new Error ('type is not a number')  
    }  
}

var result = kub(5)

console.log(result)