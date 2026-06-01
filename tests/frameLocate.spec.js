
import {test , expect} from "@playwright/test"


test("Handling Frames" , async ({page})=>{

    //browser launch
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Count of Frames
   const framesCount = await page.frames()
   console.log(framesCount.length)

   //1 Frame
    await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    .locator('[name="mytext1"]')
    .fill('JavaScript')

    await page.waitForTimeout(3000)


    //2 FrameLocator
    await page.frameLocator('[src="frame_2.html"]').locator('[type="text"]').fill("Playwright")
    await page.waitForTimeout(3000)


    //3 Nested Frames
    const frame3 =  await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"})

   const childFrames =  await frame3.childFrames()

   await childFrames[0].locator('[class="AB7Lab Id5V1"]').nth(1).click()
   await page.waitForTimeout(3000)


})















