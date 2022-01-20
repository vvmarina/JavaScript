function isEven(n) {
    if (typeof n !== 'number') {
        throw new Error ('parameter type '+ n +' is not a Number');
            } 
            else if ((n % 2) === 0) {
        return true
       } else {
        return false
       }
}

var result = isEven('ii');

console.log(result);