// const scoreDolphin1=97
// const scoreDolphin2=112
// const scoreDolphin3=101

// const scoreKoalas1=109
// const scoreKoalas2=95
// const scoreKoalas3=123

// const sumScoreDolphin=scoreDolphin1+scoreDolphin2+scoreDolphin3;
// const avgScoreDolhin=sumScoreDolphin/3;

// const sumScoreKoalas=scoreKoalas1+scoreKoalas2+scoreKoalas3;
// const avgScoreKoalas=sumScoreKoalas/3;

// console.log(avgScoreDolhin)
// console.log(avgScoreKoalas);

// if(avgScoreDolhin>avgScoreKoalas){
//     console.log('Dolphin has won the competition');
// }
// else if(avgScoreDolhin<avgScoreKoalas){
//     console.log('Koalas has won the competition');
// }
// else{
//     console.log("It's a Draw");
// }


//Bonus-1

// const avgScoreDolphin=(97+112+101)/3;
// const avgScoreKoalas=(109+95+123)/3;
// console.log(avgScoreDolphin,avgScoreKoalas);

// if(avgScoreDolphin>avgScoreKoalas && avgScoreDolphin>=100){
//     console.log('Dolphins has won the match and it has points greater than 100 🏆');
// }
// else if(avgScoreDolphin<avgScoreKoalas && avgScoreKoalas>=100){
//     console.log('Koalas has won the match and it has points greater than 100 🏆');
// }
// else if(avgScoreDolphin===avgScoreKoalas){
//     console.log("It's a draw");
// }


//Bonus-2

const avgScoreDolphin=(97+112+75)/3;
const avgScoreKoalas=(109+95+78)/3;
console.log(avgScoreDolphin,avgScoreKoalas);

if(avgScoreDolphin>avgScoreKoalas && avgScoreDolphin>=100){
    console.log('Dolphins has won the match and it has points greater than 100 🏆');
}
else if(avgScoreDolphin<avgScoreKoalas && avgScoreKoalas>=100){
    console.log('Koalas has won the match and it has points greater than 100 🏆');
}
else if(avgScoreDolphin===avgScoreKoalas && avgScoreDolphin>=100 && avgScoreKoalas>=100){
    console.log("It's a draw");
}
else{
    console.log("No team has won the trophy");
}