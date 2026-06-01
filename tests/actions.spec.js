
import {test , expect} from "@playwright/test"



test.skip("Handling Radio Buttons" , async function({page}){

    //browser 
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('text=Gender:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Appraoch - 1
    await page.locator('xpath=//input[@id="male"]').click()

    await expect(page.locator('xpath=//input[@id="male"]')).toBeChecked()
    await page.waitForTimeout(3000)


    //Approach - 2
    await page.locator('//label[text()="Female"]').click()

    await expect(await page.locator('//label[text()="Female"]').isChecked() ).toBeTruthy()
    await page.waitForTimeout(3000)


})





test("Handling Check Boxes" , async ({page}) => {

     //browser 
    await page.goto('https://testautomationpractice.blogspot.com/')

    //SCROLL
    await page.locator('text=Days:').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    //Single Check box
    await page.locator('//input[@id="sunday"]').check()

    //Assrt
    await expect(page.locator('//input[@id="sunday"]')).toBeChecked()


    //Multiple CheckBoxes
    const multipleChoice = [
        page.locator('[id="tuesday"]') , page.locator('#thursday') , page.locator('id=saturday')
    ]


    //SELECT MULTIPLE CHECK BOXES
    for (const element of multipleChoice) {
        await element.check()
        await expect(element).toBeChecked()
    }

    await page.waitForTimeout(3000)


    //UN SELECT





    
})
















































































