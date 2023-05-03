const cutIntoPieces=function(fruit){
    return fruit*4;

};

const fruitjuice=function(apples,oranges){
    const applescutIntoPieces=cutIntoPieces(apples);
    const orangesCutIntoPieces=cutIntoPieces(oranges);

    const juice=`Apple juice made with ${applescutIntoPieces} pieces of apples and Orange juice made with ${orangesCutIntoPieces} pieces of oranges`;
    return juice;
};

console.log(fruitjuice(2,4))



const calcAge=function(birthYear){
    return 2037-birthYear;
}

const yearsUntilRetirement=function(firstName,birthYear){
    const age=calcAge(birthYear);
    const retirement=65-age;
    if(retirement>0){
    return retirement;
    }
    else{
        return -1;
    }

}

console.log(yearsUntilRetirement('Jonas',1991));
console.log(yearsUntilRetirement('Mike',1970));