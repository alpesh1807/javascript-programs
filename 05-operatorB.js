console.log(`==================Greater number between two numbers=================`);
function greaterNumber (n1, n2){
   var result = n1>n2 ? n1:n2;
   console.log(`The given numbers are ${n1},${n2} and grater number between them is : ${result}`);
}

greaterNumber(10,-10);
greaterNumber(800, 899)

console.log(`==================Even or Odd Number=================`);
function isEvenOrOddNum(num) {
    var result = num%2==0 ? true : false;
    return result;    
}

var result= isEvenOrOddNum(29);
console.log(`Is Number 29 Even : ${result}`);

var result= isEvenOrOddNum(44);
console.log(`Is Number 44  Even : ${result}`);

var result= isEvenOrOddNum(0);
console.log(`Is Number 0  Even : ${result}`);

var result= isEvenOrOddNum(101);
console.log(`Is Number 101  Even : ${result}`);

console.log(`==================Check word length is Even or Odd =================`);
function wordLength(word) {
    var wLength =word.length
    var result= wLength%2==0 ? "EVEN" : "ODD";
    return result
}

var result= wordLength("JavaScript");
console.log(`Word Length of "JavaScript" is : ${result}`);

var result = wordLength("developer");
console.log(`Word Length of "developer" is : ${result}`);

var result = wordLength("Google");
console.log(`Word Length of "Google" is : ${result}`);






