import { test } from "@playwright/test";
import { AdminLogin } from "../Pages/AdminLogin";
import { AddEmp } from "../Pages/AddEmp";
import * as dotenv from 'dotenv'
dotenv.config()

test.describe('HRM Emp management' , ()=>{
    
    let login : AdminLogin
    let emp : AddEmp

    test.beforeEach(async ({page})=>{
        login = new AdminLogin(page)
        emp = new AddEmp(page)
        await login.LaunchUrl(process.env.Base_Url!)
        await login.HRMLogin(process.env.Base_User! , process.env.Base_Pass!)
    })

    test('test add emp', async ({page})=>{

        await emp.add_emp('sailesh', 'batolu')
        console.log("ghghghj")
    })

    test.afterEach(async ()=>{
        await login.HRmLogout()
    })
})