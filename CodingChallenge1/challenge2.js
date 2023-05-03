const massMark=95;
const heightMark=1.99;
const massJohn=85;
const heightJohn=1.76;

const bmiMark= massMark/(heightMark**2);
const bmiJohn= massJohn/(heightJohn**2);
console.log(bmiMark,bmiJohn);

if(bmiMark>bmiJohn){
    console.log("Mark's BMI is higher than John's");
}
else{
    console.log("John's BMI is higher than Mark's");
}