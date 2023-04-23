export {}
let message = "Welcome TypeScript";
console.log(message);

let x = 20;
const y = 34;

const title = "Beginner";

// let x = 23; // Cannot redeclare block-scoped variable 'x'

let isBeginner : boolean = true;

let total : number = 10;

let name : string = 'Code';

let sentence : string = `Hello coding world my name is ${name} I am a beginner in TypeScript`;
console.log(sentence);

let n : null = null;
let u : undefined = undefined;

let list1 : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];

let person1 : [number,string] = [25,"Jason"];

enum Color {red = 5,blue,green};
let c : Color = Color.red;
console.log(c);

let randomValue : any = 1;
randomValue = true;
randomValue = "anyIsGood";
console.log(randomValue.name);

let myVariable : any = 12;
function hasName(obj : any) : obj is {name : string}
{
    return !!obj && 
        typeof obj === "object" &&
        name in obj
} 

if(hasName(myVariable))
console.log(myVariable.name);

(myVariable as string).toUpperCase;

let a;
a = 20;
a = true;

let b = 10;
//b = true;  // error : type 'true' is not assignable to type 'number'. variable acts like first assigned value.

let multitype : number | boolean;  // restricts to the specified type & provides intelligence support
multitype = 20;
multitype = true;


function sum(num1 : number,num2? : number) : number {
    if(num2)
    return num1 + num2;
    return num1;
}

function sum1(num1 : number,num2 : number = 10) : number {
    return num1 + num2;
}

sum(1,2);
sum(1);

sum1(1,2);
sum1(1);

interface Person {
    firstName: string;
    lastName?: string;
  }

  function fullName(person: Person) {
    console.log(person.firstName + ' ' + person.lastName);
  }

  let p = {
    firstName: 'Bruce'
  };
  fullName(p);

  class Employee {
    employeeName: string;
  
    constructor(name: string) {
      this.employeeName = name;
    }
  
    greet() {
      console.log('Good morning ' + this.employeeName);
    }
  }
  
  let emp1 = new Employee('Vishwas');
  console.log(emp1.employeeName);
  emp1.greet();
  
  class Manager extends Employee{
    constructor(managerName: string) {
      super(managerName);
    }
    delegateWork() {
      console.log('Manager delgating tasks' + this.employeeName);
    }
  }
  
  let m1 = new Manager('Bruce');
  m1.delegateWork();
  m1.greet();
  console.log(m1.employeeName);
