console.log(`===================== Interview Check ========================`);

var interviewEligible = function(gradScore, hscScore, sscScore, candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>90 ) {
        console.log(`${candidateName}, your scores in Graduation =${gradScore}%, HSC =${hscScore}% and SSC =${sscScore}%.`);
        console.log(`Congrates ${candidateName}, your are eligible for TCS interview.`);
    } else {
        console.log(`${candidateName}, your scores in Graduation =${gradScore}%, HSC =${hscScore}% and SSC =${sscScore}%.`);
        console.log(`${candidateName}, Unfortunately your are not eligible for TCS interview.`); 
    }
}
console.log(`===================== Candidate -1  ========================`);
interviewEligible(80,86,90,"Alpesh Shah");
console.log(`===================== Candidate -2  ========================`);
interviewEligible(70,65,55,"Avinash");
console.log(`===================== Candidate -3  ========================`);
interviewEligible(60,79,88,"Amol")
