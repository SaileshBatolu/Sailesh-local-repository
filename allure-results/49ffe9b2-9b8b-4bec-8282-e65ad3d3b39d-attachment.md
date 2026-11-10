# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multipledatawithjson.spec.ts >> multiple data using json >> Add employee saileshlook batolulook
- Location: tests\multipledatawithjson.spec.ts:24:13

# Error details

```
Error: locator.inputValue: Target page, context or browser has been closed
Call log:
  - waiting for locator('#personal_txtEmployeeId')

```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AddEmp{
  4  | 
  5  | readonly page:Page
  6  | readonly clickpim : Locator
  7  | readonly clickadd : Locator
  8  | readonly firstname : Locator
  9  | readonly lastname : Locator
  10 | readonly empid : Locator
  11 | readonly savebutton : Locator
  12 | readonly displaypersoalid : Locator
  13 | 
  14 | constructor (page:Page)
  15 | {
  16 |     this.page = page
  17 |     this.clickpim =  page.getByRole('link', { name: 'PIM' })
  18 |     this.clickadd =  page.getByRole('button', { name: 'Add' })
  19 |     this.firstname = page.locator('#firstName')
  20 |     this.lastname = page.locator('#lastName')
  21 |     this.empid = page.locator('#employeeId')
  22 |     this.savebutton =  page.getByRole('button', { name: 'Save' })
  23 |     this.displaypersoalid = page.locator('#personal_txtEmployeeId')
  24 | 
  25 | }
  26 | 
  27 | async add_emp (fname : string, lname : string)
  28 | {
  29 |     await this.clickpim.click()
  30 |     await this.clickadd.click()
  31 |     await this.firstname.fill(fname)
  32 |     await this.lastname.fill(lname)
  33 |     const expected = await this.empid.inputValue()
  34 |     await this.savebutton.click()
> 35 |     const actual = await this.displaypersoalid.inputValue()
     |                                                ^ Error: locator.inputValue: Target page, context or browser has been closed
  36 |     expect(actual).toBe(expected)
  37 |     console.log(actual+"  "+    expected)
  38 |     return actual
  39 | }
  40 | 
  41 | }
```