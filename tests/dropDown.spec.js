

import {test , expect} from "@playwright/test"


test.skip("Handling Drop Down" , async ({page})=>{

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('text=Country:').scrollIntoViewIfNeeded({timeout : 2000})

    //1 Visible Text
    await page.locator('[id="country"]').selectOption('India')
    await page.waitForTimeout(2000)

    //2 Label
    await page.locator('[id="country"]').selectOption({label : 'China'})
    await page.waitForTimeout(2000)

    //3 Value
    await page.locator('[id="country"]').selectOption({value: 'australia'})
    await page.waitForTimeout(2000)

    //4 Index
    await page.locator('[id="country"]').selectOption({index : 3})
    await page.waitForTimeout(2000)


    //Assert
    await expect((await page.$$('[id="country"]>option')).length ).toBe(10)
    await expect(await page.locator('[id="country"]>option')).toHaveCount(10)


})


test("Handling Multiple Drop Down" , async ({page})=>{

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('text=Colors:').scrollIntoViewIfNeeded({timeout : 2000})

    //Select DropDown
    await page.locator('[id="colors"]').selectOption(["Red" , "Green" , "Yellow" , "Red" , "Green"])
    await page.waitForTimeout(5000)

    //Un Select
    await page.locator('[id="colors"]').selectOption([])
    await page.waitForTimeout(5000)

    //Select Duplicates
    await page.locator('[id="colors"]').selectOption([
        {label : "Red"} , {label : "Green"} , {value : "yellow"} , {index : 4} , {index : 6}])
    await page.waitForTimeout(5000)

})

















