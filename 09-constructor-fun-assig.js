console.log(`============== Bank Details using Consturctor Function =============`);

function bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

let yesBank = new bank("Yes Bank", "Mumbai", "YES0002122", 212100)
console.log(`Bank Details:- Name:-${yesBank.bankName}, Location:-${yesBank.location}, IFSC Code;- ${yesBank.ifscCode} and Branch Code:- ${yesBank.branchCode}`);

let sbiBank = new bank("SBI Bank", "Pune", "SBI0002101", 212100)
console.log(`Bank Details:- Name:-${sbiBank.bankName}, Location:-${sbiBank.location}, IFSC Code;- ${sbiBank.ifscCode} and Branch Code:- ${sbiBank.branchCode}`);

let mahBank = new bank("Maharastra Bank", "Nagpur", "MAH0001022", 2102345)
console.log(`Bank Details:- Name:-${mahBank.bankName}, Location:-${mahBank.location}, IFSC Code;- ${mahBank.ifscCode} and Branch Code:- ${mahBank.branchCode}`);

let axisBank = new bank("Axis Bank", "Goa", "AXIS0001102", 110234)
console.log(`Bank Details:- Name:-${axisBank.bankName}, Location:-${axisBank.location}, IFSC Code;- ${axisBank.ifscCode} and Branch Code:- ${axisBank.branchCode}`);

console.log(`============ Add Data Member to Object ===========`);
let bankOpen = bank.prototype.openTime = "9 AM IST"
console.log(`One Added data member in object is:- ${bankOpen}`);
let bankClose = bank.prototype.closeTime = "6 PM IST"
console.log(`One more Added data member in object is:- ${bankClose}`);

console.log(`============= SBI Bank Open and Close Time =============`);
console.log(`SBI Bank Open Time:- ${sbiBank.openTime} and Close Time :- ${sbiBank.closeTime} `);

console.log(`============= AXIS Bank Open and Close Time =============`);
console.log(`AXIS Bank Open Time:- ${axisBank.openTime} and Close Time :- ${axisBank.closeTime} `);

console.log(`============= Yes Bank with Bank Name, Branch Code and Open Time =============`);
console.log(`Bank Name:- ${yesBank.bankName}, Branch Code:- ${yesBank.branchCode} and Yes Bank Open Time:- ${sbiBank.openTime} `);




