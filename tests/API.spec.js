

import {test, expect, request} from "@playwright/test"
// import {test} from "../utility/auth"



const baseURL = 'https://dummyjson.com'


test('GET ALL USERS DETAILS' , async ({request})=>{

   const response = await request.get( process.env.BASEURL + "/users" )

   const body = await response.json()
   console.log(body)

})



let token

test("POST - Login User" , async ({})=>{

   const req = await request.newContext()

   const response = await req.post(process.env.BASEURL + "/user/login" , {
    headers : {
        "Content-Type" : "application/json"
    } , data : {
         username: process.env.USER_NAME,
         password: process.env.PASSWORD
    }
   })

   const body = await response.json()
   console.log(body)

   token = await body.accessToken

   console.log(token)

   await expect(await response.status()).toBe(200)
})



test("GET Current Authenticated User" , async ({request})=>{

    const response = await request.get(process.env.BASEURL + '/user/me' ,{
        headers : {
            "Content-Type" : "application/json" , 
            "Authorization" : `Bearer ${token}`
        }
    })
    
    const body = await response.json()

    console.log(body)

    await expect(await response.status()).toBe(200)

})



test("Add New User" , async ({request})=>{

    const response = await request.post(process.env.BASEURL + '/users/add' ,{
        headers : {
            'Content-Type' : "application/json"
        } , data : {
            "firstName" : "Steeve" , "lastName" : "Joseph" 
        }
    })

    const body = await response.json()

    console.log(body)

    await expect(await response.status()).toBe(201)

})



test("Update  User" , async ({request})=>{

    const response = await request.put(process.env.BASEURL + '/users/30' ,{
        headers : {
            'Content-Type' : "application/json"
        } , data : {
            "firstName" : "Steeve" , "lastName" : "Marker" 
        }
    })

    const body = await response.json()

    console.log(body)

    await expect(await response.status()).toBe(200)

})




test("DELETE  User" , async ({request})=>{

    const response = await request.delete(process.env.BASEURL + '/users/30')

    const body = await response.json()

    console.log(body)

    await expect(await response.status()).toBe(200)   //204
    await console.log("SuccessFully Deleted")
})


 



