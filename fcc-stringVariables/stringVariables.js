//string literals
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Beau";
var myLastName = "Carnes";

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)

var myStr2 = '<a href="http://www.example.com" target="_blank">Link<\a>';
console.log(myStr2)

/*****
Code Output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*****/

var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3)

var ourStr = "I come first. " + "I come second.";

var myStr4 = "This is the start. " + "This is the end.";
console.log(myStr4)

var ourStr2 = "I come first. ";
ourStr2 += "I come second.";

var myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";
console.log(myStr5)

var ourName = "freeCodeCamp";
var ourStr3 = "Hello, our name is " + ourName + ", how are you?";

var myName = "Beau";
var myStr6 = "My name is " + myName + " and I am well!";
console.log(myStr6)

var anAdjective = "awesome!";
var ourStr4 = "freeCodeCamp is ";
ourStr4 += anAdjective;

var someAdjective = "worthwhile";
var myStr7 = "Learning to code is ";
myStr7 += someAdjective;
console.log(myStr7)

var firstNameLength = 0;
var firstName2 = "Ada";

firstNameLength = firstName2.length;

var lastNameLength = 0;
var lastName2 = "Lovelace";

lastNameLength = lastName2.length;
console.log(lastNameLength)

var firstLetterOfFirstName = "";
var fistName3 = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName3 = "Lovelace";

firstLetterOfLastName = lastName3[0];
console.log(firstLetterOfLastName)

//strings are immutable, can't be changed
var myStr8 = "Jello World";

myStr8 = "Hello World";

var firstName4 = "Ada";
var secondLetterofFirstName = firstName4[1];

var lastName4 = "Lovelace";
var thirdLetterOfLastName = lastName4[2];
console.log(thirdLetterOfLastName)

var firstName5 = "Ada"
var lastLetterOfFirstName = firstName5[firstName5.length - 1];

var lastName5 = "Lovelace";
var lastLetterOfLastName = lastName5[lastName5.length - 1];
console.log(lastLetterOfLastName)

var firstName6 = "Ada";
var thirdToLastLetterOfFirstName = firstName6[firstName6.length - 3];

var lastName6 = "Lovelace";
var secondToLastLetterOfLastName = lastName6[lastName6.length - 2];
console.log(secondToLastLetterOfLastName)

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));