const marksMass=95;
const johnsMass=85;
const marksHeight=1.88;
const johnsHeight=1.76;

const marksBMI=marksMass/marksHeight**2;
const johnsBMI=johnsMass/johnsHeight**2;




const markHigherBMI=marksBMI>johnsBMI;
console.log(marksBMI,johnsBMI,markHigherBMI);