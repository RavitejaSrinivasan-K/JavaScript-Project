

import {test , expect} from "@playwright/test"


test("Handling Radio Button" , async function ({page}){

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('text=Gender:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)


    //Appraoch - 1
    await page.locator('xpath=//input [@id="male" ]').click()
    await page.waitForTimeout(2000)

    //Assert
    await expect(page.locator('xpath=//input [@id="male" ]')).toBeChecked()


    //Approach - 2
    await page.locator('//label[ text() = "Female"]').click()
    await page.waitForTimeout(2000)

    //Assert 
    await expect(await page.locator('//label[ text() = "Female"]').isChecked() ).toBeTruthy()

})



test.only("Handling Check Boxes" , async ({page}) =>{

    //browser
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Scroll
    await page.locator('text=Days:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)


    //Single Check Box
    await page.locator('//input[@id="sunday"]').check()
    await page.waitForTimeout(2000)

    //Assert
    await expect(await page.locator('//input[@id="sunday"]').isChecked()).toBeTruthy()


    //Multiple Check Box
    const multiCheck = [
        page.locator('[id="tuesday"]') , page.locator('#thursday') , 
        page.locator('id=saturday')
    ]


    //Select check boxes
    for (const element of multiCheck) {
        await element.check()
        await expect(element).toBeChecked()
        await page.waitForTimeout(1000)
    }


    //Un select check boxes
     for (const element of multiCheck) {
        await element.uncheck()
        await expect(element).not.toBeChecked()
        await page.waitForTimeout(1000)
    }



})







