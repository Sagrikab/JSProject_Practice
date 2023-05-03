const calcAverage=(a,b,c)=>(a+b+c)/3;
console.log(calcAverage);

const scoreDolphins=calcAverage(5,4,41);
const scoreKoalas=calcAverage(23,84,27);

//create function checkWinner with the attributes avgDolphins,avgKoalas

const checkWinner=function(avgDolphins,avgKoalas){
if(avgDolphins>=2*avgKoalas){
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
}
else if(avgKoalas>=2*avgDolphins){
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
}
else{
    console.log(`No team wins`);
}
}

checkWinner(scoreDolphins,scoreKoalas);
