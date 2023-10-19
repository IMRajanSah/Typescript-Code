var str = "hello";
console.log(str + "\n");
var no = 10;
console.log(no + "\n");
var bo = true;
console.log(bo + "\n");
var nu = null;
console.log(nu + "\n");
var ud = undefined;
console.log(ud + "\n");
// let sy:symbol=symbol()
// console.log(sy+"\n");
var arr = ["hello", 1]; //array of any type
console.log(arr[0]);
console.log(arr[1]);
var arr1 = ["hello", "world"]; //array of string types
console.log(arr1[0]);
console.log(arr1[1]);
var person = {
    name: "rajan",
    roll: 1
};
console.log(person.name + person.roll);
console.log(person);
var per;
per = {
    name: "rajan",
    roll: 1
};
console.log(per);
// number type
var bin = 5;
var hex = 0x12;
var oct = 10;
// const big: bigint = 199254740991n; 
//string type
var st = 'hi'; //'' or ""
var st1 = "hi\nmy name\nis \nrajan"; //multiple lines using tilted ``
// string interpolation
var strr = "".concat(st, " ").concat(st1);
console.log(strr);
// boolean
var boo = true;
var boo1 = false;
console.log(boo && boo1); //AND Operator
console.log(boo || boo1); //OR operator
console.log(!boo1); //NOT Operator
var stt = [];
//two ways to enter data
stt.push('string1');
stt[1] = "hi";
console.log(stt);
console.log(stt.length);
// array methods such as forEach(), map(), reduce(), and filter()
//mixed type
var strings1 = [];
strings1[0] = "hi";
strings1[1] = 2;
console.log(strings1);
