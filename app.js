'use strict'
import { PEOPLE,DATA, NUMBERED } from "./db.js";
console.log(PEOPLE,DATA, NUMBERED);
// import { DATA , NUMBERED} from "./db.js";
// console.log();


// VARIABLES,VALUES AND DECLARATORS
// Variables are storage facility for storing data or values
// Values are just a piece of data
// Declarators are used in decalaring variables(let,const,var)
// LET
let firstName = 'Christy';
console.log(firstName);
let lastName = 'Obi';
console.log(lastName);
// Var
var country = 'Nigeria';
console.log(country);
var tribe = 'Yoruba';
console.log(tribe);
// const
const PIE = 3.142
console.log(PIE);

// let vs const vs var  (don't use var)
// var----- declares , redeclares and re-assigns
var gender = 'male';
var gender = 'trans'
gender = 'female'
console.log(gender);

// let--- declares and re-assigns
let state = 'Lagos';
state = 'Delta'
console.log(state);

// const--- declare
const fullName = 'Chris';
console.log(fullName);

// Constraints in variable naming
// variable names can only contain letters, numbers,underscore,dollar sign. but can not start with a number.
// don't give spacings betwn variables names. use carmel casing
// Reserved names can't be used as a variable name,since it is reserved
// By convention,don't start variable names with uppercase except for const
// Use descriptive names when naming variables


// DATA TYPES
// strings--is used for storing letters and they are denoted by a single ('') or double ("")quotes
// number ---is used for numbers (can hold decimal numbers and whole numbers)
// Boolean---- true or false
// null---empty
// undefined
// objects (arrays.dates) for holding more than one value and denoted by {}
// symbols
// bigInt
// ===================================================================================================================
let continent = 'Africa';
console.log(continent);
let firstName2 = 'Christy';
let lastName2 = 'Obi';
let fullName2 = firstName2 + ' ' + lastName2
// let fullName2 = firstName2 + ' ' +lastName2   (one way to create a space inbtwn words)
// or put a space after the last letter of the value (eg) let firstName2 = 'Christy ' or before the first letter (eg) let firstName2 = ' Christy'
console.log(fullName2);

// string properties and methods
// properties
let email = 'askjeeves@hotmail.com';
console.log(email);
console.log(email.length);

// getting position ---i 
let city = 'surulere'
console.log(city[6]);

// Methods
let trainee = 'abimbola';
console.log(trainee);
// to change it to uppercase
console.log(trainee.toUpperCase());
let traineeUpperCase = trainee.toUpperCase()
console.log(traineeUpperCase);
// to convert to lowercase
let newTrainee = 'ENIOLA'
console.log(newTrainee);
let newtraineeLowerCase = newTrainee.toLowerCase()
console.log(newtraineeLowerCase);

// indexof()
let newEmail = 'techstudio@gmail.com';
console.log(newEmail);
let newEmailIndexOF = newEmail.indexOf('h');
console.log(newEmailIndexOF);
// lastIndexOf()
let applicant = 'Racheal'
console.log(applicant);
let lastIndexOfApplicant = applicant.lastIndexOf('a');
console.log(lastIndexOfApplicant);
// slice
let religion = 'christianity';
console.log(religion);
let slicedReligion = religion.slice(0,9);
console.log(slicedReligion);
// replace()
let profession = 'developer'
console.log(profession);
let replaceProfession = profession.replace('d','z');
console.log(replaceProfession);

// task1
let animal = 'hippopotamus';
console.log(animal);
console.log(animal.toUpperCase());
console.log(animal.toLowerCase());
let animalIndexOf = animal.indexOf('t');
console.log(animalIndexOf);
let lastIndexOfAnimal = animal.lastIndexOf('u')
console.log(lastIndexOfAnimal);
let slicedAnimal = animal.slice(5,8)
console.log(slicedAnimal);
let replaceAnimal = animal.replace('h','b');
console.log(replaceAnimal);

// number
let year = 2023;
console.log(year);
let score = 100;
console.log(score);
let score2 = 200;
console.log(score2);

// math operators
// +, -, /, *, **,%
let finalScore = score + score2;
console.log(finalScore);
let minus = score2 - score;
console.log(minus);
let multiply = score * score2;
console.log(multiply);
let divide = score2 / score;
console.log(divide);
console.log(200 ** 15);

let num = 10
console.log(num);
let num2 = 3
console.log(num2);
let indices = num ** num2
console.log(indices);

let modulus = num % num2;
console.log(modulus);

// Decremental and incremental
let newYear = year + 2
console.log(newYear);
// you can also use 
// year++
// year += 2
year *=5
console.log(year);

// task2
 continent = 'africa';
console.log(continent);
let language = 'pidginEnglish';
console.log(language);
let ghanaPopulation = 500
console.log(ghanaPopulation);
let finlandPopulation = 800
console.log(finlandPopulation);
country = 'nigeria';
console.log(country);
let nigeriaPopulation = 1000
console.log(nigeriaPopulation);
// question 1
let nigerPopulation = nigeriaPopulation / 2;
console.log(nigerPopulation);
// question 2
let nigeriaPopulationAdd = nigeriaPopulation + 1;
console.log(nigeriaPopulationAdd);
// question 3
let nigeriaVsFinland = '>'
console.log(nigeriaVsFinland);
// question 4
let ghanaVsFinland = '<'
console.log(ghanaVsFinland);
// question 5
let description = 'nigeria';
console.log(description);
let verb1 = 'is';
console.log(verb1);
let verb2 = 'in';
console.log(verb2);
let nigercontinent = 'africa';
console.log(nigercontinent);
let verb3 = 'and';
console.log(verb3);
let verb4 = 'its';
console.log(verb4);
let people ='nigerianPopulation';
console.log(people);
let verb5 = 'people';
console.log(verb5);
let verb6 = 'speak';
console.log(verb6);
let dialect = 'pidginEnglish';
console.log(dialect);
let fullDescription = description + ' ' + verb1 + ' ' + verb2 + ' ' + nigercontinent + ' ' + verb3 + ' ' + verb4 + ' ' + people + ' ' + verb5 + ' ' + verb6 + ' ' + dialect;
console.log(fullDescription);

// 13th april
// concatinating variables with strings
let blog = 50

let statements = 'the blog has ' + blog + ' likes'
console.log(statements);

let traineeScore = 90;
let traineeName = 'Christy';
let school = 'Aguda grammar school';
let response = 'Ejiro did you know ' + traineeName + ' attends ' + school + ' and scored ' + traineeScore + ' in her test'
console.log(response);
// template literals or strings (uses backticks(``) and interpolation(${}))
let newResponse = `Ejiro did you know ${traineeName} attends ${school} and scored ${traineeScore} in her test`
console.log(newResponse);
// ============================================================================================================================
let classAvailable = 'Javascript fullstack course';
let bootCamp = 'Techstudio Academy';
let stateLocation = 'Lagos';
let regFeeInNaira = 300;
let prospectiveTrainee = 'John'

let adminSay = 'Hello ' + prospectiveTrainee + ' ' + bootCamp + ' offers ' + classAvailable + ' in ' + stateLocation + ' and the registration fee in naira is ' + regFeeInNaira
console.log(adminSay);

// replicate the above using template literals
let newAdminSay = `Hello ${prospectiveTrainee} ${bootCamp} offers ${classAvailable} in ${stateLocation} and the registration fee in naira is ${regFeeInNaira}`
console.log(newAdminSay);

// Arrays are used  for storing collections of strings,numbers,booleans and other data types and arrays are denoted byb square bracket
let christyFavFoods = ['beans','rice','okpa'];
console.log(christyFavFoods);
// Array properties
let lengthOfChristyFavFoods = christyFavFoods.length
console.log(lengthOfChristyFavFoods);
console.log(christyFavFoods[0]);
// console.log(christyFavFoods[0] = 'fufu');
christyFavFoods[1] = 'fufu'
console.log(christyFavFoods);

// Array methods
// includes
let includes = christyFavFoods.includes('corn')
console.log(includes);
// join()
let join = christyFavFoods.join('-')
console.log(join);
// concat()
let concat = christyFavFoods.concat(['banga','starch','yam'])
console.log(concat);
// push
let push = christyFavFoods.push('efo-riro');
console.log(push);
console.log(christyFavFoods);
// pop
let pop = christyFavFoods.pop()
console.log(pop);
console.log(christyFavFoods);

// let colors = []
// console.log(colors.length);
// colors.push('blue')
// colors.push('orange')
// to change an element from its original name to another
// colors[1] = 'green'
// console.log(colors);

// spread operator (...) and destructuring
let numbers = [1,2,3,4,5,6]
let newNumbers = [7,8,9,10]
let allNumbers = numbers.concat(newNumbers)
console.log(allNumbers);

// with spread operator
let newConcat = [...numbers, ...newNumbers];
console.log(newConcat);

let names = ['bola','eni','john','ejiro','christy','sam','henry','fiyin'];
console.log(names);
console.log(names[3]);
console.log(names[5]);
// another way of getting destructuring
let [zero,one,two,three,four,five,six,seven] = names
console.log(one);
console.log(seven);

// typeof
let scores = 50
console.log(scores);
console.log(typeof scores);
let pikinNmae = 'seun';
console.log(typeof pikinName);
let latops = ['dell','mackbook','hp','asus'];
console.log(typeof latops);
let cart = null
console.log(typeof cart);
let destination
console.log(typeof destination);

// type of conversion and coercion
// conversion is when you manually convert from one data type to another but coercion is when js does the conversion behind the screen for us

// conversion
let inputYear = '1985';
console.log(inputYear);
console.log(typeof inputYear);
// ================================================
let newNumber = Number('1986')
let addedNumber = newNumber + 18
console.log(typeof newNumber);
console.log(addedNumber);
// lets try and convert something thats not actually a number
let personName = Number('Eggy');
console.log(personName);
console.log(typeof NaN);
// NaN means not a number

// coercion
console.log('i am 36 years old');
console.log('i am ' + String(22) + ' years old');
console.log('22' - 3);
console.log('22' > 2);
console.log('22' > '2');
console.log('2' * '4');
// console.log(Number('22') > Number('2'));

let z = '1' + 1
let w = z - 1
console.log(w);

// comparison operators
// >,<, ==, ===, !=,>=,<=
const YEAR = 2013
console.log(YEAR > 2001);
console.log(YEAR < 2001);
console.log(YEAR >= 2001);
console.log(YEAR <= 2001);
console.log(YEAR != 2001);

// loose comparison operator ==, only checks for value and not data type
let SCORE = '100';
let SCORE2 = SCORE == 100
let SCORE3 = SCORE != 100
console.log(SCORE2);
console.log(SCORE3);

// strict comparison operator ===, checks for both values and data type
let SCORE4 = SCORE === 4
let SCORE5 = SCORE !== 4
console.log(SCORE4);
console.log(SCORE5);

// task3
let trainees = ['Christy','Sam','Henry','Fiyin','Ejiro','John','Eni','Bola']
console.log(trainees);

trainees[0] = 'pappi'
console.log(trainees);

trainees.push('Amos', 'Mike');
console.log(trainees);

trainees.pop()
console.log(trainees);

trainees.unshift('Zack','Bobby');
console.log(trainees);

trainees.shift();
console.log(trainees);

let newTrainees = trainees.concat(['Queen','Segun','Pius','Emeka'])
console.log(newTrainees); 


// let newTrainees = ['Segun', 'Queen', 'Pius', 'Emeka'];
// let allTrainees = trainees.concat(newTrainees);
// console.log(allTrainees)
// =================================================================================================
// control flow (Loops(for,while,for in, for of)  and conditional statement(if,else,else if,switch,ternary operator))
// =================================================================================================
// console.log('lifting weight repetition 1 🏋️‍♂️');
// console.log('lifting weight repetition 2 🏋️‍♂️');
// console.log('lifting weight repetition 3 🏋️‍♂️');
// console.log('lifting weight repetition 4 🏋️‍♂️');
// console.log('lifting weight repetition 5 🏋️‍♂️');
// console.log('lifting weight repetition 6 🏋️‍♂️');
// console.log('lifting weight repetition 7 🏋️‍♂️');
// console.log('lifting weight repetition 8 🏋️‍♂️');
// console.log('lifting weight repetition 9 🏋️‍♂️');
// console.log('lifting weight repetition 10 🏋️‍♂️');
// for loop uses for-keyword,initializer,condition,final expression ande a block of code
for(let i = 1; i <= 10; i++){
  console.log('lifting weight repetition' + i + '🏋️‍♂️');
}
let guys = ['Sam','Henry','Fiyin','Ejiro','John','Eni','Bola'];
for(let i = 0; i < guys.length; i++){
  console.log(guys[i].toUpperCase());
}

// while loop
let i = 0
while (i < guys.length){
  console.log(guys[i])
  i++
}

// for in
let babes = ['christy','beauty','princess','joan'];
for(let p in babes){
  console.log(babes[p]);
}

// for of
for(let b of babes){
  console.log(b.toUpperCase());
}

// using FOR 
let colors = ['blue', 'pink' , 'black', 'red']
for (let i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

// using FOR IN
for (let i of colors){
  console.log(i.toUpperCase());
}

// using FOR OF
for(let i in colors){
  console.log(colors[i]);
}

// conditional statement IF,ELSE,ELSE IF
let AGE = 5
if (AGE === 50){
  console.log('you are old');
} else{
  console.log('invalid');
}

let password = 'pas';
console.log(password.length);

if (password.length >= 12){
  console.log('that\'s a very strong password');

}else if(password.length >= 8){
  console.log('password is good');

}else if(password.length>= 4){
  console.log('password is weak');

}else{
  console.log('please password must be atleast 12 characters');
}

// Logical Operators
// ||(double pipe) means logical or
// &&(amoersand) means logical and


// FOR LOGICAL AND
// true && true = True
// true && false = False
// false and true = False
// false and false = False
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// FOR LOGICAL OR
// true || true = True
// true || false = True
// false || true = True
// false || false = False
console.log(11111);
console.log(true || true);
console.log(true || true);
console.log(true || true);
console.log(true || true);


let PASSWORD = 'pass@';
if (PASSWORD.length >=7 && PASSWORD.includes('@')){
  console.log('super strong password');

}else if (PASSWORD.length >= 5 || PASSWORD.includes('-') && PASSWORD.length > 6 || PASSWORD.includes('_')){
  console.log('password is good');

}else{
  console.log('password is\nt good enough');
}

// let newPassword = prompt('type a password');
// if(newPassword.length >= 12 && newPassword.includes('@')){
//   alert('very very strong password')

// }else if(newPassword.length >= 8 || newPassword('*')){
//   alert('password is good')

// }else{
//   alert('password is weak')
// }


// task
// let inputtedNumber = prompt('please type a number')

// if(inputtedNumber % 2 === 0){
//   alert('even number')

// }else{
//   alert('odd number')
// }

// Break and Continue

let Result = [20,40,0,50,100,15,4,6,8,9]
for(let i = 0; i < Result.length; i++){
  if (Result[i] === 0  || Result[i] === 50) {
    continue
  }
  if (Result[i] === 9){
    break
  }
  // if (Result[i] === 50){
  //   continue
  // }
  console.log(Result[i]);
}

// this is a classwork
// for (let i = 1; i < 5; i++){
//   if (i === 3)
//   continue
//   console.log(i);

// }



// IF statement VS switch statement
let Points = 'Z'
if (Points === 'A'){
  console.log('You got A');
}else if (Points === 'B'){
  console.log('you got B');
}else if (Points === 'C'){
  console.log('you got C');
}else if (Points === 'D'){
  console.log('you got D');
}else {
  console.log('Guy you don fail, try dey attend class abeg');
}

// Switch
let GRADE = 'B'
switch (GRADE) {
  case 'A':
    console.log('you got A');
    break
  case 'B':
    console.log('you got B');
    break
  case 'C':
    console.log('you got C');
    break
  case 'D':
    console.log('you got D');
    break
  default:
    console.log('Guy you don fail, try dey attend class abeg');
}

// task
// let samHeight = 10;
// let christyHeight = 9;
// let samWeight = 60;
// let christyWeight = 70;

// let samBmi = 60 / 10 ** 2;
// let christyBmi = 70 / 9 ** 2;
// if(samBmi > christyBmi ){
//   console.log('samBmi');
// } else{
//   console.log('christyBmi');
// }

// class solution to assignment
let samHeight = 10;
let samWeight = 60;
let samBMI = samWeight / samHeight **2
console.log(samBMI);

let christyHeight = 9;
let christyWeight = 70;
let christyBMI = christyWeight / christyHeight **2
console.log(christyBMI);

// using conditional statement to determine the bigger BMI

if (samBMI >christyBMI){
  console.log("Sam's  BMI is greater than Christy's");
}else{
  console.log("Christy's BMI is greater than Sam's");
}


// to put the staement in a word form you can write the code this way
if (samBMI >christyBMI){
  console.log(`Sam's  BMI of ${samBMI} is greater than Christy's BMI of ${christyBMI}`);
}else{
  console.log(`Christy's BMI of ${christyBMI} is greater than Sam's BMI of ${samBMI}`);
}

// Ternary Operator
// authenticated ? renderApp() : renderLogIn()
// samBMI > samBMI
// ? console.log(`Sam's  BMI of ${samBMI} is greater than Christy's BMI of ${christyBMI}`)
// : console.log(`Christy's BMI of ${christyBMI} is greater than Sam's BMI of ${samBMI}`);


// global scope, Block and Function scope
let myAge = 100
if (myAge){
  let myAge = 200

  console.log('inside 1st block: ' + myAge);
  if(myAge){

    let myAge = 300
    console.log('inside 2nd block of code: ' + myAge);
  }
}
console.log('outside block of code: ' + myAge);


// lines of code that performs a given task is known as FUNCTIONS
// when yoy call,invoke or run a function is the only time a function will work
// Three types of funtion ; Declaration, xEpression and Arrow function
// functions are reuseable
// keyword for fuction ; fuction keyword , duction name, a block of code.

// function declaration
function team(){
  let name = 'Christy';
  console.log(name);
}
team()

// fuction expression
let speak = function(){
  let myColor = 'Yellow';
  console.log(myColor);
}
speak()

// arrow function

let newTrainer = ()=>{
  let country = 'Nigeria';
  console.log(country);
}
newTrainer()

// Parameters and arguments in functions

// function getName (){
//   let person = 'Hi my name is Sam';
//   console.log(person);
// }
// getName()


// how to use parameters and arguments
// parameters is the word in the bracket after the function variable and argument is rhe word inside the bracket of the invoke
// the first function accepts hoisting which means you can invoke before writing the code of function
function getName (userName){
  let person = 'Hi my name is ' + userName;
  console.log(person);
}
getName('Sam')

let getSpeaker = function (customerName){
  let person = `Hello my name is ${customerName} ` 
  console.log(person);
}
getSpeaker('Steve')


let getAge = (nameOfClient, clientYearOfBirth) =>{
  let clientAge = `${nameOfClient} is ${2023 - clientYearOfBirth} Years Old` 
  console.log(clientAge);
}
getAge('Sam' ,1980)


// task

let spartanFirstScore = 60;
let spartanSecondScore = 70;
let spartanThirdScore = 80;
let spartanAverageScore = (spartanFirstScore + spartanSecondScore + spartanThirdScore) / 3
console.log(spartanAverageScore);

let alphaFirstScore = 88;
let alphaSecondScore =91;
let alphaThirdScore = 120;
let alphaAverageScore = (alphaFirstScore + alphaSecondScore + alphaThirdScore) / 3
console.log(alphaAverageScore);

// using an if, else statement to determine the winner
if(spartanAverageScore > alphaAverageScore){
  console.log('spartan is the winner of the competition');
}else{
  console.log('alpha is the winner of the competition');
}

// for ternary operator method
spartanAverageScore > alphaAverageScore
? console.log(`spartan is the winner of the competition`)
: console.log(`alpha is the winner of the competition`);

// continuation of lesson
const getGreetings = function (name,time){
  let statements = `Good ${time} ${name}`;
  console.log(statements);

}
getGreetings('John' , 'Afternoon')

// ========================================================================

let getDay = currency =>{
  let count = 10 + currency
  console.log(count);
}
getDay('Naira')

// returning variables from a function
let getProgramme = ()=>{
  let stack = 'Javascript fullstack';
  console.log(stack);
  return stack
}
let ss = getProgramme()
let newApplicant = 'Hi Blessing did you know that tech-studio offers ' + ss
console.log(newApplicant);

// 19/4/2023
// another way of writing the return function
let getWords = food => 'Hello Eni did you know christy ate ' + food + ' wraps of fufu'

let newWord = getWords(20)
let reterate = newWord + ' after class today'
console.log(reterate);


let fees = [60,80,0,120]
let peeps = ['Ejiro','Christy','Kruz','Sam','Henry','Eni']

function getDetails(sth,newSth){
  for(let i = 0;i < sth.length; i++){
    console.log(sth[i]);
  }
  for(let i = 0; i < newSth.length; i++){
    if(newSth[i] === 0){
      continue
  }
  console.log(newSth[i]);
  }
}
getDetails(peeps,fees)

// Higher order functions and call back function
// Higher orde function accepts another function as an argument or returns another function as a result
// call back functions are functions passed to another function as an arugument and excuted inside that function

function getHello(){
  return 'Hi'
}
let rr = getHello()
let getReport = (nth)=>{
  console.log(nth);
}
getReport(rr)

// Object====== object literal,math object,dates
// Higher order fucntion(forEach,map,filter,find,findIndex,reduce)
// DOM(Document object model)
// Object, key and value pairs,denoted by curly braces({})

let christyCustomer ={
  firstName: 'Henry',
  lastName: 'Kingsley',
  complexion: 'dark',
  friends: ['Kruz','Sam'],
  age: 2023 - 1960,
  canDrive:true,
  isBlind:false,
  date: Date()
}
console.log(christyCustomer);
console.log(typeof christyCustomer);

let newCustomer = {
  country: 'Nigeria',
  state: 'Lagos'
}

// to add country and logos to the data above we use spread operator cause te data above is already an object and we are adding another object to it

console.log(newCustomer);
let christy_Customer = {...christyCustomer,...newCustomer}
console.log(christy_Customer);

// Acessing objects Dot VS Bracket notation
let christyTrainee = {
  firstName:'Kruz',
  lastName:'Bola',
  skinColor:'dark',
  tribe:'yoruba',
  age:39,
  address:{
    stateOfOrigin:'Ibadan',
    stateOfResidence:'Lagos',
    lga:'surulere'
  },
  favFoods:['banga','egusi','fufu','amala'],
  canDrive:true,
  profession:'senior front-end Dev',
  canSmoke:false,
  numberOfKids:null
}
// Dot notation
// accessing firstName
let newchristyTrainees2 = christyTrainee.firstName.toUpperCase()
console.log(newchristyTrainees2);

//accessing FavFoods
let newchristyTrainee3 = christyTrainee.favFoods
console.log(newchristyTrainee3);

// accessing stateOfOrigin
let newChristyTrainee4 = christyTrainee.address.stateOfOrigin
console.log(newChristyTrainee4);

// Bracket notation
// accessing firstName

let bracketChristyTrainee = christyTrainee['firstName'].toUpperCase()
console.log(bracketChristyTrainee);

// accessing stateOfOrigin

let bracketChristyTrainee2 = christyTrainee['address']['stateOfOrigin']
console.log(bracketChristyTrainee2);

// Destructuring objects
let account = {
  name:'Uloma',
  toes:10,
  stateOfMind:'extral cool',
  statusOfLove:'shey shey bere'
}

console.log(account);
// console.log(account.names);
let nameInAccount = account.name
console.log(nameInAccount);
let toesInAccount = account.toes
console.log(toesInAccount);
let stateOfAccount = account.stateOfMind
console.log(stateOfAccount)
let {name,toes,stateOfMind,statusOfLove} =account
console.log(name,toes,stateOfMind,statusOfLove);
// object method
let passengersss = {
  firstName:'Christy',
  lastName:'Kingsley',
  year:2023,
  busFareInNaira:200,
  pocketMoneyInNaira:1000,
  currentDate:Date(),
  calcBal:function(){
    let statement = this.firstName + ' has ' + (this.pocketMoneyInNaira - this.busFareInNaira) + ' naira';
    console.log(statement);
    return statement

  }
}
console.log(passengersss.calcBal());
// console.log(this);

// TASK
// let alphaFirstAverage = (43 + 21 + 73 ) / 3
// console.log(alphaFirstAverage);
// let alphaFirstAverage = ()=>{
//   let newAlphaScore = (43 + 21 + 73) / 3
//   console.log(newAlphaScore);
// }
// alphaFirstAverage()

// let alphaSecondAverage = (87 + 55 + 39) / 3
// console.log(alphaSecondAverage);

// let spartanFirstAverage = (63 + 55 + 47) / 3
// console.log(spartanFirstAverage);

// let spartanSecondAverage = (21 + 33 + 2) / 3
// console.log(spartanSecondScore);

// let alphaTotalAverage = (alphaFirstAverage + alphaSecondAverage)
// console.log(alphaTotalAverage);

// let spartanTotalAverage = (spartanFirstAverage + spartanSecondAverage)
// console.log(spartanTotalAverage);

// if(spartanTotalAverage > alphaTotalAverage){
//   console.log('spartan wins');
// }else {
//   console.log('alpha wins');
// }

// function checkWinner (aveAlpha){
//   let  alphaAverage = aveAlpha  + ' VS 73.7';
//   console.log(alphaAverage);
// }
// checkWinner('106')


// correction A1
let calAverage = (score1 , score2, score3)=>(score1 + score2 +score3)/3
 
calAverage()

// correction A2
let teamAlpha = calAverage (43,21,73);
console.log(teamAlpha);
let teamSpartan = calAverage(63,55,47)
console.log(teamSpartan);

// correction A3 using expression function
let checkWinner = function(aveAlpha,aveSpartan){

if(aveAlpha >= 2 * aveSpartan){
  console.log('Alpha wins ${aveAlpha} VS ${aveSpartan}');

}else if(aveSpartan >= 2 * aveAlpha){
  console.log('Spartan wins ${aveSpartan} VS ${aveAlpha}');

}else{
  console.log('No Winner');
}
}
checkWinner(teamAlpha,teamSpartan)

// correction A4
// let checkWinner2 = function(aveAlpha,aveSpartan){

//  if(aveAlpha >= 2 * aveSpartan){
//     console.log('Alpha wins ${aveAlpha} VS ${aveSpartan}');
  
//   }else if(aveSpartan >= 2 * aveAlpha){
//     console.log('Spartan wins ${aveSpartan} VS ${aveAlpha}');
  
//   }else{
//     console.log('it is a Tie');
//   }
//   }
//   checkWinner2(70,25)

// ===================================================================================================
// Higher order functions(forEach , ma, filter, find, findIndex,reduce)
// TO LOOP DATA THAT WAS EXPORTED
let id = ['first','second','third','fourth'];
for(let i = 0; i < DATA.length; i++){
  console.log(DATA[i]);
}

// forEach()
// it doesnt return a new array
// it loops

DATA.forEach((xx)=>{
  console.log(xx);
})
// or
// DATA.forEach(function(datum){
//   console.log(datum);

// })
// Map Method
// It returns a new array
// It doesnt change the size of the original array
// It uses values from the original array
// it loops

let anotherPerson = PEOPLE.map((person)=>person)
console.log(anotherPerson);

// filter()
// it loops
// it returns based on the condition

for(let i = 0;i < PEOPLE.length; i++){
  if(PEOPLE[i].name === 'Christy'){
    console.log(PEOPLE);
  }
}

let filteredPerson = PEOPLE.filter(function (pp){
  return pp.name === 'Christy'

})
console.log(filteredPerson);

// findIndex
let itemidx = DATA.findIndex(function(idx){
  return idx.id === 4

})
console.log(itemidx  );

// find()
let item = DATA.find(function(singleItem){
  return singleItem.id === 1

})
console.log(item);

// reduce()
// it returns a callback for each element of an array
// the difference here is that reduce passes the result of this callback(the ACCUMULATOR)from one array element to another

const sum = NUMBERED.reduce((acc,item)=>{
  return acc + item

},0)
console.log(sum);

let countries = ['Nigeria','Egypt','Cameroon','France']
let diffCountries = countries.map((country)=>country)
console.log(diffCountries);


for(let i = 0;i < countries.length;i++){
  if(countries[i] === 'Egypt'){
    console.log(countries[i]);
  }
}

// or use a filter to solve it
let filteredCountries = countries.filter(filteredCountries=>filteredCountries === 'Egypt')
console.log(filteredCountries);

// using index

let index = countries.findIndex((idx)=> idx === 'Cameroon')
console.log(index);

// Math object
let floor = 4.9999
let floorResult = Math.floor(floor)
console.log(floorResult);

let ceil = 5.1888
let ceilResult = Math.ceil(ceil)
console.log(ceilResult);

let round = 7.1222
let roundResult = Math.round(round)
console.log(roundResult);

let pow = Math.pow(2,2)
console.log(pow);
// or
// console.log(2 ** 2);

// random(Math.random())
// let random = Math.random()
// console.log(random);
// to have a whole number inside random() add math.round to math.random
let random = Math.round(Math.random() * 6)
console.log(random);


// TASK1
// Q1
const person = {
  firstName: 'Samuel',
  lastName: 'Obiekwugo',
  mass: 76,
  height: 1.99
};
console.log(person);
const person2 = {
  firstName: 'Christy',
  lastName: 'Ugoala',
  mass: 80,
  height:2.1
};
console.log(person2);
// Q2
let calcBMI = (mass,height)=> mass/height **2
calcBMI()
let samBmi = calcBMI(76,1.99)
console.log(samBmi);
let christyBmi = calcBMI(80,2.1)
console.log(christyBmi);
// Q3
let largerBmi = function(samBmi,christyBmi) {
  if(samBmi>=christyBmi){
    console.log(`sam ${samBmi} is higher than christy ${christyBmi}`);
  }else{
    console.log(`christy ${christyBmi} is higher than sam ${samBmi}`);
  }
}
largerBmi(samBmi,christyBmi)

// TASK2
const companies = [
  { name: 'company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'company Eight', category: 'technology', start: 1981, end: 1989 },
]
// using a map method
let companyName = companies.map((company) => {
  return company.name;
});
console.log(companyName);

let filteredOver = companies.filter(above => above.end-above.start >= 10)
console.log(filteredOver);

const age = [30,15,10,5,40,80,2,20,21,25]

let generalAge = age.filter(order => order>= 21)
console.log(generalAge);


// assignment correction
let christyObj = {
  fullNmae: 'christy chisom',
  mass: 80,
  height: 2.1,
  calcBmi: function (){
    return (this.mass /this.height)**2
  }
}
let christyBmiCalc = christyObj.calcBmi()
console.log(christyBmiCalc);

let samObj = {
  fullNmae: 'sam Samson',
  mass: 76,
  height: 1.99,
  calcBmi: function (){
    return (this.mass /this.height)**2
  }
}
let samBmiCalc = samObj.calcBmi()
console.log(samBmiCalc);
let BMI =
christyBmiCalc > samBmiCalc
?`christy BMI ${christyBmiCalc} is higher than sam BMI ${samBmiCalc}`
: `sam BMI ${samBmiCalc} is higher than christy BMI ${christyBmiCalc}`
console.log(BMI);

// Q3
const BILL = 430

const TIP = BILL <=300 && BILL >=50 ? BILL * 0.15 : BILL *0.2
console.log(TIP);
const STATEMENT = `BILL was ${BILL},tip was ${TIP}, and total was ${BILL+TIP}`;
console.log(STATEMENT);

// ============================================================================================================
// DATE
// console.log(new Date().getMinutes());
const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',

]


const DAYS = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat','Sun']

console.log(new Date());
let date = new Date()


const month = date.getMonth()
console.log(MONTH[month]);

const day = date.getDay()
console.log(DAYS[[day]]);

let fullYear = date.getFullYear()
console.log(fullYear);

let hour = date.getHours()
console.log(hour);

let minutes =date.getMinutes()
console.log(minutes);

let seconds = date.getSeconds()
console.log(seconds);

let statementOfYear = `${DAYS[day]} ${MONTH[month]} ${date.getDate()} ${fullYear} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} GMT+0100 (West Africa Standard Time)`
console.log(statementOfYear);

// TIMERS IN JAVASCRIPT
// javascript is usually known for synchronous
// setTimeOut() vs setInterVal()

function coloured(){
  console.log('this is a function');
}
setTimeout(coloured, 8000)
// OR
// setTimeout(() => {
//   console.log('this is a functionnn');
// },3000)
// coloured()

let colours = function(){
  console.log('blue');
}
// setInterval(colours,3000)  
// let interval = setInterval(()=>{
//   let date = new Date()
//   console.log(date);
// }, 1000)






  

















 


