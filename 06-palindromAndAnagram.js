console.log(`=== write a function to check wheather given string is Palindrome or not==`);

 function palin(sentence){
    console.log("Given Word is: ", sentence);
    let sortNew =  sentence.split('').reverse().join('');
    if (sentence==sortNew) {
        console.log(`Given word "${sentence}" is palindrome.`);
    } else {
        console.log(`Given Word "${sentence}" is not Palindrome.`);
    }  
}
const newWord = 'madam';
palin(newWord);

const newWord1 = 'dad';
palin(newWord1);

const newWord2 = 'hello';
palin(newWord2);

console.log(`=== write a function to check wheather given pair of words are anagram or not==`);
function newCheck(string1, string2){
    console.log("Given Word is: ", string1);
    let ne1= string1.toLowerCase();
    let ne2= ne1.split('').sort().join('');

    console.log("Given Word is: ", string2);
    let ne3= string2.toLowerCase();
    let ne4= ne3.split('').sort().join('');


    if (ne2==ne4) {
        console.log(`Given Pair of words '${string1}' and '${string2}' are Anagram.`);
    } else {
        console.log(`Given Pair of words '${string1}' and '${string2}' are not Anagram.`);
    }
}
let nw1 = "Silent";
let nw2 = "Listen";
newCheck(nw1, nw2);

let nw3 = "Hello";
let nw4 = "World";
newCheck(nw3, nw4);

let nw5 = "Such";
let nw6 = "Much";
newCheck(nw5, nw6);