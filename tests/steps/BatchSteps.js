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
  }
);
