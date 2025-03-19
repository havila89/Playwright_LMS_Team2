const { expect } = require("@playwright/test");

class CommonPage {
  constructor(page) {
    this.page = page;
    this.logoutBtn = page.getByRole("button", { id: "logout" });
  }

  async visibleLogoutBtn() {
    await expect(this.logoutBtn).toBeVisible();
  }
}
module.exports = { CommonPage };
