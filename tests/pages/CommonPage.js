const { expect } = require("@playwright/test");

class CommonPage {
  constructor(page) {
    this.page = page;
    this.logoutBtn = page.getByRole("button", { id: "logout" });
    //search button
    this.searchBtn = page.getByPlaceholder("Search...");
  }

 
  async visibleLogoutBtn() {
    await expect(this.logoutBtn).toBeVisible();
  }

  /*search functionality
  1. get the pages count
  2. in each page click take batch name and batch description column data
  3. compare it with search criteria*/
  async search() { 

  }
}
module.exports = { CommonPage };
