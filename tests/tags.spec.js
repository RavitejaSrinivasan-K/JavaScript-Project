/**
 * UI, API, SMOKE, SANITY, REGRESSION, FEATURE : LOGIN, PRODUCTS
 */


import {test , expect} from "@playwright/test"


test("Test 1" , {tag : "@smoke"} , async ()=>{
    console.log("SMOKE")
})

test("Test 2 @sanity" , async ()=>{
    console.log("SANITY")
})

test("Test 3 @reg" , async ()=>{
    console.log("REGRESSION")
})

test("Test 4 @smoke@sanity" , async ()=>{
    console.log("SMOKE with SANITY")
})

test("Test 5 @sanity@reg" , async ()=>{
    console.log("SANITY with REG")
})

test("Test 6 @smoke@reg" , async ()=>{
    console.log("SMOKE with REG")
})



/**
 * npx playwright test tags.spec.js 
 * npx playwright test tags.spec.js --grep '@smoke' 
 * npx playwright test tags.spec.js --grep '@smoke' --grep-invert '@sanity'
 * npx playwright test tags.spec.js --grep '@smoke' --grep-invert '@sanity|@reg'
 * npx playwright test tags.spec.js --grep '@smoke' --grep-invert '@sanity&@reg'
 */
































