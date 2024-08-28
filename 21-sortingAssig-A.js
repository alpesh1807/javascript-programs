console.log(`============= Sorting Assignment -A ==============`);
const arrayRollNumber = [113, 46, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`======= Reverse the given Array =======`);
console.log(`The given array is:-`, arrayRollNumber);
const reverseArray =  arrayRollNumber.reverse();
console.log(`Reverse Array is:-`, reverseArray);

console.log(`======= use of sort() method without any custom logic =======`);
console.log(`The given array is:-`, arrayRollNumber);
const sortArray = arrayRollNumber.sort();
console.log(`Sort array without custom logis is :-`, sortArray);

console.log(`======= Sort array in ascending order using sort() method with custom logic =======`);
console.log(`The given array is:-`, arrayRollNumber);
const ascendingArray =  arrayRollNumber.sort((n1, n2)=>{
      return  n1>n2 ? 1:-1;
});
console.log(`Ascending array is:- `, ascendingArray);

console.log(`======= Find Greatest number in array =======`);
console.log(`The given array is:-`, arrayRollNumber);
const greatestnum =  ascendingArray[ascendingArray.length-1]
console.log(`Greatest Number in array is:- `, greatestnum);

console.log(`======= Find Smallest number in array =======`);
console.log(`The given array is:-`, arrayRollNumber);
const smallestnum =  ascendingArray[0]
console.log(`Smallest Number in array is:- `, smallestnum);

console.log(`======= Remove duplicate number in array =======`);
console.log(`The given array is:-`, arrayRollNumber);
let newArray = [];
    for (let index = 0; index <arrayRollNumber.length; index++) {
        if (newArray.indexOf(arrayRollNumber[index])=== -1) {
             newArray.push(arrayRollNumber[index]);
        } 
    };
console.log(newArray);





