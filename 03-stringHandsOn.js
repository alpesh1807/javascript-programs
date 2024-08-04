console.log("============= String Hands on ===============");
function stringHandsOn() {
    console.log("   Hey You are doing good, keep it up    ");
    console.log("============= String length ==============="); 
    var string = "   Hey You are doing good, keep it up    "  
    var stringHandsOnLength = string.length;
    console.log(`Length of String is : ${stringHandsOnLength} `);
    console.log("============= String and it's length after trim ==============="); 
    var stringTrim = string.trim(); 
    var stringTrimlength = stringTrim.length
    console.log(`String length after removing leading and trailing space is : "${stringTrim}" and it's length is :${stringTrimlength} `);
    console.log(`Total removed extra spaces are : ${stringHandsOnLength-stringTrimlength}`);
    console.log("============= First and last character after trim ==============="); 
    var charAt0 = stringTrim.charAt(0)
    var lastChar = stringTrim.charAt(stringTrimlength-1) 
    console.log(`First Character of trim string is:  ${charAt0} , and last Character of trim string is:  ${lastChar}`);
    console.log("============= Total Words of string after trim ===============");
    var totalWordsTrim = stringTrim.split(" ");
    console.log(` Given sentence - "${stringTrim}", Array :"${totalWordsTrim}" , and Total number of words- "${totalWordsTrim.length}"`);
    console.log("============= index of word good in Trim string ===============");
    var indexOfGood = stringTrim.indexOf("good");
    console.log(`Index of word "good" is: ${indexOfGood}`);
    console.log("============= SubString starting from index ===============");
    console.log(`sbustring starting from index 22 : ${stringTrim.substring(22)}`);
    console.log("============= Check end and start of string  ===============");
    var endsWith = stringTrim.includes("up");
    var startWith = stringTrim.includes("Hey");
    console.log(`Is String after trim ends with "up" ? : ${endsWith}`) , 
    console.log(`Is String after trim starting from "Hey" ? : ${startWith}`);

    
    

    
    
    
       
}

stringHandsOn();
