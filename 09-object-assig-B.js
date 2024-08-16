console.log(`======== SBI Bank Details ======= `);
let sbiBank = {
    bankName: " SBI Bank",
    accountNo: 550055009612,
    location: "Ngp",
    ifsc: "SBI0002345",
    interestRate: 8.5,
    showDetails:function(){
       console.log(`Bank Name: ${this.bankName}, Account No.: ${this.accountNo}, Location: ${this.country}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);   
    }
}
sbiBank.showDetails();

console.log(`======== AXIS Bank Details ======= `);
let axisBank = {
    bankName: "AXIS Bank",
    accountNo: 110055009612,
    location: "Ngp",
    ifsc: "AXIS0002345",
    interestRate: 9,
    showDetails:function(){
       console.log(`Bank Name: ${this.bankName}, Account No.: ${this.accountNo}, Location: ${this.country}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);   
    }
}

axisBank.showDetails();

console.log(`======== HDFC Bank Details ======= `);
let hdfcBank = {
    bankName: "HDFC Bank",
    accountNo: 220055009612,
    location: "Ngp",
    ifsc: "HDFC0002345",
    interestRate: 8.5,
    showDetails:function(){
       console.log(`Bank Name: ${this.bankName}, Account No.: ${this.accountNo}, Location: ${this.country}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);   
    }
}

hdfcBank.showDetails();

console.log(`======== YES Bank Details ======= `);
let yesBank = {
    bankName: "YES Bank",
    accountNo: 330055009612,
    location: "Ngp",
    ifsc: "YES0002345",
    interestRate: 9,
    showDetails:function(){
       console.log(`Bank Name: ${this.bankName}, Account No.: ${this.accountNo}, Location: ${this.country}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);   
    }
}

yesBank.showDetails();