/**
 * Before All - It will run all test scripts before
 * Before Each - It will run each test script before individually
 * After Each - It will run each test script after individually
 * After All - It will run all test scrits after
 */

/**
 * FIXTURES : 
 * 
 * BROWSER (UI) - A browser is the actual browser instance like chromium, firefox, webkit
 * CONTEXT (UI) - A context is an isolated browser session like incognito window
 * PAGE (UI) - A page is represents a single browser tab
 * 
 * REQUEST (API) - A request is used for API test
 */





import {test} from "@playwright/test"

let page;

test.beforeAll( async ({browser}) =>{
    const context = await browser.newContext({permissions : []})
    page = await context.newPage()
    console.log("Before All")
})

test.afterAll( async ({}) =>{
    console.log("After All")
})


test.beforeEach( async ({}) =>{
    console.log("Before Each")
})


test.afterEach( async ({}) =>{
    console.log("After Each")
})



test( "Test 1" , async ({}) =>{
    console.log("TEST 1")
})

test( "Test 2" , async ({}) =>{
    console.log("TEST 2")
})






