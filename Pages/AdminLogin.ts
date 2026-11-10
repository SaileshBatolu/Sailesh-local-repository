import { expect, Locator, Page } from "@playwright/test";

export class AdminLogin {

    readonly page: Page
    readonly usernameinput : Locator
    readonly passwordinput : Locator
    readonly loginButton : Locator
    readonly welcomemenu : Locator
    readonly logout : Locator

    constructor (page:Page){
        this.page = page
        this.usernameinput =  page.locator('#txtUsername')
        this.passwordinput =  page.locator('#txtPassword')
        this.loginButton = page.getByRole('button', { name: 'LOGIN' })
        this.welcomemenu = page.getByRole('link', { name: 'Welcome Suresh' })
        this.logout = page.getByRole('link', { name: 'Logout' })
    }
    
        async LaunchUrl(url : string)
        {
            this.page.goto(url)
        }
    

    async HRMLogin(user:string, pass:string)
    {
        await this.usernameinput.fill(user)
        await this.passwordinput.fill(pass)
        await this.loginButton.click()
        await expect(this.page).toHaveURL(/dashboard/)
    }

    async HRmLogout()
    {
        await this.welcomemenu.click()
        await this.logout.click()
    }

}