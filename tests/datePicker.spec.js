

import {test , expect} from "@playwright/test"


test("Handling Date Picker"  , async ({page})=>{

    //browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')


    //Scroll
    await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()

    await page.click('[id="datepicker"]')
    await page.locator('[class="ui-datepicker-title"]').waitFor({state : 'visible'})

    //Targets
    let date = "15"
    let month = "August"
    let year = "2028"

    //Current 
    while(true){

      const currentMonth =  await page.locator('[class="ui-datepicker-month"]').textContent()
      const currentYear  = await page.locator('[class="ui-datepicker-year"]').innerText()

      if(currentMonth === month && currentYear === year){
        break
      }

      await page.click('//span[text()="Next"]')
    //   await page.click('//span[text()="Prev"]')

    }

    await page.waitForTimeout(3000)

    //Dates
    await page.click(`//a[@class="ui-state-default" and @data-date="${date}"]`)

    await page.waitForTimeout(5000)

})













