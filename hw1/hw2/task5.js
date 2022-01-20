var arr = [1, 2, -4, 3, -9, -1, 7];
var arr2 = [];

for (var i = 0; i <arr.length; i++) {
    if(isPositive(arr[i])) {
        arr2.push(arr[i]);
    }
}

function isPositive(n) {
    if (typeof n !== 'number') {
        throw new Error ('parameter type '+ arr[i] +' is not a Number');
            } 
            else if (n >= 0) {
        return true
       } else {
        return false
       }
}

console.log(arr2);