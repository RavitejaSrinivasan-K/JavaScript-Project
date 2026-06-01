//SINGLE LINE COMMENT

/**
 * Multiple
 * Line
 * Comments
 */

//1 FIXED VALUES

console.log(123456789)     //NUMBER

console.log( "JavaScript 123456 !@#$%^" )      //STRING

console.log( true )     //BOOLEAN

console.log( [10, 'Playwright' , false] )      //ARRAY

console.log( {name : "Tej" , day : 1 , course : true} )     //OBJECT



//2 VARIABLES
//VAR - FUNCTION SCOPE
var a = 10;

var a = 20        //Re-Declaration is allowed
console.log(a)

a = 30            //Re-Assingment is allowed
console.log(a)



//LET - BLOCK SCOPE

let b = 100

// let b = 200      //Re-Decalration is not allowed

b = 300            //Re-Assignment is allowed
console.log(b)



//CONST - BLOCK & IMMUTABLE 

const c = 1000

// const c = 2000     //Re-Declaration is not allowed   

// c = 3000         //Re-assignment is not allowed
console.log(c)




//GLOBAL
const abc = 101


{
    //LOCAL
    const abc = "Javascript"
    console.log(abc)
}

  console.log(abc)



  //DATA TYPES
  //PRIMITIVE - IMMUTABLE (CANNOT BE CHANGE) - STACK MEMORY

  //number
  var num = 2026
  console.log(typeof num)

  //string
  var str = "JavaScript"
  console.log(typeof str)

  //boolean
  var lean = false
  console.log(typeof lean)

  //null
  var n = null
  console.log(typeof n)

  //undefined
  var und
  console.log(typeof und)

  //NAN - not a number
  var na = "hello" + 3
  console.log(typeof na, na)



  //NON - PRIMITIVE - MUTABLE (CAN BE CHANGE) - HEAP MEMORY

  //array
  var arr = [101, 202, "playwright" , false]
  console.log(typeof arr)


  //object
  var obj = {name : "tej" , day : 1 , course : true}
  console.log(typeof obj)


  //function 
  function greet(){
    console.log("Hello world!")
  }
 
  greet()
  console.log(typeof greet)



