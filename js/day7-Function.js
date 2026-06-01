
//1 DECLARATION FUNCTION

function greet(){
    console.log("Hello World!")
}
greet()


//Parameter
function isEven(num){
    console.log(num * 2)
}
isEven(10)


//default
function isDefault(name = "Guest User"){
    console.log('Hi', name)
}

isDefault("gokul")
isDefault()
isDefault("Ravi")




//2 FUNCTION EXPRESSION

let a1 = function (){
    console.log("This is Expression")
}

a1()


//parameter
let a2 = function(num1 , num2){
    return num1 + num2
}

console.log(a2(100 , 200))


//defualt
let a3 = function(name = "Ai"){
    console.log("Hi", name)
}

a3()
a3("Tej")



//3 ARROW FUNCTION

let b1 = () => {
    console.log("This is Arrow")
}
b1()


//Parameter
let b2 = (a, b, c) => {
    return a + b - c
}

console.log(b2(100, 50, 100))


//default
let b3 = (name = 'Bot') => console.log("Hi", name)

b3()
b3('Vijay')




//HOISTING

console.log(a)

var a = 100;



f1()
function f1(){
    console.log("This is Hoisted")
}

function f1(){
    console.log('Duplicated')
}

/*
var a;
console.log(a)   //undefined
a = 100


console.log(b)   //Reference error
let b = 20

console.log(c)   //Reference error
const c = 20

*/


//4 Anonymous

console.log("START")
setTimeout(()=>{ 
    console.log("MIDDLE")
} , 2000)
console.log("END")



//5 CALL BACK

function fun1(call){
    console.log("Hi This is CallBack!")
    call()

}

function fun2(){
    console.log("CallBack Function")
}

fun1(fun2)



//ASYNC FUNCTION



