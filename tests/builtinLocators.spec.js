
import {test , expect} from "@playwright/test"


test("Handling Built In Locators" , async function({page}){

    //browser launch
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(2000)

    //Alt text
    const orangeImage = await page.getByAltText('company-branding')
    await expect(orangeImage).toBeVisible()

    //PlaceHolder
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill('admin123')

    //Role
    await page.getByRole('button', {name : " Login "}).click()
    await page.waitForTimeout(2000)

    //Label
    await expect(page.getByLabel('Sidepanel')).toBeVisible()

    //Text
   const username = await page.locator('[class="oxd-userdropdown-name"]').textContent()

   await expect(await page.getByText(username)).toBeVisible()

   //Title
   await page.getByTitle('Help').click()

   //Test Id
   //refer to playwright.dev


})








