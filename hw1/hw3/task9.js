var arrayFill = function(what, howMany){
    if (Number.isInteger(howMany) && (Number.isInteger(what)|| typeof what === 'string'|| typeof what === 'object' ||Array.isArray(what))){
    var arr = Array(howMany);
    var result = arr.fill (what);
    return result;
    }
    else 
        {
        throw new Error('The type parametr is not correct')
        }
};

var show = arrayFill([2,'f',1,'s'], 3);
console.log(show);

