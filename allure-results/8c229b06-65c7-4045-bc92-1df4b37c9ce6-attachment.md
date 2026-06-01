# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API.spec.js >> GET Current Authenticated User
- Location: tests\API.spec.js:49:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | 
  2  | 
  3  | import {test, expect, request} from "@playwright/test"
  4  | // import {test} from "../utility/auth"
  5  | 
  6  | 
  7  | 
  8  | const baseURL = 'https://dummyjson.com'
  9  | 
  10 | 
  11 | test.skip('GET ALL USERS DETAILS' , async ({request})=>{
  12 | 
  13 |    const response = await request.get( process.env.BASEURL + "/users" )
  14 | 
  15 |    const body = await response.json()
  16 |    console.log(body)
  17 | 
  18 | })
  19 | 
  20 | 
  21 | 
  22 | let token
  23 | 
  24 | test("POST - Login User" , async ({})=>{
  25 | 
  26 |    const req = await request.newContext()
  27 | 
  28 |    const response = await req.post(process.env.BASEURL + "/user/login" , {
  29 |     headers : {
  30 |         "Content-Type" : "application/json"
  31 |     } , data : {
  32 |          username: process.env.USER_NAME,
  33 |          password: process.env.PASSWORD
  34 |     }
  35 |    })
  36 | 
  37 |    const body = await response.json()
  38 |    console.log(body)
  39 | 
  40 |    token = await body.accessToken
  41 | 
  42 |    console.log(token)
  43 | 
  44 |    await expect(await response.status()).toBe(200)
  45 | })
  46 | 
  47 | 
  48 | 
  49 | test("GET Current Authenticated User" , async ({request})=>{
  50 | 
  51 |     const response = await request.get(process.env.BASEURL + '/user/me' ,{
  52 |         headers : {
  53 |             "Content-Type" : "application/json" , 
  54 |             "Authorization" : `Bearer ${token}`
  55 |         }
  56 |     })
  57 |     
  58 |     const body = await response.json()
  59 | 
  60 |     console.log(body)
  61 | 
> 62 |     await expect(await response.status()).toBe(200)
     |                                           ^ Error: expect(received).toBe(expected) // Object.is equality
  63 | 
  64 | })
  65 | 
  66 | 
  67 | 
  68 | 
  69 | 
  70 | 
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 |  
  77 | 
  78 | 
  79 | 
  80 | 
```