import{test} from '@playwright/test'
import { AdminLogin } from '../Pages/AdminLogin'
import { AddEmp } from '../Pages/AddEmp'
import * as dotenv from 'dotenv'
dotenv.config()
import {ExcelUtils} from '../Utils/ExcelfileUtils.ts'
import path from 'path'

const filepath = path.join(__dirname,"../TestData/HRMExceledata.xlsx")
const sheetname = "Employee"

let testemployeedata :any
try{
    testemployeedata = ExcelUtils.getexceledata(filepath,sheetname)
}
catch(message){
    console.log(message)
}

test.describe('multiplecheckexcelsheet', ()=>{

let login : AdminLogin
let emp : AddEmp

test.beforeEach(async ({page})=>{

 login = new AdminLogin(page)
 emp = new AddEmp(page)

 await login.LaunchUrl(process.env.Base_Url!)
 await login.HRMLogin(process.env.Base_User!,process.env.Base_Pass!)

})

for (const data of testemployeedata) {
    test (`testcaseonexcell ${data.firstname}`, async ()=>{
        
        console.log(data.Firstname, data.Lastname)  
        await emp.add_emp(data.Firstname, data.Lastname)
    })
}


})