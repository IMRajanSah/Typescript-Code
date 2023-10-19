let num:number=123454321;
let temp=num;
let res=0;
// console.log(12%10);
while(temp>0){
    res=res*10+temp%10;
    temp=temp/10|0;
}
if(num===res){
    console.log(`${num} is palindrome`);
}else{
    console.log(`${num} is not palindrome`);
}

let str:string="nitin";
let start=0, end=str.length-1;
while(start<end){
    if(str[start]===str[end]){
        start++;
        end--;
        continue;
    }else{
        break;
    }
}
if(start===end){
    console.log(`${str} is palindrome`);
}else{
    console.log(`${str} is not palindrome`);
}
// console.log(str[0]+str[str.length-1])