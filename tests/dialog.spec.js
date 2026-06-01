

import {test , expect} from '@playwright/test'


test("Simple Alert" , async function({page}){

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="alertBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Event Listener
    page.on('dialog' , async (a)=>{
        await expect(a.type()).toEqual('alert')
        await expect(a.message()).toContain('I am an alert box!')
        await page.waitForTimeout(1500)
        await a.accept()
    })

    //Click
    await page.locator('[id="alertBtn"]').click()
    await page.waitForTimeout(3000)

})




test("Confirm Alert" , async function({page}){

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="confirmBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Event Listener
    page.on('dialog' , async (a)=>{
        await expect(a.type()).toEqual('confirm')
        await expect(a.message()).toContain('Press a button!')
        await page.waitForTimeout(1500)
        // await a.accept()
        await a.dismiss()

    })

    //Click
    await page.click('[id="confirmBtn"]')
    await page.waitForTimeout(3000)

})



test("Prompt Alert" , async function({page}){

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll
    await page.locator('[id="promptBtn"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //Event Listener
    page.once('dialog' , async (a)=>{
        await expect(a.type()).toEqual('prompt')
        await expect(a.message()).toContain('Please enter your name:')
        await expect(a.defaultValue()).toContain('Harry Potter')
        await page.waitForTimeout(1500)
        await a.accept('Raviteja')
        // await a.dismiss()

    })

    //Click
    await page.click('[id="promptBtn"]')
    await page.waitForTimeout(3000)

})






























