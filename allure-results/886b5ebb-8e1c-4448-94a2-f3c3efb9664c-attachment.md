# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multipledatawithjson.spec.ts >> multiple data using json >> Add employee sailesh batolu
- Location: tests\multipledatawithjson.spec.ts:24:13

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "http://orangehrm.qedgetech.com/", waiting until "load"

```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#txtUsername')

```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminLogin {
  4  | 
  5  |     readonly page: Page
  6  |     readonly usernameinput : Locator
  7  |     readonly passwordinput : Locator
  8  |     readonly loginButton : Locator
  9  |     readonly welcomemenu : Locator
  10 |     readonly logout : Locator
  11 | 
  12 |     constructor (page:Page){
  13 |         this.page = page
  14 |         this.usernameinput =  page.locator('#txtUsername')
  15 |         this.passwordinput =  page.locator('#txtPassword')
  16 |         this.loginButton = page.getByRole('button', { name: 'LOGIN' })
  17 |         this.welcomemenu = page.getByRole('link', { name: 'Welcome Suresh' })
  18 |         this.logout = page.getByRole('link', { name: 'Logout' })
  19 |     }
  20 |     
  21 |         async LaunchUrl(url : string)
  22 |         {
  23 |             this.page.goto(url)
  24 |         }
  25 |     
  26 | 
  27 |     async HRMLogin(user:string, pass:string)
  28 |     {
> 29 |         await this.usernameinput.fill(user)
     |                                  ^ Error: locator.fill: Target page, context or browser has been closed
  30 |         await this.passwordinput.fill(pass)
  31 |         await this.loginButton.click()
  32 |         await expect(this.page).toHaveURL(/dashboard/)
  33 |     }
  34 | 
  35 |     async HRmLogout()
  36 |     {
  37 |         await this.welcomemenu.click()
  38 |         await this.logout.click()
  39 |     }
  40 | 
  41 | }
```