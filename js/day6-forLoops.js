
console.log('---FOR---')
//FOR - initialization; Condition; Increment/ Decrement

for(let i=1; i <= 10 ; i++){
  if(i == 5){
    continue
  }
  console.log(i)
}


console.log('---FOR OF---')
//FOR OF

var arr = [10, 20, 30, 40, 50, 60]

for(const val of arr){
    console.log(val)
}



console.log('---FOR EACH---')
//FOR EACH

var arr = [100, 200, 300, 400, 500]

arr.forEach(function(val){
    console.log(val)
})




console.log('---FOR IN---')
//FOR IN
var obj = {
    name : "Ravi" ,
    age : 23 , 
    job : false
}


for(const key in obj){
    // console.log(key)
    console.log(obj[key])
}




//BASIC DESTRUCTURE
var arr = [10, 20, 30, 40]

var [a, b, c, d]  = arr

console.log(a)
console.log(b)


//SKIP
var arr = [100, 200, 300, 400, 500]

var [a, , c, d, e] = arr
console.log(a)
console.log(c)

console.log([a, , c, , e])



//REST
var arr = [101, 202, 303, 404, 505, 606, 707]

var [a, b, c, d, ...e] = arr

console.log(a)
console.log(d)
console.log(e)


//SPREAD
console.log(...e)



//SWAP
var abc = "Java" , xyz = "Playwright" ;

[abc, xyz] = [xyz, abc]

console.log(abc)
console.log(xyz)

