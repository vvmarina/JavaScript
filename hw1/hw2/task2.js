function f (...tmp) {
    let sum = 0;
    for (let i = 0; i < tmp.length; ++i) {
        if (typeof tmp[i] === 'number') {
            sum += tmp[i];
            } else {
              throw new Error ('type is not a number')  
            }  
          }
    return sum;
}

let result = f(5,7,9,1,1,5);

console.log(result);