function ourArray() {
var ourArray = ["John", 23];
var myArray = ["Quincy", 1];

console.log(myArray);
}
ourArray();

function ourArray2() {
    var ourArray = [["the universe", 42], ["everything", 101010]];
    var myArray = [["Bulls", 23], ["White Sox", 45]];

    console.log(myArray);
}
ourArray2();

function ourArray3() {
    var ourArray = [50,60,70];
    var ourData = ourArray[0];

    var myArray = [50,60,70];
    var myData = myArray[0];
    console.log(myData);
}
ourArray3();

function ourArray4() {
    var ourArray = [18,64,99];
    ourArray[1] = 45;

    var myArray = [18,64,99];
    myArray[0] = 45;

    console.log(myArray)
}
ourArray4();

function ourArray5() {
    var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
    var myData = [myArray[2][1]];

    console.log(myData);
}
ourArray5();

function arrayPush() {
    var ourArray = ["Stimpson", "J", "cat"];
    ourArray.push(["happy", "joy"]);

    var myArray = [["John", 23], ["cat", 2]];
    myArray.push(["dog", 3]);

    console.log(myArray);
}
arrayPush();

function arrayPop() {
    var ourArray = [1,2,3];
    var removedFromOurArray = ourArray.pop();

    var myArray = [["John", 23], ["cat", 2]];
    var removedFromMyArray = myArray.pop();

    console.log(myArray);
}
arrayPop();

function arrayShift() {
    var ourArray = ["Stimpson", "J", ["cat"]];
    var removedFromOurArray = ourArray.shift();

    var myArray = [["John", 23], ["dog", 3]];
    var removedFromMyArray = myArray.shift();

    console.log(myArray);
}
arrayShift();

function arrayUnshift() {
    var ourArray = ["Stimpson", "J", "cat"];
    ourArray.shift();
    ourArray.unshift("Happy");

    var myArray = [["John", 23], ["dog", 3]];
    myArray.shift();
    myArray.unshift(["Paul", 35]);

    console.log(myArray);
}
arrayUnshift();