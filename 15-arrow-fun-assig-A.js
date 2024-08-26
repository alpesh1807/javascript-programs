console.log(`=============== Arrow Function =================`);

console.log(`1. Arrow function with no argument and no return value`);
let string = ()=>{
    console.log(`"Good Morning, Today is Monday"`);
}
string();

console.log(`====== 1. Arrow function with 3 argument and no return value, perform Multiplication ======`);
let multi = (n1, n2, n3=1)=>{
    let reult = n1*n2*n3 ;
    console.log(`The given numbers are:- ${n1},${n2},${n3} `,`and their Multiplication is:-`, reult);
}
multi(5,5,2);
multi(10,4);

console.log(`====== 2. Arrow function with 5 argument and return value, perform addition ======`);
let addition = (n1, n2, n3, n4, n5)=>{
    let addResult = n1+n2+n3+n4+n5;
    console.log(`Given arguments are:-${n1}, ${n2}, ${n3}, ${n4}, ${n5}`);
    return addResult;
}

let resultAddition = addition(100, 100, 200, 349, 756);


console.log(`Addition of given numbers is:- ${resultAddition}`);

let resultAdd = addition("I am", " learning", " ES6", " features", " in depth")
console.log(`The concat string is :- ${resultAdd}`);


