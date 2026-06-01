
import {test , expect} from "@playwright/test"


test.skip("Normal Page" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //Custome
    await page.waitForTimeout(3000)

    //Screenshot
    await page.screenshot({path : "images/" + "NormalPage.png"})
})


test.skip("Full Page" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //Custome
    await page.waitForTimeout(3000)

    //Screenshot
    await page.screenshot({path : "images/" + "FullPage.jpg" , fullPage : true})
})


test("Locator Screenshot" , async ({page})=>{

    //browser
    await page.goto('https://www.amazon.in/')

    //Custome
    await page.waitForTimeout(3000)

    //Screenshot
    await page.locator('[id="nav-logo-sprites"]')
    .screenshot({path : "images/" + "Locator.jpeg" })
})



