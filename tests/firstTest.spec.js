
import {test , expect} from "@playwright/test"


test("Handling SauceDemo site" , async function({page}){

    //browser launch
    await page.goto("https://www.saucedemo.com/")

    //title & url
   const pageTitle = await page.title()
   console.log(pageTitle)

   console.log(await page.url())

   //Assertion
   await expect(page).toHaveTitle("Swag Labs")
   await expect(page).toHaveURL("https://www.saucedemo.com/")


   //Locators / Single Web Element
   await page.locator('[ id="user-name" ]').fill('standard_user')
   await page.locator('[name="password"]').fill('secret_sauce')

   await page.locator('[class="submit-button btn_action"]').click()
   await page.waitForTimeout(5000)


   //Multi Locators / Web Elements
  const products =  await page.$$('//div//div//div//div//a//div')

  for (const prod of products) {
    const txt = await prod.textContent()
    console.log(txt)
  }


})











