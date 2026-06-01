//OPERATORS

//ARITHMETIC
var a = 10
var b = 20

var c = a + b
console.log(c)

var c = a - b
console.log(c)

var c = a * b
console.log(c)

var c = a / b
console.log(c)       //QUOTIENT

var c = b % a
console.log(c)      //REMINDER

var c = a ** b
console.log(c)      //POWER ROOT  10 * 10 * 10 * upto 20 times



//ASSIGNMENT  =

var a = 20
var b = 10

a = a + b      //a = 20 + 10 = 30
console.log(a)

a = a - b      //a = 30 - 10 = 20
console.log(a)

a = a * b      //a = 20 * 10 = 200
console.log(a)

a /= b         //a = 200 / 10 = 20
console.log(a)

a %= b         //a = 20 % 10 = 0
console.log(a)

a **= b        //a = 0 ** 10 = 0
console.log(a)




//COMPARISON
var a = 100
var b = "100"

console.log( a == b )     //It will check loosely content values

console.log( a === b )    //It will check strictly typeof value

console.log( a > b )      //Greaterthan

console.log( a >= b )

console.log( a < b )      //Lessthan
 
console.log( a <= b )

console.log( a != b )

console.log( a !== b )



//LOGICAL
// && AND, || OR, ! NOT 

let age = 60

if( age > 17 && age < 60 ){     
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}


if( age > 17 || age < 60 ){     
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}


let ac = 1

if( !ac ){
    console.log("Yes")
}else{
    console.log("No")
}

/**
 * true(1)    false(0)
 * 
 * AND 
 * true + true = true
 * true + false = false
 * false + true = false
 * false + false = false
 * 
 * 
 * OR
 * true + true = true
 * true + false = true
 * false + true = true
 * false + false = false
 * 
 */



//UNARY
//POST INCREMENT / DECREMENT

var a = 100
console.log( a++ )
console.log( a )
console.log( a )

//PRE INCREMENT / DECREMENT

var b = 2000
console.log( --b )



//TERNARY ? 

var abc = 23

var x = (abc == 3) ? true : false
console.log(x)





