//function declaration

function juices(apples,oranges){ // here apples and oranges are parameters because it acts as a placeholder in the function
    console.log(`Juice with ${apples} apples and ${oranges} oranges`);
}

juices(0,1); //called as arguments where actual values are given

//function expression
const calAge=function (birthYear){
    return 2037-birthYear;
}
console.log(calAge(1991));


const yearsUntilRetirement=(birthYear,firstName)=>{
    const age=2023-birthYear;
    const remainingYearsforRetirement=65-age;
    return `${firstName} retires in ${remainingYearsforRetirement} years`;
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1980,'Bob'));