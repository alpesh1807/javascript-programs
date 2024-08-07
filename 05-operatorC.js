console.log(`================== Interview Eligiblity =================`);
function interviewCheck(gradScore, hscScore, sscScore ,candidateName) {
   var result= (gradScore>=70 || hscScore>=80 || sscScore>90 )? 
   `Congrates ${candidateName} you are eligible for TCS interview.`:
   `${candidateName}, Unfortunately you are not eligible for interview.`
   console.log(`The score of ${candidateName} in Graduation, HSC and SSC are ${gradScore}%, ${hscScore}% and ${sscScore}% respectively.` );
   console.log(result);
}
interviewCheck(80,86,90,"Alpesh Shah");
interviewCheck(70,65,55,"Amol");
interviewCheck(60,79,88,"Avinash")