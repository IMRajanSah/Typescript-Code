let a=15,b=16;

// a=a+b;
// b=a-b;
// a=a-b;

// a=a*b;
// b=a/b | 0;
// a=a/b | 0;

a=a^b;
b=a^b;
a=a^b;


console.log(a);
console.log(b);


let str="rajan";

let str1:string="";

for(let i=str.length-1;i>=0;i--){
    str1+=str[i];
}
console.log(str1)