

const {test , expect} = require('@playwright/test')


test("File Upload" , async ({page})=>{

    //browser luanch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //scroll  
    await page.locator('text=Upload Files').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    //single file
    await page.locator('[id="singleFileInput"]')
    .setInputFiles('C:/Users/Dell/Desktop/Assessments_Files/API Docs.txt')
    await page.waitForTimeout(5000)

    //multiple file
    await page.locator('[id="multipleFilesInput"]')
    .setInputFiles([ 
        'C:/Users/Dell/Desktop/Assessments_Files/Assessment-py.txt',
        'C:/Users/Dell/Desktop/Assessments_Files/DataDrivenTest.txt'
    ])

    await page.waitForTimeout(5000)
})















