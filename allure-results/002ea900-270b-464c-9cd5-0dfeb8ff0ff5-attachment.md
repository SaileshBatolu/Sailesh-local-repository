# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multipledatawithjson.spec.ts >> multiple data using json >> Add employee sailesh batolu
- Location: tests\multipledatawithjson.spec.ts:24:13

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.inputValue: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#personal_txtEmployeeId')

```

# Page snapshot

```yaml
- generic [active] [ref=f4e1]:
  - generic [ref=f4e2]:
    - generic [ref=f4e3]:
      - link [ref=f4e4] [cursor=pointer]:
        - /url: http://www.orangehrm.com/
        - img "OrangeHRM" [ref=f4e5]
      - link "Welcome Suresh" [ref=f4e6] [cursor=pointer]:
        - /url: "#"
      - link [ref=f4e11] [cursor=pointer]:
        - /url: /symfony/web/index.php/help/help?label=pim_addEmployee
      - button "Subscribe" [ref=f4e16]
      - button "Marketplace" [ref=f4e18]
      - generic:
        - generic:
          - generic "1"
    - list [ref=f4e20]:
      - listitem [ref=f4e21]:
        - link "Admin" [ref=f4e22] [cursor=pointer]:
          - /url: /symfony/web/index.php/admin/viewAdminModule
        - list [ref=f4e24]:
          - listitem [ref=f4e25]:
            - link "User Management" [ref=f4e26] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e27]:
              - listitem [ref=f4e28]:
                - link "Users" [ref=f4e29] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewSystemUsers
          - listitem [ref=f4e30]:
            - link "Job" [ref=f4e31] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e32]:
              - listitem [ref=f4e33]:
                - link "Job Titles" [ref=f4e34] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewJobTitleList
              - listitem [ref=f4e35]:
                - link "Pay Grades" [ref=f4e36] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewPayGrades
              - listitem [ref=f4e37]:
                - link "Employment Status" [ref=f4e38] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/employmentStatus
              - listitem [ref=f4e39]:
                - link "Job Categories" [ref=f4e40] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/jobCategory
              - listitem [ref=f4e41]:
                - link "Work Shifts" [ref=f4e42] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/workShift
          - listitem [ref=f4e43]:
            - link "Organization" [ref=f4e44] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e45]:
              - listitem [ref=f4e46]:
                - link "General Information" [ref=f4e47] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewOrganizationGeneralInformation
              - listitem [ref=f4e48]:
                - link "Locations" [ref=f4e49] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLocations
              - listitem [ref=f4e50]:
                - link "Structure" [ref=f4e51] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewCompanyStructure
          - listitem [ref=f4e52]:
            - link "Qualifications" [ref=f4e53] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e54]:
              - listitem [ref=f4e55]:
                - link "Skills" [ref=f4e56] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewSkills
              - listitem [ref=f4e57]:
                - link "Education" [ref=f4e58] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewEducation
              - listitem [ref=f4e59]:
                - link "Licenses" [ref=f4e60] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLicenses
              - listitem [ref=f4e61]:
                - link "Languages" [ref=f4e62] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewLanguages
              - listitem [ref=f4e63]:
                - link "Memberships" [ref=f4e64] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/membership
          - listitem [ref=f4e65]:
            - link "Nationalities" [ref=f4e66] [cursor=pointer]:
              - /url: /symfony/web/index.php/admin/nationality
          - listitem [ref=f4e67]:
            - link "Corporate Branding" [ref=f4e68] [cursor=pointer]:
              - /url: /symfony/web/index.php/admin/addTheme
          - listitem [ref=f4e69]:
            - link "Configuration" [ref=f4e70] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e71]:
              - listitem [ref=f4e72]:
                - link "Email Configuration" [ref=f4e73] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/listMailConfiguration
              - listitem [ref=f4e74]:
                - link "Email Subscriptions" [ref=f4e75] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewEmailNotification
              - listitem [ref=f4e76]:
                - link "Localization" [ref=f4e77] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/localization
              - listitem [ref=f4e78]:
                - link "Language Packages" [ref=f4e79] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/languagePackage
              - listitem [ref=f4e80]:
                - link "Modules" [ref=f4e81] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewModules
              - listitem [ref=f4e82]:
                - link "Social Media Authentication" [ref=f4e83] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/openIdProvider
              - listitem [ref=f4e84]:
                - link "Register OAuth Client" [ref=f4e85] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/registerOAuthClient
      - listitem [ref=f4e86]:
        - link "PIM" [ref=f4e87] [cursor=pointer]:
          - /url: /symfony/web/index.php/pim/viewPimModule
        - list [ref=f4e89]:
          - listitem [ref=f4e90]:
            - link "Configuration" [ref=f4e91] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e92]:
              - listitem [ref=f4e93]:
                - link "Optional Fields" [ref=f4e94] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/configurePim
              - listitem [ref=f4e95]:
                - link "Custom Fields" [ref=f4e96] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/listCustomFields
              - listitem [ref=f4e97]:
                - link "Data Import" [ref=f4e98] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/pimCsvImport
              - listitem [ref=f4e99]:
                - link "Reporting Methods" [ref=f4e100] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/viewReportingMethods
              - listitem [ref=f4e101]:
                - link "Termination Reasons" [ref=f4e102] [cursor=pointer]:
                  - /url: /symfony/web/index.php/pim/viewTerminationReasons
          - listitem [ref=f4e103]:
            - link "Employee List" [ref=f4e104] [cursor=pointer]:
              - /url: /symfony/web/index.php/pim/viewEmployeeList/reset/1
          - listitem [ref=f4e105]:
            - link "Add Employee" [ref=f4e106] [cursor=pointer]:
              - /url: /symfony/web/index.php/pim/addEmployee
          - listitem [ref=f4e107]:
            - link "Reports" [ref=f4e108] [cursor=pointer]:
              - /url: /symfony/web/index.php/core/viewDefinedPredefinedReports/reportGroup/3/reportType/PIM_DEFINED
      - listitem [ref=f4e109]:
        - link "Leave" [ref=f4e110] [cursor=pointer]:
          - /url: /symfony/web/index.php/leave/viewLeaveModule
        - list [ref=f4e112]:
          - listitem [ref=f4e113]:
            - link "Apply" [ref=f4e114] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/applyLeave
          - listitem [ref=f4e115]:
            - link "My Leave" [ref=f4e116] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/viewMyLeaveList/reset/1
          - listitem [ref=f4e117]:
            - link "Entitlements" [ref=f4e118] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e119]:
              - listitem [ref=f4e120]:
                - link "Add Entitlements" [ref=f4e121] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/addLeaveEntitlement
              - listitem [ref=f4e122]:
                - link "Employee Entitlements" [ref=f4e123] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewLeaveEntitlements/reset/1
              - listitem [ref=f4e124]:
                - link "My Entitlements" [ref=f4e125] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewMyLeaveEntitlements/reset/1
          - listitem [ref=f4e126]:
            - link "Reports" [ref=f4e127] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e128]:
              - listitem [ref=f4e129]:
                - link "Leave Entitlements and Usage Report" [ref=f4e130] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewLeaveBalanceReport
              - listitem [ref=f4e131]:
                - link "My Leave Entitlements and Usage Report" [ref=f4e132] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewMyLeaveBalanceReport
          - listitem [ref=f4e133]:
            - link "Configure" [ref=f4e134] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e135]:
              - listitem [ref=f4e136]:
                - link "Leave Period" [ref=f4e137] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/defineLeavePeriod
              - listitem [ref=f4e138]:
                - link "Leave Types" [ref=f4e139] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/leaveTypeList
              - listitem [ref=f4e140]:
                - link "Work Week" [ref=f4e141] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/defineWorkWeek
              - listitem [ref=f4e142]:
                - link "Holidays" [ref=f4e143] [cursor=pointer]:
                  - /url: /symfony/web/index.php/leave/viewHolidayList
          - listitem [ref=f4e144]:
            - link "Leave List" [ref=f4e145] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/viewLeaveList/reset/1
          - listitem [ref=f4e146]:
            - link "Assign Leave" [ref=f4e147] [cursor=pointer]:
              - /url: /symfony/web/index.php/leave/assignLeave
      - listitem [ref=f4e148]:
        - link "Time" [ref=f4e149] [cursor=pointer]:
          - /url: /symfony/web/index.php/time/viewTimeModule
        - list [ref=f4e151]:
          - listitem [ref=f4e152]:
            - link "Timesheets" [ref=f4e153] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e154]:
              - listitem [ref=f4e155]:
                - link "My Timesheets" [ref=f4e156] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/viewMyTimesheet
              - listitem [ref=f4e157]:
                - link "Employee Timesheets" [ref=f4e158] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/viewEmployeeTimesheet
          - listitem [ref=f4e159]:
            - link "Attendance" [ref=f4e160] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e161]:
              - listitem [ref=f4e162]:
                - link "My Records" [ref=f4e163] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/viewMyAttendanceRecord
              - listitem [ref=f4e164]:
                - link "Punch In/Out" [ref=f4e165] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/punchIn
              - listitem [ref=f4e166]:
                - link "Employee Records" [ref=f4e167] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/viewAttendanceRecord
              - listitem [ref=f4e168]:
                - link "Configuration" [ref=f4e169] [cursor=pointer]:
                  - /url: /symfony/web/index.php/attendance/configure
          - listitem [ref=f4e170]:
            - link "Reports" [ref=f4e171] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e172]:
              - listitem [ref=f4e173]:
                - link "Project Reports" [ref=f4e174] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/displayProjectReportCriteria?reportId=1
              - listitem [ref=f4e175]:
                - link "Employee Reports" [ref=f4e176] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/displayEmployeeReportCriteria?reportId=2
              - listitem [ref=f4e177]:
                - link "Attendance Summary" [ref=f4e178] [cursor=pointer]:
                  - /url: /symfony/web/index.php/time/displayAttendanceSummaryReportCriteria?reportId=4
          - listitem [ref=f4e179]:
            - link "Project Info" [ref=f4e180] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e181]:
              - listitem [ref=f4e182]:
                - link "Customers" [ref=f4e183] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewCustomers
              - listitem [ref=f4e184]:
                - link "Projects" [ref=f4e185] [cursor=pointer]:
                  - /url: /symfony/web/index.php/admin/viewProjects
      - listitem [ref=f4e186]:
        - link "Recruitment" [ref=f4e187] [cursor=pointer]:
          - /url: /symfony/web/index.php/recruitment/viewRecruitmentModule
        - list [ref=f4e189]:
          - listitem [ref=f4e190]:
            - link "Candidates" [ref=f4e191] [cursor=pointer]:
              - /url: /symfony/web/index.php/recruitment/viewCandidates
          - listitem [ref=f4e192]:
            - link "Vacancies" [ref=f4e193] [cursor=pointer]:
              - /url: /symfony/web/index.php/recruitment/viewJobVacancy
      - listitem [ref=f4e194]:
        - link "My Info" [ref=f4e195] [cursor=pointer]:
          - /url: /symfony/web/index.php/pim/viewMyDetails
        - list [ref=f4e197]:
          - listitem
      - listitem [ref=f4e198]:
        - link "Performance" [ref=f4e199] [cursor=pointer]:
          - /url: "#"
        - list [ref=f4e201]:
          - listitem [ref=f4e202]:
            - link "Configure" [ref=f4e203] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e204]:
              - listitem [ref=f4e205]:
                - link "KPIs" [ref=f4e206] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchKpi
              - listitem [ref=f4e207]:
                - link "Trackers" [ref=f4e208] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/addPerformanceTracker
          - listitem [ref=f4e209]:
            - link "Manage Reviews" [ref=f4e210] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e211]:
              - listitem [ref=f4e212]:
                - link "Manage Reviews" [ref=f4e213] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchPerformancReview
              - listitem [ref=f4e214]:
                - link "My Reviews" [ref=f4e215] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/myPerformanceReview
              - listitem [ref=f4e216]:
                - link "Review List" [ref=f4e217] [cursor=pointer]:
                  - /url: /symfony/web/index.php/performance/searchEvaluatePerformancReview
          - listitem [ref=f4e218]:
            - link "My Trackers" [ref=f4e219] [cursor=pointer]:
              - /url: /symfony/web/index.php/performance/viewMyPerformanceTrackerList
          - listitem [ref=f4e220]:
            - link "Employee Trackers" [ref=f4e221] [cursor=pointer]:
              - /url: /symfony/web/index.php/performance/viewEmployeePerformanceTrackerList
      - listitem [ref=f4e222]:
        - link "Dashboard" [ref=f4e223] [cursor=pointer]:
          - /url: /symfony/web/index.php/dashboard
        - list [ref=f4e225]:
          - listitem
      - listitem [ref=f4e226]:
        - link "Directory" [ref=f4e227] [cursor=pointer]:
          - /url: /symfony/web/index.php/directory/viewDirectory/reset/1
        - list [ref=f4e229]:
          - listitem
      - listitem [ref=f4e230]:
        - link "Maintenance" [ref=f4e231] [cursor=pointer]:
          - /url: /symfony/web/index.php/maintenance/purgeEmployee
        - list [ref=f4e233]:
          - listitem [ref=f4e234]:
            - link "Purge Records" [ref=f4e235] [cursor=pointer]:
              - /url: "#"
            - list [ref=f4e236]:
              - listitem [ref=f4e237]:
                - link "Employee Records" [ref=f4e238] [cursor=pointer]:
                  - /url: /symfony/web/index.php/maintenance/purgeEmployee
              - listitem [ref=f4e239]:
                - link "Candidate Records" [ref=f4e240] [cursor=pointer]:
                  - /url: /symfony/web/index.php/maintenance/purgeCandidateData
          - listitem [ref=f4e241]:
            - link "Access Records" [ref=f4e242] [cursor=pointer]:
              - /url: /symfony/web/index.php/maintenance/accessEmployeeData
      - listitem [ref=f4e243]:
        - link "Buzz" [ref=f4e244] [cursor=pointer]:
          - /url: /symfony/web/index.php/buzz/viewBuzz
        - list [ref=f4e246]:
          - listitem
    - generic [ref=f4e248]:
      - heading "Add Employee" [level=1] [ref=f4e250]
      - group [ref=f4e253]:
        - list [ref=f4e254]:
          - listitem [ref=f4e255]:
            - generic [ref=f4e256]: Full Name
            - list [ref=f4e257]:
              - listitem [ref=f4e258]:
                - generic [ref=f4e259]:
                  - emphasis [ref=f4e260]: "*"
                  - text: First Name
                - textbox [ref=f4e261]
              - listitem [ref=f4e262]:
                - generic [ref=f4e263]: Middle Name
                - textbox [ref=f4e264]
              - listitem [ref=f4e265]:
                - generic [ref=f4e266]:
                  - emphasis [ref=f4e267]: "*"
                  - text: Last Name
                - textbox [ref=f4e268]
          - listitem [ref=f4e269]:
            - generic [ref=f4e270]: Employee Id
            - textbox "Employee Id" [ref=f4e271]: "0522"
          - listitem [ref=f4e272]:
            - generic [ref=f4e273]: Photograph
            - button "Photograph" [ref=f4e274]
            - generic [ref=f4e275]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - listitem [ref=f4e276]:
            - generic [ref=f4e277]: Create Login Details
            - checkbox "Create Login Details" [ref=f4e278]
          - listitem [ref=f4e279]:
            - emphasis [ref=f4e280]: "*"
            - text: Required field
        - paragraph [ref=f4e281]:
          - button "Save" [ref=f4e282]
  - generic [ref=f4e283]:
    - text: OrangeHRM 4.10.1 © 2005 - 2026
    - link "OrangeHRM, Inc" [ref=f4e284] [cursor=pointer]:
      - /url: http://www.orangehrm.com
    - text: . All rights reserved.
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
     |                                                ^ Error: locator.inputValue: Test timeout of 30000ms exceeded.
  36 |     expect(actual).toBe(expected)
  37 |     console.log(actual+"  "+    expected)
  38 |     return actual
  39 | }
  40 | 
  41 | }
```