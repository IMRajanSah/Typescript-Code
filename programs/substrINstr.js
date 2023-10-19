var str = "Hi my name is Rajan, Rajan Sah";
var str1 = "rajan";
var i = 0;
var count = 0;
for (i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === str1[0].toLowerCase() && str.substring(i, i + str1.length).toLowerCase() === str1.toLowerCase()) {
        count++;
    }
}
console.log(count);
