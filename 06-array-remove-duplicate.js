console.log(`======= To remove duplicate Numbers in given array ================`);
const array = [11, 3, 4, 11, 4, 7, 3];
let newArray = [];
    for (let index = 0; index <array.length; index++) {
        if (newArray.indexOf(array[index])=== -1) {
             newArray.push(array[index]);
        } 
    }

console.log(`Given array is- [${array}] `);
console.log(`New array after removing duplicate element is : [${newArray}]`);
