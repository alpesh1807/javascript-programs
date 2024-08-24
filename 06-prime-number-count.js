console.log(`======= The total Prime Numbers in given array ================`);
const array = [3, 9, 7, 6, 19, 29, 53];
var arrayCount = 0;
for (const element of array) {
    function isPrime(element){
        for (let index = 2; index < element; index++) {
            if (element%index == 0) {
                return false
                } 
            }
            return true
        }
        let result = isPrime(element);
        console.log(`Is ${element} is Prime Number:- ${result}`);  
        if (result==true) {
            arrayCount++
    }
}

console.log(`Total Prime Numbers in given numbers "${array}" are : ${arrayCount}`);