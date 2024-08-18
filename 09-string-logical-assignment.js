console.log(`========== 1. WAP to find the length or total number of characters of the strings ============`);
const str1 = "Hello, World!";
const length1 = str1.length;
console.log(`The length of the string "${str1}" is : ${length1}`);

const str2 = "JavaScript is the language of Internet"; 
const lenght2 = str2.length;
console.log(`The length of the string "${str2}" is : ${lenght2}`);


console.log(`========== 2. WAP to print or log the last character of the given strings ============`);
function getLastCharacter(str) {
    return str.charAt(str.length-1);
}
const str3 = "Hey, my friend, Programming Language";
const str4 = "I am learning logical programs";
const str5 = "Angular";

console.log(`The last Character of string "${str3}" is : ${getLastCharacter(str3)}`);
console.log(`The last Character of string "${str4}" is : ${getLastCharacter(str4)}`);
console.log(`The last Character of string "${str5}" is : ${getLastCharacter(str5)}`);


console.log(`========== 3. WAP to print or log the first character of the given strings ============`);
function getFirstCharacter(str) {
    return str.charAt(0);
}
const str6 = "React";
const str7 = "Elon Musk";
const str8 = "Apple founder is Stew Job"; 

console.log(`The First Character of string "${str6}" is : ${getLastCharacter(str6)}`);
console.log(`The First Character of string "${str7}" is : ${getLastCharacter(str7)}`);
console.log(`The First Character of string "${str8}" is : ${getLastCharacter(str8)}`);


console.log(`========== 4. WAP to check whether given strings contains word ‘UI’ or not? ============`);
function containUI(str) {
    return str.includes('UI')
}
const str9 = "React - UI Developer";
const str10 = "UI Developer";
const str11 = "Front end and backend technologies";

console.log(`Does the string "${str9}" contain 'UI" : ${containUI(str9)}`);
console.log(`Does the string "${str10}" contain 'UI" : ${containUI(str10)}`);
console.log(`Does the string "${str11}" contain 'UI" : ${containUI(str11)}`);


console.log(`========== 5. WAP to How do you split a string into an array of substrings? ============`);
function splitString(str, delimiter) {
    return str.split(delimiter)
}
const str12 = "apple,orange,banana";
const str13 = "Stew,Bill,Jenny,Elon";

const result1= splitString(str12, ',');
console.log(`The Array of substring From "${str12}" is: `, result1);

const result2= splitString(str13, ',');
console.log(`The Array of substring From "${str13}" is: `,result2);


console.log(`========== 6.1 Reverse String: Reverse the string using any existing methods that you know ============`);
function reverseStringUsingMethod(str) {
    return str.split('').reverse().join('');
}
const str14 = "Software";
const str15 = "UI Developer";

console.log(`The reverse of the string "${str14}" is : ${reverseStringUsingMethod(str14)}`);
console.log(`The reverse of the string "${str15}" is : ${reverseStringUsingMethod(str15)}`);


console.log(`========== 6.2 Reverse String: Reverse the string without using predefined methods ============`);
function reverseStringManulally(str) {
    let reversedStr = '';
    for (let i = str.length-1; i >=0; i--) {
        reversedStr = array[i];
    }
    return reversedStr;  
}
const str16 = "Web Developer";
const str17 = "Billion Dollar";
const str18 = "Java";

console.log(`The reverse of the string "${str16}" is : ${reverseStringUsingMethod(str16)}`);
console.log(`The reverse of the string "${str17}" is : ${reverseStringUsingMethod(str17)}`);
console.log(`The reverse of the string "${str18}" is : ${reverseStringUsingMethod(str18)}`);