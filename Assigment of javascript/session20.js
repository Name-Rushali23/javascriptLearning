console.log("====NO return value===");

let sentance = () => console.log("Good Evining,Today is Sunday");
sentance();

console.log("==pssing and multiplication=== ")

let argument=(arg1,arg2,arg3) => {
    multiplication=arg1*arg2*arg3;
    console.log(multiplication);
    console.log(arg1,arg2,arg3);
}


argument(2,3,4);

console.log("===Invok the function===")

argument(10,4);


console.log("==addition===");
let Add=(arg1,arg2,arg3,arg4,arg5) => {
    addition=arg1+arg2+arg3+arg4+arg5;
    console.log(addition);
}


Add(100,100,200,349,756);
Add("i am" ," learning"," ES6"," Feature"," in depth");

