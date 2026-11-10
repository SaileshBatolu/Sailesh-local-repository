import {test} from '@playwright/test'
import { AdminLogin } from '../Pages/AdminLogin'
import { AddEmp } from '../Pages/AddEmp'
import * as dotenv from 'dotenv'
dotenv.config()
import jsondata from '../TestData/addemp.json'

test.describe('multiple data using json', ()=>{

let login : AdminLogin
let emp : AddEmp

test.beforeEach( async ({page})=>{

    login = new AdminLogin(page)
    emp = new AddEmp(page)

    await login.LaunchUrl(process.env.Base_Url!)
    await login.HRMLogin(process.env.Base_User!, process.env.Base_Pass!)
})

    for (const data of jsondata) {

        test(`Add employee ${data.firstname} ${data.lastname}`, async ({page})=>{

           await emp.add_emp(data.firstname, data.lastname) 
        })
    }
})
