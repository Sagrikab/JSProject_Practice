/*
Steven is still building his tip calculator,using the same rules as before: Tip 15% of the bill if the bill value is between
50 & 300, and if the value is different, the tip is 20%
1. Write a function calctip that takes any bill values as an input and returns the corresponding tip, calculated based on the
rules above.Use the function type you like the most.Test the functions using a bill value of 100
2. Use arrays,create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. BONUS: Create an array 'total' containing the total values, so the bill+tip
TEST DATA: 125,555 & 44


*/
let tip=0;
let bill_value=new Array(10);
const calcTip=(bill_value)=>{
   for(let i=0;i<bill_value.length;i++){
    if(bill_value[i]>=50 || bill_value[i]<=300){
        tip=bill_value[i]*0.15;
        return tip;
    }
    else{
        tip=bill_value[i]*0.2;
        return tip;
    }
   }
}

for(let i=0;i<arr.length;i++){
console.log(calcTip(arr));
}
