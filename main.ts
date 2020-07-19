export {}
let message = 'Hello World';
console.log(message);

let x = 20;
const y = 20;
//let x = 30; Error
//const test ; error

let isBeginer: boolean = true;
let total: number = 0;
let name:String = 'Prem';
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;
console.log(sentence);
let n:null = null;
let u:undefined = undefined;

let isNew : boolean = null;
let myName:string = undefined;
//Array
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
//Mixed type
let randomValue: any  = 10;
randomValue = true;
randomValue  ='Prem';
// can Use like
console.log(randomValue.name);
randomValue();
randomValue.toUpperCase();

function hasName(obj: any): obj is {name: string} {
    return !!obj && typeof obj === "object" && "name" in obj
}






let myVariable: unknown = 10;
if(hasName(myVariable)){
    console.log(randomValue.name);
}
(myVariable as string).toUpperCase();


let person1: [string, number] =['Prem',41];
enum Color { red, green, blue};
let c:Color = Color.green;
console.log(c);
enum Color1 { white=5, black, yellow};
let c1:Color1 = Color1.black;
console.log(c1);


//Type inference 
let a;
a = 10;
a = true;

let b =10;
//b = true; Error


let multitype: number | boolean ;
multitype =10;
multitype = true;
