console.log(`=============== Create Object Professor ===============`);
let professor= {
    firstName: "Alpesh",
    lastNmae:"Shah",
    age:36,
    collegeName:" SATI",
    city: "Bhopal",
    degree:{
        engineering:"CSC",
        masterDegree: "Data Science",
        phd: "Adv Computing",
    }
}
console.log(professor);

console.log(`=============== Add New Property "Total Experience" ===============`)
professor.totalExperience ="14 years";
console.log(`totalExperience:${professor.totalExperience}`);

console.log(`=============== Modefied one property ===============`)
professor.age=32;
console.log(`Updated age: ${professor.age}`);
console.log(professor);

console.log(`=============== Add New Array Certificates in Object===============`)
professor.certificate =['Hacker Rank Participation','Certificate in IEF Course','Certificate in Advance Programming'];
const proCertificate = professor.certificate
console.log(`[${proCertificate}]`);

console.log(`=============== Add one New Certificates ===============`)
professor.certificate.splice(2,0,'Oracle Certified')
const professorCertificate = professor.certificate;
console.log(professorCertificate);

console.log(`=============== Log Last Element of Array ===============`)
const entries = Object.entries(professor);
console.log(entries[7][1][3]);

console.log(`=============== Traverse Array Using For Loop  ===============`)
for (const key in professor.certificate) {
    if (Object.prototype.hasOwnProperty.call(professor.certificate, key)) {
        const element = professor.certificate[key];
        console.log(`${key}, ${element}`);
    }
}

console.log(`=============== Log Complete Object on Console Using For Loop  ===============`)
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}, ${element}`);
    }
}

















