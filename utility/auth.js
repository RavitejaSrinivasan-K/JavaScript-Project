
import {test as base} from "@playwright/test"


export const test = base.extend({
    token : async ({ request } , use ) =>{
    const response =  await request.post(process.env.BASEURL + "/user/login" , {
            headers : {
                "Content-Type" : "apllication/json"
            } , 
            data :{
                 username: process.env.USER_NAME,
                 password: process.env.PASSWORD
            }
        })

        const body = await response.json()

        await use(body.accessToken)

    }
})












