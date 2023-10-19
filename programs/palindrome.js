var num = 123454321;
var temp = num;
var res = 0;
// console.log(12%10);
while (temp > 0) {
    res = res * 10 + temp % 10;
    temp = temp / 10 | 0;
}
if (num === res) {
    console.log("".concat(num, " is palindrome"));
}
else {
    console.log("".concat(num, " is not palindrome"));
}
var str = "nitin";
var start = 0, end = str.length - 1;
while (start < end) {
    if (str[start] === str[end]) {
        start++;
        end--;
        continue;
    }
    else {
        break;
    }
}
if (start === end) {
    console.log("".concat(str, " is palindrome"));
}
else {
    console.log("".concat(str, " is not palindrome"));
}
// console.log(str[0]+str[str.length-1])
