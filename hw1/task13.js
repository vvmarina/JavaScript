var arr = [1, 2, 5, 9, 4, 13, 4, 10];
var message;

outer:
for (var i = 0; i < arr.length; i++)
{
  if (arr[i] == 4)
  {
    message = 'Есть!' ;  
    break outer;
   }
 } 
 console.log(message);
