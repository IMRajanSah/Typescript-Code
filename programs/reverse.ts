let num:number=123456789;
let temp=num;
let res=0;
// console.log(12%10);
while(temp>0){
    res=res*10+temp%10;
    temp=temp/10|0;
    // console.log(temp);
    // console.log(res);
}

console.log(res);