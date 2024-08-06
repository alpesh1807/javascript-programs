console.log(`======== Square of word Length =========`);
function squareOfWordLength(sentence){
    console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    console.log(`Length of given word / sentence is : ${len} `);
    var square = len * len;
    return square;  
}

var result = squareOfWordLength("JavaScript");
console.log(`Square of world length is: ${result}`);

console.log(`=======================================`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of world length is: ${result}`);

console.log(`=======================================`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of world length is: ${result}`);

console.log(`============================================`);

var string = "I am Angular Developer"
console.log(`The given string is : ${string}`);
var stringLength = string.length
console.log(`String Length is : ${stringLength}`);
var splitString=string.split(" ")
var resultWord= splitString.length;
console.log(`Total words in string are: ${resultWord}`);
var divideResultWord = stringLength/resultWord;
console.log(`The result of string length divide by total number of words is: ${divideResultWord}`);
var multipleResultWord = stringLength*resultWord;
console.log(`The result of string length multiple by total words is: ${multipleResultWord}`);




