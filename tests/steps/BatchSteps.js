const { Given, When, Then } = require("@cucumber/cucumber");
const { PageManager } = require("../pages/PageManager");
require("dotenv").config();

let pm, loginPage, batchPage;

//Background
Given("Admin logs into the application", async function () {
  console.log("I am in background");
  this.pm = new PageManager(this.page);
  this.loginPage = this.pm.getLoginPage();
  await this.loginPage.navigateToLoginPage(process.env.baseURL);
  await this.loginPage.enterUsername(process.env.username);
  await this.loginPage.enterPassword(process.env.password);
  await this.loginPage.submitLogin();
  //console.log(process.env);
});

//Scenario1
Given("AdminHavila is in the dashboard", async function () {
  console.log("I am in scenario 1");
  await this.loginPage.verifyLoginSuccess();
});

When(
  "AdminHavila clicks on Batch link in Top navigation bar",
  async function () {
    this.pm = new PageManager(this.page);
    this.batchPage = this.pm.getBatchPage();
    await this.batchPage.clickBatchBtn();
  }
);

Then("AdminHavila can see the ManageBatch Page", async function () {
  await this.batchPage.verifyBatchPageTitle();
});

//Scenario2
Then(
  "AdminHavila should verify ManageBatch Page UI",
  { timeout: 60 * 1000 },
  async function () {
    console.log("I am in scenario 2");
    await this.batchPage.chkTopDelBtnDisabled();
    await this.batchPage.paginatorVisible();
    await this.batchPage.rowChkBoxVisible();
    await this.batchPage.rowEditBtnVisible();
    await this.batchPage.batchDesColVisible();
    await this.batchPage.batchStatusColVisible();
    await this.batchPage.numClassColVisible();
    await this.batchPage.editDelColVisible();
    await this.batchPage.thChkButtonVisible();
    await this.batchPage.batchNameColSortVisible();
    await this.batchPage.batchDesColSortVisible();
    await this.batchPage.batchStatusColSortVisible();
    await this.batchPage.numClassColSortVisible();
    await this.batchPage.pgmNameColSortVisible();
    await this.batchPage.addNewBatchBtnVisible();
  }
);
//scenario3
When("AdminHavila clicks on the Add new Batch button", async function () {
  console.log("I am in scenario 3");
  this.pm = new PageManager(this.page);
  this.batchPage = this.pm.getBatchPage();
  await this.batchPage.addNewBatchBtnClick();
});

Then(
  "AdminHavila should verify Add new Batch popup elements",
  async function () {
    await this.batchPage.batchDetailsPopupVisible();
    await this.batchPage.batchDetailsHeadingVisible();
    await this.batchPage.pgmNameLabelVisible();
    await this.batchPage.pgmDropdownEnabled();
    //await this.batchPage.prefixCheck();
  }
);

// //search scenario
// Given("AdminHavila is in ManageBatch Page", async function () {
//   await this.batchPage.verifyBatchPageTitle();
// });

// When("AdminHavila searches using text", async function () {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });

// Then("AdminHavila should see the filtered batches only", async function () {
//   // Write code here that turns the phrase above into concrete actions
//   return "pending";
// });
