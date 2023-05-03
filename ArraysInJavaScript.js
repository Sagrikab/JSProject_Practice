const friends=['Michael','Steven','Peter'];
console.log(friends);

//Arrays can store different values all at the same time

console.log(friends[0]);
console.log(friends[friends.length-1]);
console.log(friends.length);
friends[2]='Jay';  //Array is non primitive datatype and as friends we have declared as const, so for non-primitive datatype const can be mutated

//friends=['Bob','Alice']; // Error as const does not allow reassignment for the entire error, it will result into an error
console.log(friends);

const years=new Array(1991,2008,2010);
console.log(years);

const firstName='Jonas';

// const example=[];
// example[1]='Mango';
// example[1]='Grapes';
// console.log(example)

const calculateAge=function(birthYear){
    return 2023-birthYear;
}

const yearsArray=[1991,2000,2011,2004,1943,1958,1978];

console.log(calculateAge(yearsArray[0]));
console.log(calculateAge(yearsArray[1]));
console.log(calculateAge(yearsArray[yearsArray.length-1]));

const age1=calculateAge(yearsArray[0]);
const age2=calculateAge(yearsArray[1]);
const age3=calculateAge(yearsArray[yearsArray.length-1]);

const ages=[age1,age2,age3];
console.log(ages);


//innerHTML

// const cars=["Mercedes","Volvo","BMW","Audi"];
// cars.innerHTML="Opel";
// console.log(cars);
