console.log(`============================ Assignment using forEach() ==============================`);
console.log(`======= 1. All elements of array with Index using forEach ========`);
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given Array is :- ${arrayNumbers}`);
arrayNumbers.forEach((currentValue, index)=>{
    console.log(`Element:-${currentValue} and Index is:-${index}`);
});

console.log(`======= 2. Find the Positive Numbers using forEach ========`);
console.log(`Given Array is :- ${arrayNumbers}`);
console.log(`All Positive Numbers are:-`);
arrayNumbers.forEach((currentValue)=>{
    if (currentValue>0) {
        console.log(currentValue);
    }
});

console.log(`======= 3. Find the Negative Numbers using forEach and log new Array on console ========`);
console.log(`Given Array is :- ${arrayNumbers}`);
const negativeArray = [];
arrayNumbers.forEach((currentValue)=>{
    if (currentValue<0) {
        negativeArray.push(currentValue);
    }
});
console.log(`All Negative Number in Array are:-`, negativeArray);

console.log(`======= 4. Find the Even Numbers and log on console using forEach with arrow function ========`);
console.log(`Given Array is :- ${arrayNumbers}`);
console.log(`All Even Numbers are:-`);
arrayNumbers.forEach((currentValue)=>{
    if (currentValue%2==0) {
        console.log(currentValue);
    }
});

console.log(`======= 5. Find the sum of all elements from arrayNumbers and log sum value on console ========`);
const arr = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given Array is :- ${arr}`);
let sum = 0;
arr.forEach((el) => sum += el);
console.log(`The sum of all elemts of array is:-`,sum);

console.log(`======= 6. Log the only even indexed value on console ========`);
console.log(`Given Array is :- ${arrayNumbers}`);
arrayNumbers.forEach((element, index)=>{
    if (index%2==0 && index!=0) {
    console.log(element);
    }
});
