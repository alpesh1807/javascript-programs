console.log("============= Function with no arguments and no return value ===============");

function show(){
    console.log("Good Evening");
}
show(); 

function demo(){
    console.log("I am learing JavaScript");
}
demo(); 

console.log("============= Personal Details ===============");
function personalDetails(firstName, lastName, collegeName) {
    console.log("My First Name is:", firstName);
    console.log("My Last Name is:", lastName);
    console.log("My College Name is:", collegeName);
}
personalDetails ("Alpesh", "Shah", "SATI");

console.log("============= Addition of 3 values ===============");
function addThreeValues(param1, param2, param3) {
    var result= param1 + param2 + param3 
    console.log("Addition is :", result);   
}
addThreeValues(10.23, 600, 40)
addThreeValues("Hello"," Good", " Morning")