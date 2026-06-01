
import {test } from "@playwright/test"


test.describe.parallel("Groupin 1" , async ()=>{

test( "Test 1" , async ({}) =>{
    console.log("TEST 1")
})

test( "Test 2" , async ({}) =>{
    console.log("TEST 2")
})

})


test.describe("Groupin 2" , async ()=>{

test( "Test 3" , async ({}) =>{
    console.log("TEST 3")
})

test( "Test 4" , async ({}) =>{
    console.log("TEST 4")
})
})

