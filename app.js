
// FIRST SECTION 
// document.write('hello world');
// alert('hello world');
// console.log('hello world');

// document.write('hello world');
// alert('hello people');
// console.log('hello world')


// Second Section 

// I woke up early today. 
// statements - sets of instructions
// comments - shortcut Command + / 

// this is console statement 
/*
console.log('hello world');
console.log('hello people');
console.log('hello dude');
console.log('hello susan');

*/

// THIRD SECTION 
/*
Variable - Most Basic Building Block 
Variables - store, access, modify === value 

Rules for naming the variables: 
1. can contain digits, letters, underscore, $
2. Must start with letter, $ or _ 
3. No keyword (learn more on this later)
4. Cannot start with number 
5. Case sensitive - fullname vs Fullname 
6. camelCase or under_score

Declare, Assignment Operator, Assign Value 


let name = "Ashley Name"; 
let address, zip, state; 
address = "1111 Main Street";
zip = "11111";
state = "california"; 
name = "fish burrito";
console.log(address, zip, state);
console.log(name);
*/
// LET VS CONST VS VAR
/*
//  using var (not common practice)
var value = "some value"; 
// using let 
let firstName = "john";
//  using const (CONSTANT) - cant re-assign 
const lastName = "jordan";

console.log(value);
console.log(firstName);
console.log(lastName);

*/

//  FOURTH SECTION  string data 
/*
// "" or ''

const lName = 'john';
const lasttName = "john";

const name = 'john\'s courses are the best';
or 
const name = "john's courses are the bestest"

// STRING CONCATENATION - combine string values 
`` - backticks (template strings) easier option
const name = "john";
const lastName = "shakenbake";
let fullName = name + ' ' + lastName; 
console.log('Hello there your full name is : ' + fullName)

const website = 'google';
const url = 'https://www.' + website + '.com'
console.log(url);


//  FIFTH SECTION 
//  Numbers 
//  Loosely Typed = don't declare type 

const number = 34;
// let pants = 2.456;
// pants = 'are great';
const number2 = 2.456;

const add = number + number2; 
const sub = number - number2; 
const mult = number * number2; 
const div = number / number2; 

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);



console.log(number);
console.log(number2);

// += , -= , /= , *= , ++ , -- , %
// Modulus (%) operator returns the remainder after integer division 
let number = 40; 
number += 5;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;
number--;
number++;

const slices = 10; 
const children = 4; 
const amount = slices % children;

// not proper 
const random = 4+5+10*10;
// results = 109 

// not proper 
const random2 = (4+5+10)*10;
//  results = 190 

console.log(amount);
console.log(random);
console.log(random2);


// SECTION : 6 
//   Implicity Type Conversion 

const name = "ashley";
const lastName = "waffles";
const fullName = name + " " + lastName;
console.log(fullName);

const number = 4;
const number2 = 10; 
const result = number + number2; 
console.log(result);

const value = name - lastName;
console.log(value);

let number3 = 10;
let number4= 23;
//  100 lines of code 
number4 = "pants";
const result2 = number3 + number4;
console.log(result2);

// Section : 7
//  All Data types in JS 
primitive - String, number, boolean, null, undefined, symbol 
*** KING:  Object- arrays, functions, objects ***
3. typeof - operator (typeof variable) (typeof value)

PRIMITIVE DATA TYPES: 

1.string

const text = 'some text'; 

2. number  

const number = 45; 

3. boolean

let value1 = true;
let value2 = false;

4. null 

const result = null; 

5. undefined 

let name;

6. symbol (ES6)

*will cover later!* 

console.log(typeof text);
console.log(typeof true);
console.log(typeof number);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof null);
console.log(typeof name);
*/

//  Arrays, Functions, and Objects
// Arrays - [], 0 index based 

const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna';
const friend5 = 'anna';
const friend6= 'anna';

//  this is less redundant 

const friends = ['Anna', 'Ashley', 'Darrell', 'Eugene'];
console.log(friends);