//comment lines
/* multi line
comments*/

/* Data types:
undefined, null, boolean, string, symbol, number, and object*/

var myName = "Beau" //can be used through entire program

myName = 8

let ourName = "freeCodeCamp" //can be used only within scope of where it's used

const pi = 3.14 //variable that can never change

function variable1() {
var a;
var b = 2;
console.log(a)

a - 7;

b = a;

console.log(a)

//var a = 9;
}

variable1();

function variable2() {
    //initialize three variable
    var a = 5;
    var b = 10;
    var c = "I am a";

    //do not change this code
    a = a + 1;
    b = b + 5;
    c = c + " String!"

    console.log(a, b, c)
}

variable2();

function variableCase() {
    //Declarations
    var StudlyCapVaR;
    var properCamelCase;
    var TitleCaseOver;

    //Assignments
    StudlyCapVaR = 10;
    properCamelCase = "A String";
    TitleCaseOver = 9000;
}



