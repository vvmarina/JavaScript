function getDivisors(n) {
	var arr = [];
    if (typeof n === 'number' && n>0) {

	for (var i = 1; i <= n; i++) {
		if (n % i == 0) {
			arr.push(i);
		} 
	    }
        return arr;    
    }   
    else  if (n === 0) {
        throw new Error ('parameter can\'t be a 0');
            }    
      else  if (typeof n === 'number' && n < 0) {
         throw new Error ('parameter can\'t be < 0');
             }   
             else  {
                throw new Error ('parameter type is not a Number');
                    }  
}
  
var result = getDivisors(8);

console.log(result);

