let str:string="Hi my name is Rajan, Rajan Sah";
let str1: string="rajan";

let i=0;
let count=0;
for(i=0;i<str.length;i++){
    if(str[i].toLowerCase()===str1[0].toLowerCase() && str.substring(i,i+str1.length).toLowerCase()===str1.toLowerCase()){
        count++;
    }
}
console.log(count);
