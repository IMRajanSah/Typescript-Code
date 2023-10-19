let str:string="hello";
console.log(str+"\n");

let no:number=10;
console.log(no+"\n");

let bo:boolean=true;
console.log(bo+"\n");

let nu:null=null
console.log(nu+"\n");

let ud:undefined=undefined
console.log(ud+"\n");

// let sy:symbol=symbol()
// console.log(sy+"\n");

let arr=["hello",1]; //array of any type
console.log(arr[0]);
console.log(arr[1]);

let arr1:string[]=["hello","world"]; //array of string types
console.log(arr1[0]);
console.log(arr1[1]);

let person:{
    name: string,
    roll: number
}={
    name: "rajan",
    roll:1
}
console.log(person.name+person.roll)
console.log(person)
let per:object;
per={
    name: "rajan",
    roll:1
};
console.log(per)

// number type
let bin=0b101;
let hex=0x12;
let oct=0O12;
// const big: bigint = 199254740991n; 

//string type
let st: string='hi'; //'' or ""
let st1:string=`hi
my name
is 
rajan`;//multiple lines using tilted ``

// string interpolation
let strr:string=`${st} ${st1}`;
console.log(strr);

// boolean
let boo:boolean=true;
let boo1:boolean=false;
console.log(boo && boo1); //AND Operator
console.log(boo || boo1); //OR operator
console.log(!boo1); //NOT Operator

let stt:string[]=[];
//two ways to enter data
stt.push('string1');
stt[1]="hi";
console.log(stt);
console.log(stt.length);
// array methods such as forEach(), map(), reduce(), and filter()
//mixed type
let strings1:(string | number)[]=[];
strings1[0]="hi";
strings1[1]=2;
console.log(strings1);

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};
// Then, you can use the ApprovalStatus enum like this:
const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}

