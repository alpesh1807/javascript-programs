console.log(`======================== Log the First and Last element on console ==========================`);
const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`The given sring is "${arrayFruits}"`);
console.log(`First Element is ${arrayFruits[0]} and Last Element is ${arrayFruits[arrayFruits.length-1]}.`);
console.log(`======================= Add element Papaya Before the element Banana =========================`);
const arrayFruits1 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`The given sring is "${arrayFruits1}"`);
const newArrayFruits1= arrayFruits1.unshift("Papaya")
console.log(`New string after adding Papaya before Banana is "${arrayFruits1}".`);
console.log(`========================== Remove Mango from array ==========================`);
const arrayFruits2 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`The given sring is "${arrayFruits2}"`);
arrayFruits2.splice(3,1)
console.log(`new string after deleting element Mango is "${arrayFruits2}"`);
console.log(`========================== Add Element Pineapple at the last position ==========================`);
const arrayFruits3 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`The given sring is "${arrayFruits3}"`);
arrayFruits3.push("Pineapple")
console.log(`new string after adding element Pineapple at last is "${arrayFruits3}"`);
console.log(`========================== Insert Dragon Fruit before Water Melon ==========================`);
const arrayFruits4 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`The given sring is "${arrayFruits4}"`);
arrayFruits4.splice(4,0, "Dragon Fruit")
console.log(`New string after adding element Dragon Fruit before Water Melon is "${arrayFruits4}"`);
console.log(`========================== Replace Orange with Kiwi ==========================`);
const arrayFruits5 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`The given sring is "${arrayFruits5}"`);
arrayFruits5.splice(1,1,"Kiwi")
console.log(`New string after replacing Orange with Kiwi is "${arrayFruits5}"`);
console.log(`========================== Log elements from index 1 to 4 ==========================`);
const arrayFruits6 = ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`The given sring is "${arrayFruits6}"`);
arrayFruits6.slice(1,4)
console.log(`New string elements from Index 1 to 4 are "${arrayFruits6.slice(1,4)}"`);
console.log(`========================== Last 3 elements of string ==========================`);
const arrayFruits7= ["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`The given sring is "${arrayFruits7}"`);
arrayFruits7.slice(arrayFruits7.length-3,arrayFruits7.length)
console.log(`${arrayFruits7.slice(arrayFruits7.length-3,arrayFruits7.length)}`);













