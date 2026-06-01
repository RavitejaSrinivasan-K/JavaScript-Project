
//Array Methods
//Index Starts from 0,1,2,3...
//Length Starts from 1,2,3,...

var arr = [10, 20, "playwright" , false]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[100])

console.log(arr.length-1)



//PUSH
var mobiles = [10, 20, 30, 40]

mobiles.push(500, "javascript" , true)
console.log(mobiles)


//POP
mobiles.pop()
console.log(mobiles)


//SHIFT
var laptop = ["bp" , "Dell" , "Lenovo" , "Mac"]

laptop.shift()
console.log(laptop)


//UNSHIFT
laptop.unshift("Hp", "Acer")
console.log(laptop)



//CONCAT
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [7, 8, 9]

console.log(arr1.concat(arr2, arr3))
console.log( arr1 + arr2 + arr3 )
console.log( arr1 , arr2 , arr3 )


//SLICE - Based on starting index between Ending index +1

var arr = [100, 200, 300, 400, 500, 600, 700]
var store = arr.slice(2, 5)
console.log(store)


//REVERSE
var arr = [101, 202, "playwright" , false]

arr.reverse()
console.log(arr)



//MAP - Trasformatter

var arr = [4, 9, 16, 25, 36, 49.786, "javascript"]

var sqr = arr.map(Math.sqrt)
console.log(sqr)

var coupon = arr.map(function (a , b, c){
    return a + 5
})
console.log(coupon)




//FILTER

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var fil = arr.filter(function(a){
    return a % 2 == 0
})

console.log(fil)


var fil = arr.filter(function(a){
    return a % 2 !== 0
})

console.log(fil)



//REDUCE
var arr = [10, 20, 30, 40]

var red = arr.reduce(function(a, b){
    return a + b
} , 10)

console.log(red)

//a 0 + b 10 = 10
//a 10 + b 20 = 30
//a 30 + b 30 = 60
//a 60 + b 40 = 100



//TO STRING
var arr = [10, 20, "javascript" , true]
var str = arr.toString()
console.log(str)


//JOIN
var arr = [10, 20, 30, 40]
var str = arr.join(" <--> ")
console.log(str)
 

//VALUES
var arr = [101, 102, "Playwright" , false]

var str = arr.values()

for (const ele of str) {
    console.log(ele)
}


//FOR EACH
arr.forEach(function(a, b, c){
    console.log(a, b, c)
})


//SORT
var arr = [11, 2, 9, 34, 18, 89, 69, 71]

//ASC
var asc = arr.sort(function(a, b){
    return a - b
})

console.log(asc)

//a 11 - b 2 = 9 (swap)
//a 11 - b 9 = 2 (swap)
//a 11 - b 34 = -23 (no swap)
/**
 * 0 < = swap
 * 0 > = no swap
 * 0 == 0 no swap
 */


//DESC
var desc = arr.sort(function(a, b){
    return b - a
})

console.log(desc)



//SORT 
var arr = ["Chennai" , "Alandhur" , 'ambattur' , 'Banglore' , 'bangaladesh' , "chengalpattu"]

var str = arr.sort()
console.log(str)



//SPLICE - Based on starting index, delete count, ...Values
var arr = [10, 20, 30, 40, 50, 60, 70]

//remove
arr.splice(2, 3)
console.log(arr)

//add
arr.splice(2, 0, 101, 202, 303)
console.log(arr)

//update
arr.splice(1, 1, 'Javascript', true)
console.log(arr)




