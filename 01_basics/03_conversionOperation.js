let score = true

console.log(typeof score);  //direct
console.log(typeof (score));  //function

let valueInNum = Number(score) //to convert in number or to convert fro one type to another
console.log(typeof valueInNum);  //direct
console.log(valueInNum)  //--> "33abc will be converted but actual is NaN it is cz it cant be convertd"
//"33" => 33
//"33abc" => Nan not a number
// true => 1; false = 0

let isLoggedIn ="manni"

let boolisLoggedin = Boolean(isLoggedIn)

console.log(boolisLoggedin);
// 1=>truue ;0=>false
//"" => false
// "manni" => true

let someNum= 33
let strNum =  String(someNum)
console.log(strNum)
console.log(typeof strNum);
