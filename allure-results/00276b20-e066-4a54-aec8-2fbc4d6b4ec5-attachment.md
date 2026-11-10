# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HRMsingledata.spec.ts >> HRM Emp management >> test for logout
- Location: tests\HRMsingledata.spec.ts:25:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Logout' })

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - generic [ref=f1e2]:
    - generic [ref=f1e3]:
      - link [ref=f1e4] [cursor=pointer]:
        - /url: http://www.orangehrm.com/
        - img "OrangeHRM" [ref=f1e5]
      - link "Welcome Suresh" [active] [ref=f1e6] [cursor=pointer]:
        - /url: "#"
      - link [ref=f1e11] [cursor=pointer]:
        - /url: /symfony/web/index.php/help/help?label=dashboard_index
      - button "Subscribe" [ref=f1e16]
      - button "Marketplace" [ref=f1e18]
      - generic:
        - generic:
          - generic "1"
    - list [ref=f1e20]:
      - listitem [ref=f1e21]:
        - link "Admin" [ref=f1e22] [cursor=pointer]:
          - /url: /symfony/web/index.php/admin/viewAdminModule
        - list [ref=f1e24]:
          - listitem [ref=f1e25]:
            - link "User Management" [ref=f1e26] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e27]:
              - listitem [ref=f1e28]:
                - link "Users" [ref=f1e29] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewSystemUsers
          - listitem [ref=f1e30]:
            - link "Job" [ref=f1e31] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e32]:
              - listitem [ref=f1e33]:
                - link "Job Titles" [ref=f1e34] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewJobTitleList
              - listitem [ref=f1e35]:
                - link "Pay Grades" [ref=f1e36] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewPayGrades
              - listitem [ref=f1e37]:
                - link "Employment Status" [ref=f1e38] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/employmentStatus
              - listitem [ref=f1e39]:
                - link "Job Categories" [ref=f1e40] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/jobCategory
              - listitem [ref=f1e41]:
                - link "Work Shifts" [ref=f1e42] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/workShift
          - listitem [ref=f1e43]:
            - link "Organization" [ref=f1e44] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e45]:
              - listitem [ref=f1e46]:
                - link "General Information" [ref=f1e47] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewOrganizationGeneralInformation
              - listitem [ref=f1e48]:
                - link "Locations" [ref=f1e49] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLocations
              - listitem [ref=f1e50]:
                - link "Structure" [ref=f1e51] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewCompanyStructure
          - listitem [ref=f1e52]:
            - link "Qualifications" [ref=f1e53] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e54]:
              - listitem [ref=f1e55]:
                - link "Skills" [ref=f1e56] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewSkills
              - listitem [ref=f1e57]:
                - link "Education" [ref=f1e58] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewEducation
              - listitem [ref=f1e59]:
                - link "Licenses" [ref=f1e60] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLicenses
              - listitem [ref=f1e61]:
                - link "Languages" [ref=f1e62] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLanguages
              - listitem [ref=f1e63]:
                - link "Memberships" [ref=f1e64] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/membership
          - listitem [ref=f1e65]:
            - link "Nationalities" [ref=f1e66] [cursor=pointer]:
              - /url: /symfony/web/index.php/admin/nationality
          - listitem [ref=f1e67]:
            - link "Corporate Branding" [ref=f1e68] [cursor=pointer]:
              - /url: /symfony/web/index.php/admin/addTheme
          - listitem [ref=f1e69]:
            - link "Configuration" [ref=f1e70] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e71]:
              - listitem [ref=f1e72]:
                - link "Email Configuration" [ref=f1e73] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/listMailConfiguration
              - listitem [ref=f1e74]:
                - link "Email Subscriptions" [ref=f1e75] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewEmailNotification
              - listitem [ref=f1e76]:
                - link "Localization" [ref=f1e77] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/localization
              - listitem [ref=f1e78]:
                - link "Language Packages" [ref=f1e79] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/languagePackage
              - listitem [ref=f1e80]:
                - link "Modules" [ref=f1e81] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewModules
              - listitem [ref=f1e82]:
                - link "Social Media Authentication" [ref=f1e83] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/openIdProvider
              - listitem [ref=f1e84]:
                - link "Register OAuth Client" [ref=f1e85] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/registerOAuthClient
      - listitem [ref=f1e86]:
        - link "PIM" [ref=f1e87] [cursor=pointer]:
          - /url: /symfony/web/index.php/pim/viewPimModule
        - list [ref=f1e89]:
          - listitem [ref=f1e90]:
            - link "Configuration" [ref=f1e91] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e92]:
              - listitem [ref=f1e93]:
                - link "Optional Fields" [ref=f1e94] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/configurePim
              - listitem [ref=f1e95]:
                - link "Custom Fields" [ref=f1e96] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/listCustomFields
              - listitem [ref=f1e97]:
                - link "Data Import" [ref=f1e98] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/pimCsvImport
              - listitem [ref=f1e99]:
                - link "Reporting Methods" [ref=f1e100] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/viewReportingMethods
              - listitem [ref=f1e101]:
                - link "Termination Reasons" [ref=f1e102] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/viewTerminationReasons
          - listitem [ref=f1e103]:
            - link "Employee List" [ref=f1e104] [cursor=pointer]:
              - /url: /symfony/web/index.php/pim/viewEmployeeList/reset/1
          - listitem [ref=f1e105]:
            - link "Add Employee" [ref=f1e106] [cursor=pointer]:
              - /url: /symfony/web/index.php/pim/addEmployee
          - listitem [ref=f1e107]:
            - link "Reports" [ref=f1e108] [cursor=pointer]:
              - /url: /symfony/web/index.php/core/viewDefinedPredefinedReports/reportGroup/3/reportType/PIM_DEFINED
      - listitem [ref=f1e109]:
        - link "Leave" [ref=f1e110] [cursor=pointer]:
          - /url: /symfony/web/index.php/leave/viewLeaveModule
        - list [ref=f1e112]:
          - listitem [ref=f1e113]:
            - link "Apply" [ref=f1e114] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/applyLeave
          - listitem [ref=f1e115]:
            - link "My Leave" [ref=f1e116] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/viewMyLeaveList/reset/1
          - listitem [ref=f1e117]:
            - link "Entitlements" [ref=f1e118] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e119]:
              - listitem [ref=f1e120]:
                - link "Add Entitlements" [ref=f1e121] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/addLeaveEntitlement
              - listitem [ref=f1e122]:
                - link "Employee Entitlements" [ref=f1e123] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewLeaveEntitlements/reset/1
              - listitem [ref=f1e124]:
                - link "My Entitlements" [ref=f1e125] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewMyLeaveEntitlements/reset/1
          - listitem [ref=f1e126]:
            - link "Reports" [ref=f1e127] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e128]:
              - listitem [ref=f1e129]:
                - link "Leave Entitlements and Usage Report" [ref=f1e130] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewLeaveBalanceReport
              - listitem [ref=f1e131]:
                - link "My Leave Entitlements and Usage Report" [ref=f1e132] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewMyLeaveBalanceReport
          - listitem [ref=f1e133]:
            - link "Configure" [ref=f1e134] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e135]:
              - listitem [ref=f1e136]:
                - link "Leave Period" [ref=f1e137] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/defineLeavePeriod
              - listitem [ref=f1e138]:
                - link "Leave Types" [ref=f1e139] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/leaveTypeList
              - listitem [ref=f1e140]:
                - link "Work Week" [ref=f1e141] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/defineWorkWeek
              - listitem [ref=f1e142]:
                - link "Holidays" [ref=f1e143] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewHolidayList
          - listitem [ref=f1e144]:
            - link "Leave List" [ref=f1e145] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/viewLeaveList/reset/1
          - listitem [ref=f1e146]:
            - link "Assign Leave" [ref=f1e147] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/assignLeave
      - listitem [ref=f1e148]:
        - link "Time" [ref=f1e149] [cursor=pointer]:
          - /url: /symfony/web/index.php/time/viewTimeModule
        - list [ref=f1e151]:
          - listitem [ref=f1e152]:
            - link "Timesheets" [ref=f1e153] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e154]:
              - listitem [ref=f1e155]:
                - link "My Timesheets" [ref=f1e156] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/viewMyTimesheet
              - listitem [ref=f1e157]:
                - link "Employee Timesheets" [ref=f1e158] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/viewEmployeeTimesheet
          - listitem [ref=f1e159]:
            - link "Attendance" [ref=f1e160] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e161]:
              - listitem [ref=f1e162]:
                - link "My Records" [ref=f1e163] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/viewMyAttendanceRecord
              - listitem [ref=f1e164]:
                - link "Punch In/Out" [ref=f1e165] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/punchIn
              - listitem [ref=f1e166]:
                - link "Employee Records" [ref=f1e167] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/viewAttendanceRecord
              - listitem [ref=f1e168]:
                - link "Configuration" [ref=f1e169] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/configure
          - listitem [ref=f1e170]:
            - link "Reports" [ref=f1e171] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e172]:
              - listitem [ref=f1e173]:
                - link "Project Reports" [ref=f1e174] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/displayProjectReportCriteria?reportId=1
              - listitem [ref=f1e175]:
                - link "Employee Reports" [ref=f1e176] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/displayEmployeeReportCriteria?reportId=2
              - listitem [ref=f1e177]:
                - link "Attendance Summary" [ref=f1e178] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/displayAttendanceSummaryReportCriteria?reportId=4
          - listitem [ref=f1e179]:
            - link "Project Info" [ref=f1e180] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e181]:
              - listitem [ref=f1e182]:
                - link "Customers" [ref=f1e183] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewCustomers
              - listitem [ref=f1e184]:
                - link "Projects" [ref=f1e185] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewProjects
      - listitem [ref=f1e186]:
        - link "Recruitment" [ref=f1e187] [cursor=pointer]:
          - /url: /symfony/web/index.php/recruitment/viewRecruitmentModule
        - list [ref=f1e189]:
          - listitem [ref=f1e190]:
            - link "Candidates" [ref=f1e191] [cursor=pointer]:
              - /url: /symfony/web/index.php/recruitment/viewCandidates
          - listitem [ref=f1e192]:
            - link "Vacancies" [ref=f1e193] [cursor=pointer]:
              - /url: /symfony/web/index.php/recruitment/viewJobVacancy
      - listitem [ref=f1e194]:
        - link "My Info" [ref=f1e195] [cursor=pointer]:
          - /url: /symfony/web/index.php/pim/viewMyDetails
        - list [ref=f1e197]:
          - listitem
      - listitem [ref=f1e198]:
        - link "Performance" [ref=f1e199] [cursor=pointer]:
          - /url: "#"
        - list [ref=f1e201]:
          - listitem [ref=f1e202]:
            - link "Configure" [ref=f1e203] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e204]:
              - listitem [ref=f1e205]:
                - link "KPIs" [ref=f1e206] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchKpi
              - listitem [ref=f1e207]:
                - link "Trackers" [ref=f1e208] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/addPerformanceTracker
          - listitem [ref=f1e209]:
            - link "Manage Reviews" [ref=f1e210] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e211]:
              - listitem [ref=f1e212]:
                - link "Manage Reviews" [ref=f1e213] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchPerformancReview
              - listitem [ref=f1e214]:
                - link "My Reviews" [ref=f1e215] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/myPerformanceReview
              - listitem [ref=f1e216]:
                - link "Review List" [ref=f1e217] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchEvaluatePerformancReview
          - listitem [ref=f1e218]:
            - link "My Trackers" [ref=f1e219] [cursor=pointer]:
              - /url: /symfony/web/index.php/performance/viewMyPerformanceTrackerList
          - listitem [ref=f1e220]:
            - link "Employee Trackers" [ref=f1e221] [cursor=pointer]:
              - /url: /symfony/web/index.php/performance/viewEmployeePerformanceTrackerList
      - listitem [ref=f1e222]:
        - link "Dashboard" [ref=f1e223] [cursor=pointer]:
          - /url: /symfony/web/index.php/dashboard
        - list [ref=f1e225]:
          - listitem
      - listitem [ref=f1e226]:
        - link "Directory" [ref=f1e227] [cursor=pointer]:
          - /url: /symfony/web/index.php/directory/viewDirectory/reset/1
        - list [ref=f1e229]:
          - listitem
      - listitem [ref=f1e230]:
        - link "Maintenance" [ref=f1e231] [cursor=pointer]:
          - /url: /symfony/web/index.php/maintenance/purgeEmployee
        - list [ref=f1e233]:
          - listitem [ref=f1e234]:
            - link "Purge Records" [ref=f1e235] [cursor=pointer]:
              - /url: "#"
            - list [ref=f1e236]:
              - listitem [ref=f1e237]:
                - link "Employee Records" [ref=f1e238] [cursor=pointer]:
                  - /url: /symfony/web/index.php/maintenance/purgeEmployee
              - listitem [ref=f1e239]:
                - link "Candidate Records" [ref=f1e240] [cursor=pointer]:
                  - /url: /symfony/web/index.php/maintenance/purgeCandidateData
          - listitem [ref=f1e241]:
            - link "Access Records" [ref=f1e242] [cursor=pointer]:
              - /url: /symfony/web/index.php/maintenance/accessEmployeeData
      - listitem [ref=f1e243]:
        - link "Buzz" [ref=f1e244] [cursor=pointer]:
          - /url: /symfony/web/index.php/buzz/viewBuzz
        - list [ref=f1e246]:
          - listitem
    - generic [ref=f1e248]:
      - heading "Dashboard" [level=1] [ref=f1e250]
      - generic [ref=f1e251]:
        - group "Quick Launch" [ref=f1e256]:
          - table [ref=f1e260]:
            - rowgroup [ref=f1e261]:
              - row [ref=f1e262]:
                - cell [ref=f1e263]:
                  - link "Assign Leave" [ref=f1e265] [cursor=pointer]:
                    - /url: /symfony/web/index.php/leave/assignLeave
                - cell [ref=f1e268]:
                  - link "Leave List" [ref=f1e270] [cursor=pointer]:
                    - /url: /symfony/web/index.php/leave/viewLeaveList
                - cell [ref=f1e273]:
                  - link "Timesheets" [ref=f1e275] [cursor=pointer]:
                    - /url: /symfony/web/index.php/time/viewEmployeeTimesheet
                - cell [ref=f1e278]:
                  - link "Apply Leave" [ref=f1e280] [cursor=pointer]:
                    - /url: /symfony/web/index.php/leave/applyLeave
                - cell [ref=f1e283]:
                  - link "My Leave" [ref=f1e285] [cursor=pointer]:
                    - /url: /symfony/web/index.php/leave/viewMyLeaveList
                - cell [ref=f1e288]:
                  - link "My Timesheet" [ref=f1e290] [cursor=pointer]:
                    - /url: /symfony/web/index.php/time/viewMyTimesheet
        - generic [ref=f1e295]:
          - group "Employee Distribution by Subunit" [ref=f1e297]:
            - generic [ref=f1e299]: 100%
          - group "Legend" [ref=f1e306]:
            - table [ref=f1e309]:
              - rowgroup [ref=f1e310]:
                - row [ref=f1e311]:
                  - cell [ref=f1e312]
                  - cell "Not assigned to Subunits" [ref=f1e315]
          - group "Pending Leave Requests" [ref=f1e317]:
            - generic [ref=f1e320]:
              - table [ref=f1e322]:
                - rowgroup [ref=f1e323]:
                  - row [ref=f1e324]:
                    - cell [ref=f1e325]:
                      - link "01. Suresh Babu 2026-08-27" [ref=f1e326] [cursor=pointer]:
                        - /url: /symfony/web/index.php/leave/viewLeaveRequest/id/21
                  - row [ref=f1e327]:
                    - cell [ref=f1e328]:
                      - link "02. Suresh Babu 2026-08-28" [ref=f1e329] [cursor=pointer]:
                        - /url: /symfony/web/index.php/leave/viewLeaveRequest/id/23
                  - row [ref=f1e330]:
                    - cell [ref=f1e331]:
                      - link "03. Suresh Babu 2026-09-17" [ref=f1e332] [cursor=pointer]:
                        - /url: /symfony/web/index.php/leave/viewLeaveRequest/id/24
              - table [ref=f1e334]:
                - rowgroup [ref=f1e335]:
                  - row [ref=f1e336]:
                    - cell "3 month(s)" [ref=f1e337] [cursor=pointer]
                    - 'cell "Total : 3 / 3" [ref=f1e338]'
  - generic [ref=f1e339]:
    - text: OrangeHRM 4.10.1 © 2005 - 2026
    - link "OrangeHRM, Inc" [ref=f1e340] [cursor=pointer]:
      - /url: http://www.orangehrm.com
    - text: . All rights reserved.
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
  29 |         await this.usernameinput.fill(user)
  30 |         await this.passwordinput.fill(pass)
  31 |         await this.loginButton.click()
  32 |         await expect(this.page).toHaveURL(/dashboard/)
  33 |     }
  34 | 
  35 |     async HRmLogout()
  36 |     {
  37 |         await this.welcomemenu.click()
> 38 |         await this.logout.click()
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  39 |     }
  40 | 
  41 | }
```