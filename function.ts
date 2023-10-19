let greet :Function;

greet=()=>{
    console.log("hello");
}

const add=(a:number,b:number,c:number|string = 10)=>{ //? for optional argument (= means we are assigning value for optional argument if not assigned undefined) should be end of parameter
    console.log(a+b);
}
add(10,20)

//return type

const minus=(a:number,b:number):(number | void)=>{
    return a-b;
}
console.log(minus(10,7))


// function signature


let greet1 :(a:string)=>void;