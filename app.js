// (single line comment) This is how we use variables 
/**this is a multiline comment
 * how to take notes in a VSC document*/
 
// single = sign is the assigned operator

var box = 'pen';
var bar = 'hello world';
console.log(bar);

let baz = 'hola mundo';
console.log(baz);

const boo = 'pizza';
console.log(boo);

// next, is how you do a mathematical equation or calculation
var payRate = 18;
var payPerWeek = payRate * 40;
var payPerMonth = payPerWeek * 4;
var payPerYear = payPerMonth * 12;
console.log(payPerYear);

// Data Types (so far we have string and integer)
// Strings
var string = 'hello';
var anotherString = "world";
var fix1 = "you can't do this"; 
var anotherEx = 'Bryce said "this is cool"';
var fix2 = 'you can\'t do this';
// Lines 26-28 backslash is the escape character when you need to use more quotations or apostrophes or you can use both types in a line
var yetAnotherString = '0';
//Integers
var integer = 2;
var anotherInt = 3.14;
// BOOLEAN
var bool = false;
var bool2 = true;
console.log(bool);

var temp = 1;
temp = 2;
temp = temp + 2;
temp = temp - 1;
console.log(temp); // Value reassignment and mathematical operations

// concat = concatenation (to join), this uses the + sign and puts two variables together
var concat = 'hello ' + 'world';
console.log(concat);

//coercion, forcing javascript to change your data type
var result = '2' + 3; // 23
console.log(result); // string: '23'
var result2 = '2' * 3;
console.log(result2);
var result0 = ('2' * 1) + 3;
console.log(result0);


// Mathematical Operators
/*
plus: +, // also the concatenation symbol
minus: -,
times: *,
divide: /
modulus: %
assignment operator: =
*/

//increment "++" adds 1
//decrement "--" minus 1
var foo2 = 0;
//foo2 = foo2 + 1;
foo2++; // 1 ++ adds 1
++foo2; // 2
// console.log(foo2++); // ???
//console.log(foo2);
console.log(++foo2);

// foo2 = foo2 - 1;
foo2--;
console.log(foo2); // 1

// +=
// +=

var foo7 = 0
foo7 += 1;
console.log(foo7); //1

var baz5, baz6, baz7;
var baz8 = 50, baz9 = 10; //you can use one var keyword to name multiple variables and to define them

// Don't use a reserved keyword ie break, return, boolean
// Can't start with a number ie var 9lives
// Variables are case sensitive is FOO !== foo
// You can start with an underscore, most use an underscore to indicate a private variable (which means that it is reserved for the individual)

// PTO V1
// PTO V1: A simple program that calculates the PTO (paid time off) at a fixed rate of 5hrs per paycheck paid bi-weekly.

var PTO = 5;
var WeeksPerYear = 52;
var ChecksPerYear = WeeksPerYear/2;
var ptoPerYear = PTO * ChecksPerYear;
console.log(ptoPerYear);

/* Psuedo Code- tells you what you're doing and planning to do in regular language
START
SET INT paychecksPerYear = 26
SET INT hrsPerPaycheck = 5
SET INT PTOperYearInHours = hrsPerPaycheck * paychecksPerYear
DISPLAY "This is a simple program that outputs how many hours you earn for PTO (Paid Time Off)."
DISPLAY "You earn PTOperYearInHours hours per year."
END
*/

// SCOPE
// GLOBAL SCOPE
var foo3 = 'hello';
let bar2 = 'mundo';
{
    // LOCAL SCOPE
    var faz = 'hola';
    let bar2 = 'world';
    const yo = 'yoyo';
    console.log(yo);
    console.log(bar2);
    {
        let bar2 = 'zoo';
        console.log(bar2);
    }
}
// let and var are block scope allowing for reassignment and console.log needs to be in the {} and const is not block scope and cannot be reassigned (will show up regardless)

console.log(faz);
console.log(bar2);

var foo4 = 1;  // block scope
let foo5 = 2; // block scope
const foo6 = 3;  // not block scope, you cannot change the value
{
    const foo6 = 6;
}

foo4 = 4;
foo5 = 5;
foo6 = 6;
// foo6 = 6; WILL NOT WORK const = constant

// hello