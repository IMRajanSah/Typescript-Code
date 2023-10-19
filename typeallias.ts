type alphanumeric=string|number
const fun=(user:alphanumeric)=>{
    console.log(user);
}
fun("hi");
fun(10);

//type object
type objname={name:string, uid:number};
const f1=(use:objname)=>{
    console.log(`${use.name} hi ${use.uid}`);
}
f1({name:"hi",uid:12})