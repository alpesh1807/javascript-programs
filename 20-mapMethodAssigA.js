console.log(`================== Assignment with map()=====================`);
console.log(`===== Add 10 into each element and log new array result on console =====`);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log(`Given Array is:- ${arrayNumbers}`);
const sumEachTen = arrayNumbers.map((element)=>{
       return element+10
});
console.log(`New array after addition of 10 in each element is:-`,sumEachTen);

console.log(`===== Cube the each array element and log on console =====`);
console.log(`Given Array is:- ${arrayNumbers}`);
const cubeArray =  arrayNumbers.map((element)=>{
    return element*element*element;
});
console.log(`Transform array after cube of each element`,cubeArray);

console.log(`===== Add the index value into its corresponding each array elements and log new array result on console =====`);
console.log(`Given Array is:- ${arrayNumbers}`);
const newSum = [];
const newArray = arrayNumbers.forEach((currentValue, index)=>{
     const newVal = currentValue+index;
     newSum.push(newVal);
});
console.log(`New array after addition of element with it's index is:-`,newSum);






