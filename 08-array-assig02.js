console.log(`================== Find the total number of Element in Array =====================`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers}"`);
arrayNumbers.length
console.log(`Total Elements on given sring is "${arrayNumbers.length}"`);
console.log(`================== First and last Element in arrayNumbers =====================`);
const arrayNumbers1 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers1}"`);
arrayNumbers1[0], arrayNumbers1[10]
console.log(`The first and Last Elements of sring are "${arrayNumbers1[0]}" and "${arrayNumbers1[10]}."`);
console.log(`================== Third last Element of string =====================`);
const arrayNumbers2 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers2}"`);
arrayNumbers2.slice(arrayNumbers2.length-3, arrayNumbers2.length)
console.log(`Third last Element of string are ${arrayNumbers2.slice(arrayNumbers2.length-3, arrayNumbers2.length)} `);
console.log(`================== All Even numbers of string =====================`);
const arrayNumbers3 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers3}"`);
console.log(`The Even numbers in  sring are :-`);
for (const element of arrayNumbers3) {
    if (element%2==0) {
        console.log(element);
    }   
}
console.log(`================== All Odd numbers of string =====================`);
const arrayNumbers4 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers4}"`);
console.log(`The Odd numbers in  sring are :-`);
for (const element of arrayNumbers4) {
    if (element%2==1) {
        console.log(element);
    }   
}
console.log(`================== Numbers which are multiple of 5 =====================`);
const arrayNumbers5 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers5}"`);
console.log(`The numbers which are multiple of 5 are :-`);
for (const element of arrayNumbers5) {
    if (element%5==0) {
        console.log(element);
    }   
}
console.log(`================== Is number 115 available in string =====================`);
const arrayNumbers6 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers6}"`);
arrayNumbers6.includes(115);
console.log(`Is number 115 available in string - ${arrayNumbers6.includes(115)}`);

console.log(`================== Is number 23 available in string =====================`);
const arrayNumbers7 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers7}"`);
arrayNumbers7.includes(23);
console.log(`Is number 115 available in string - ${arrayNumbers7.includes(23)}`);

console.log(`================== Insert numbers 55, 66 at index 3 =====================`);
const arrayNumbers8 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers8}"`);
arrayNumbers8.splice(3,0,55,66);
console.log(`Insert number 55, 66 at index 3 and new string is - ${arrayNumbers8}`);

console.log(`================== Delete 3 elements starting from index 4 =====================`);
const arrayNumbers9 = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`The given sring is "${arrayNumbers9}"`);
arrayNumbers9.splice(3,2);
console.log(`New string after delete 3 elements starting from index 4 is - ${arrayNumbers9}`);

