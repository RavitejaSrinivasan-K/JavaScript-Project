
/**
 * In Javascript , Object is collection of key : value pair.
 *  Where each key is associated with values.
 * (Which could be a String, Number, Boolean, Array, function, even another Object).
 */


//Appraoch - 1

const obj1 = {
    name : "Tej" , 
    age : 23 , 
    course : true,

    multi : [101, 202, "playwright", false] ,

    object : {company : "TechM" , job : false , empId : 786}

}


//DOT NOTATION
console.log(obj1.name)

//BRACKET NOTATION
console.log(obj1['course'])

//CHAINING
console.log(obj1.object.empId)



//ADD
obj1.abc = function(){
    console.log("This is Object!")
}

console.log(obj1)


//REPLACE
obj1.name = "Ajith"

console.log(obj1)


//DELETE
delete obj1.multi 

console.log(obj1)





/**
 * In JS, OOP has 4 main pillars:
 * Object Oriented Programming System/Structure

 1.Encapsulation
      - Wrapping data + methods together inside a class.

 2.Abstraction
      - Hide internal implementation.

 3.Inheritance
      - One class inherits properties & methods from another.

 4.Polymorphism
      - Same method name, different behavior.
      1. Method OverLoading - not possible 
      2. Method OverRiding 

1.  Class is a Blue print / Template for properties and Methods.
 * ClassName - PascalCase
 * methodName, propertyName - camelCase
 
2.  Constructor
      - A constructor is a special function used to create and initialize objects.

 * This is a Keyword. Use to represent current class objects.
 * Static is a keyword. Use to store unique values.
 * Static variable, Methods. We can access using only class name, 
 * without creating an Object.
 * 
 * Extends is a keyword. Use to access Parent into Child.
 * Super is a keyword. Use to access from parent objects into child class.


*/


//BASE , PARENT , SUPER

class User1 {

    constructor(course) {
        this.course = course
        this.fee = "15000"
    }

    login(name){    //localParameter
        console.log("Hi" , name)
    }

    logout(){     //globalParameter
        console.log("Thank you for study :" , this.course)
    }

    payment(){
        console.log("Your course fee :" , this.fee)
    }

}


let p1 = new User1("Javascript")

p1.login("Prabu")
p1.logout()
p1.payment()





//DERIVED, CHILD, SUB


class User2 extends User1{

    static countOf = 0    //static variable

    constructor(){
        super()
        this.count = 0
        ++User2.countOf
    }

    payment(){
        console.log(`Your Total Users Count : ${++this.count}`)
    }

    static display(){    //Static method
        console.log(`Your Actual Students Count : ${User2.countOf}`)
    }

}


let p2 = new User2()
// p2.countOfList()
// p2.countOfList()
// p2.countOfList()

User2.display()
User2.display()
User2.display()



let p3 = new User2()
// p3.countOfList()
// p3.countOfList()

User2.display()
User2.display()

p3.login("Harish")

p3.payment()
p1.payment()