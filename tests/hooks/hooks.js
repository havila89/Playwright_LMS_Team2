const playwright = require("playwright");
const { BeforeAll, Before, After, AfterAll } = require("@cucumber/cucumber");
const { PageManager } = require("../pages/PageManager");
let browser, context, page;

BeforeAll(async function () {
  console.log("Launching the browser...");
  global.browser = await playwright["chromium"].launch({ headless: false });
});

AfterAll(async function () {
  console.log("Closing the browser...");
  await global.browser.close();
});

Before({ timeout: 60 * 1000 }, async function () {
  console.log("Launching the context and page...");
  global.context = await global.browser.newContext();
  this.page = await global.context.newPage();
  this.pm = new PageManager(this.page);
});

After(async function () {
  console.log("Closing context and page...");
  await this.page.close();
  await global.context.close();
});
