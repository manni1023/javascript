// there are 2 types primitive and non primitive 
// call by value call by reference
//  Primitive  (call by value)

// 7 types:String ,Number,Boolean,Null,Undefined,Symbol(to make a value unique),BigInt.

const score = 100
const scoreValue = 10.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anoId = Symbol('123')

console.log(id === anoId);

// const bigNum = 7894561231258749n

// Reference Type or Non primitive

//Array,Objects,Functions

const heros = ["batman","shaktiman","doga"] ;   //array and reference type
let myObj={
    name:"manni",
    age:19,       //oject
}

const myFunction = function(){
     console.log("helloworld!!");
}

console.log(typeof heros);
console.log(typeof myFunction);