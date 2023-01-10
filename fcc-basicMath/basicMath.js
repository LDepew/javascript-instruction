var sum = 10 + 10;
console.log(sum)

var difference = 45 - 33;
console.log(difference)

var product = 8 * 10;
console.log(product)

var quotient = 66 / 33;
console.log(quotient)

var myVar = 87;
myVar = myVar + 1;
console.log(myVar)
myVar++;
console.log(myVar)

var myVar2 = 11;
myVar2 = myVar2 - 1;
console.log(myVar2)
myVar2--;
console.log(myVar2)

var ourDecimal = 5.7; //floating point numbers or floats

var myDecimal = 0.009;

var product2 = 2.0 * 2.5
console.log(product2)

var quotient2 = 4.4 / 2.0;
console.log(quotient2)

var remainder;
remainder = 11 % 3;
console.log(remainder)

function augAdd() {
    var a = 3;
    var b = 17;
    var c = 12;

    a += 12;
    b += 9;
    c += 7;

    console.log(a, b, c)
}

augAdd()

function augSubtract() {
    var a = 11;
    var b = 9;
    var c = 3;

    a -= 6;
    b -= 15;
    c -= 1;

    console.log(a, b, c)
}

augSubtract()

function augMultiply() {
    var a = 5;
    var b = 12;
    var c = 4.6;

    a *= 5;
    b *= 3;
    c *= 10;

    console.log(a, b, c)
}

augMultiply()

function augDivide() {
    var a = 48;
    var b = 108;
    var c = 33;

    a /= 12
    b /= 4;
    c /= 11;

    console.log(a, b, c)
}

augDivide()