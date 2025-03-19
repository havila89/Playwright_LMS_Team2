const { BatchPage } = require("./BatchPage");
const { CommonPage } = require("./CommonPage");
const { LoginPage } = require("./LoginPage");

class PageManager {
  constructor(page) {
    this.page = page;
    this.batchPage = new BatchPage(this.page);
    this.commonPage = new CommonPage(this.page);
    this.loginPage = new LoginPage(this.page);
  }

  getBatchPage() {
    return this.batchPage;
  }

  getCommonPage() {
    return this.commonPage;
  }
  getLoginPage() {
    return this.loginPage;
  }
}
module.exports = { PageManager };
