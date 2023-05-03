//Spread Operator(...) - Used to split up array elements OR object properties
/*
const newArray=[...oldArray,1,2]
const newObject={...oldObject,newProp:5}
*/

const nums=[1,2,3];
const newNumbers=[...nums,4];
console.log(newNumbers);

const myName={
    name:'Sagarika'
};

const spreadName={
    ...myName,
    gender:'female'
};

console.log(spreadName);

//Rest Operator(...args) - Used to merge a list of function arguments into an array
/*
function sortArgs(...args){
    return args.sort();
}
*/

const filter=(...args)=>{
return args.filter(el=>(el===1 || el===2));
}
console.log(filter(1,2,3));



