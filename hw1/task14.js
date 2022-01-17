var n = 1000;
var num = 0;

while (n >= 50)
{
    n = n / 2 ;
    if (n < 50) {
        break;
    } else num++;
    console.log(n);
}

console.log(num);