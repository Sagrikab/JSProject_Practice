class Human{
    constructor(){
        this.gender='male';
    }
    printGender(){
        console.log(this.gender);
    }
}
// a class member cannot have const
class Person extends Human{
    constructor(){
        super();
        this.name='Max';
        this.gender='female';
    }
    dummyFunction(){
        console.log(this.name);
    }
}

const person=new Person();
person.gender;
person.name;
person.dummyFunction();
person.printGender();



//New version of class creation(ES7)

class Human2{
    gender='male';
    printMaleGender=()=>{
        console.log(this.gender);
    }
}

// const human=new Human2();
// human.printMaleGender();

class Person2 extends Human2{
    ageDeclare='24';
    printAge=()=>{
        console.log(this.ageDeclare);
    }
}

const person2=new Person2();
person2.printAge();
person2.printMaleGender();