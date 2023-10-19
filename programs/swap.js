var a = 15, b = 16;
// a=a+b;
// b=a-b;
// a=a-b;
// a=a*b;
// b=a/b | 0;
// a=a/b | 0;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a);
console.log(b);
var str = "rajan";
var str1 = "";
for (var i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
}
console.log(str1);
