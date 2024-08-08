console.log(`=====================Voting Eligiblity Check ========================`);

var voteEligible = function(age){
    if (age==0 || age<0 || age >130 || age==null) {
        console.log(`your age is ${age} and it is  Invalid Data`);
    } else {
        if (age>=18) {
            console.log(`your age is ${age} and you are Eligible for Vote`);           
        } else {
            console.log(`your age is ${age} and you are Not eligible for Vote`);            
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
