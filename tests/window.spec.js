

import {test , expect, chromium , firefox, webkit} from "@playwright/test"


test("Handling Multiple Windows" , async ({})=>{

    const browser = await chromium.launch({slowMo : 1500 , channel : "msedge"})     //browser instance
    const context = await browser.newContext({permissions : []})     //incognito window

    const page1 = await context.newPage()    //Represent single tab

    await page1.goto("https://www.demoblaze.com/")

    await page1.click('[id="login2"]')
    await page1.fill('[id="loginusername"]' , "Raviteja18")
    await page1.fill('[id="loginpassword"]' , 'Trend@123')
    await page1.click('[onclick="logIn()"]')

    await page1.locator('[id="logout2"]').waitFor()
    await expect(page1.locator('[id="logout2"]')).toBeVisible()
    await expect.soft(await page1.locator('[id="logout2"]').isVisible() ).toBeTruthy()


    const page2 = await context.newPage()    //Represent single tab

    await page2.goto('https://www.saucedemo.com/')

    await page2.getByPlaceholder('Username').fill('standard_user')
    await page2.getByPlaceholder('Password').fill('secret_sauce')

    await page2.click('[data-test="login-button"]')

    const heading = await page2.getByText('Swag Labs').last()
    await expect(heading).toBeVisible()

})



test("Handling Multiple Tabs" , async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByText('OrangeHRM, Inc').waitFor({state : 'visible'})

    //Approach - 1
    // await page.click("text=OrangeHRM, Inc")
    // const newPage = await context.waitForEvent('page')

    //Appraoch - 2
    const [newPage] = await Promise.all([
        context.waitForEvent('page') , 
        page.click("text=OrangeHRM, Inc")
    ])

    await newPage.click('[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]')

    await newPage.locator('[name="EmailHomePage"]').fill('raviteja@gmail.com')
    await newPage.locator('[name="action_request"]').first().click()

    await newPage.goBack()
    await newPage.reload()
    // await newPage.goForward()

    await page.bringToFront()

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button' , {name : ' Login '}).click()
})




























