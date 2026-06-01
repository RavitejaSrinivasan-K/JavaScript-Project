//STRING METHODS

//Length
var str = "Javascript Programming"
console.log(str.length)

//SLICE - Based on starting index between ending index +1
var store = str.slice(0, 10)
console.log(store)
var store = str.slice(11, 22)
console.log(store)

var store = str.slice(-22, -11)
console.log(store)


//SUB STRING
var store = str.substring(11, 22)
console.log(store)

var store = str.substring(-22, -11)
console.log(store)



var str = "Java with Selenium, JavaScript with Playwright"

//REPLACE
var store = str.replace("Java" , "Type")
console.log(store)

//REPLACE ALL
var store = str.replaceAll("Java" , "@")
console.log(store)


//UPPER CASE
var str = "JavaScript"
console.log(str.toUpperCase())


//LOWER CASE
var str = "pLAYwRIGHT"
console.log(str.toLowerCase())



//TRIM
var str = "  Javascript  with  Playwright  "

console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())



//CONCAT
var str1 = "javascript"
var str2 = "programming"
var str3 = "language"

console.log(str1.concat(str2, str3))




//INDEX OF
var str = "JavaScript with Playwright"

console.log(str.indexOf("a"))


//LAST INDEX OF
console.log(str.lastIndexOf("a"))


//CHAT AT
console.log(str.charAt(7))



//SPLIT
var str = "raviteja@gmail.com"
console.log(str.split("@"))



//BOOLEAN TYPE
var str = "JavaScript with Playwright"

//Includes
console.log(str.includes("with"))

//StartsWith
console.log(str.startsWith("a"))

//EndsWith
console.log(str.endsWith("t"))




//REPEAT
var str = "JavaScript -> "

console.log(str.repeat(4))




//REVERSE
var str = "Raviteja"

var reversed = ""

for(let i=str.length-1 ; i >= 0; i--){
   reversed =  reversed + str[i] 
}
console.log(reversed)


//APPRAOCH - 2
var str = "JavaScript"

var reverse = str.split('').reverse().join("")
console.log(reverse)










