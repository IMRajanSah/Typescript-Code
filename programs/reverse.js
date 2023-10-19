var num = 123456789;
var temp = num;
var res = 0;
// console.log(12%10);
while (temp > 0) {
    res = res * 10 + temp % 10;
    temp = temp / 10 | 0;
    // console.log(temp);
    // console.log(res);
}
console.log(res);
