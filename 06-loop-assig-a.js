
console.log(`======= The total number vowels including small and capital vowels for string ================`);
var sentence = "I am a good IT Developer";
var vowels = 'aeiou';
var vowelCount = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index)
        char= char.toLowerCase();
    if (vowels.includes(char)) {
        vowelCount++; 
    }
}
console.log(`Count of vowels are : ${vowelCount}`);


console.log(`======= The Sum of cube of numbers from 1 to 5================`);
var sumOfCube = 0;
for (let index = 1; index <=5; index++) {
    sumOfCube = sumOfCube + index*index*index;   
}
console.log(`Summation is ${sumOfCube}`);

console.log(`======= Print the Characters of odd position for given string ================`);
var odd = function oddposition(sentence) {
    console.log(`Given string is "${sentence}"`);
    for (let index = 0; index < sentence.length-1; index++) {
        var char = sentence.charAt(index);
        if (index%2==1 && char != " ") {
            console.log(char); 
        }
    }   
}

odd("hard work always pays back");
odd("Soon I will be UI IT Champ")

