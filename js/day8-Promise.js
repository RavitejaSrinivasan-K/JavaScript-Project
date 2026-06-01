
//Promise is an Object

/**
 * Promises make handling Asynchronous operations like API Calls, File Loading, or 
 * Time Delay Easier.
 * Think of a Promise as a placeholder for value that will be available in the future.

 #State :
 1. FullFilled (Successfull)
 2. Rejected (Failure)
 3. Pending  (Proccessing)

*/


//APPROACH - 1

let prom1 = new Promise((resolve , reject)=>{

    let paymentStatus = false

    if(paymentStatus){
        resolve()
    }else{
        reject()
    }
})

prom1.then(()=>{
    console.log("Your payment successfully debited")
})

.catch(()=> console.log("Sorry due to network issue payment failed"))

.finally(()=> console.log("Thank you!"))




//APPRAOCH - 2

let prom2 = new Promise((resolve , reject)=>{

    let paymentStatus = true

    if(paymentStatus){
        resolve(1200)
    }else{
        reject(new Error("Due To Insufficient Fund"))
    }
})

prom2.then((res) => console.log('Your payment RS.', res, "Recieved"))
.catch((er)=> console.log(er))




//ERROR HANDLING

let age = '18'

try{
    if(age == ''){
        throw "Dont Skip"
    }else if(isNaN(age)){
        throw "InValid Input"
    }else {
        console.log("Thank you...")
    }
}catch(er){
    console.log(er)
}




/**
 * Async is a keyword. Use to create a function and return a promise.
 * Await is a keyword. Use to pause the execution until a promise is resolve or reject.
 */

//ASYNC 


function greet(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("This is Async!"),
            reject(new Error("This is Rejected..."))
        }, 3000)
    })
}

// console.log(greet())


async function fetchData(){
    console.log("Hi !")

    try{
        const td = await greet()
        console.log(td)
    }catch(err){
        console.log(err)
    }
    
    console.log("Bye!!!")
}

fetchData()




