import { expect, Locator, Page } from "@playwright/test";

export class AddEmp{

readonly page:Page
readonly clickpim : Locator
readonly clickadd : Locator
readonly firstname : Locator
readonly lastname : Locator
readonly empid : Locator
readonly savebutton : Locator
readonly displaypersoalid : Locator

constructor (page:Page)
{
    this.page = page
    this.clickpim =  page.getByRole('link', { name: 'PIM' })
    this.clickadd =  page.getByRole('button', { name: 'Add' })
    this.firstname = page.locator('#firstName')
    this.lastname = page.locator('#lastName')
    this.empid = page.locator('#employeeId')
    this.savebutton =  page.getByRole('button', { name: 'Save' })
    this.displaypersoalid = page.locator('#personal_txtEmployeeId')

}

async add_emp (fname : string, lname : string)
{
    await this.clickpim.click()
    await this.clickadd.click()
    await this.firstname.fill(fname)
    await this.lastname.fill(lname)
    const expected = await this.empid.inputValue()
    await this.savebutton.click()
    const actual = await this.displaypersoalid.inputValue()
    expect(actual).toBe(expected)
    console.log(actual+"  "+    expected)
    return actual
}

}