const bill_value=125;
const tip=(bill_value<=300 && bill_value>=50)?(bill_value*0.15):(bill_value*0.20);
const final_value=bill_value+tip;

console.log(`The bill was ${bill_value}, the tip was ${tip} and the total value is ${final_value}`);
