

import {test , expect} from "@playwright/test"


test("Read the Data From Web Table" , async ({page})=>{

    //browser Launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Columns Count
    const tableColumns = await page.$$('//table[@id="productTable"]//thead//tr/th')
    console.log(tableColumns.length)

    //Rows Count
    const tableRows = await page.locator('//table[@id="productTable"]//tbody//tr')
    console.log(await tableRows.count())


    //1 Select single product
   const selectProduct =  await tableRows.filter({
        has : page.locator('td')  ,
        hasText : "Tablet"
    })

    await selectProduct.locator('input').check()
    await page.waitForTimeout(3000)


    //2 Select Multiple Products
    async function multiProducts(prodName){

   const selectProduct =  await tableRows.filter({
        has : page.locator('td')  ,
        hasText : prodName
    })

    await selectProduct.locator('input').check()

    }

    await multiProducts("Smartphone")
    await multiProducts("Wireless Earbuds")
    await page.waitForTimeout(3000)



    //3 Print all first page products list

    for(let i=0; i < await tableRows.count(); i++){      //ROWS

    const tds =  await tableRows.nth(i).locator('td')      
    console.log(await tds.allTextContents())
    }



    //4 Print all pages datas

   const pageNumbers =  await page.locator('[id="pagination"]>li>a')

   for(let k=0; k < await pageNumbers.count(); k++){

    if(k > 0){
        await pageNumbers.nth(k).click()
    }

 for(let i=0; i < await tableRows.count(); i++){      //ROWS

    const tds =  await tableRows.nth(i).locator('td')      

    for(let j=0; j < await tds.count(); j++) {    //COLUMNS
       const text =  await tds.nth(j).textContent()
       console.log(text)
    }

    }
   }

})



