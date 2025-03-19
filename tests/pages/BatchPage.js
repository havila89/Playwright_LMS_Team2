const { expect } = require("@playwright/test");

class BatchPage {
  constructor(page) {
    this.page = page;
    this.batchBtn = page.getByRole("button", { name: "Batch" });
    this.batchPageTitle = page.getByText("Manage Batch");
    this.topDelBtn = page.locator("//div[@class='box'][2]/div/button");
    this.pagination = page.locator(".p-paginator-bottom");
    //each row checkbox
    this.rowChkBox = page.locator("//div[@class='p-checkbox-box']");
    this.rowEditBtn = page.locator(".action > span").first();
    this.rowDelBtn = page.locator(".action > span:nth-child(2)").first();
    //table header locator
    this.batchNameCol = page.locator("//th[normalize-space()='Batch Name']");
    this.batchDesCol = page.locator(
      "//th[normalize-space()='Batch Description']"
    );
    this.batchStatusCol = page.locator(
      "//th[normalize-space()='Batch Status']"
    );
    this.numClassCol = page.getByRole("columnheader", {
      name: "No Of Classes",
    });
    this.editDelCol = page.getByRole("gridcell", { name: "Edit / Delete" });
    this.thChkButton = page
      .locator("p-tableheadercheckbox")
      .getByRole("checkbox", { name: "" })
      .first();
  }
  async visibleBatchBtn() {
    await expect(this.batchBtn).toBeVisible();
  }
  async clickBatchBtn() {
    await this.batchBtn.click();
  }

  async verifyBatchPageTitle() {
    await expect(this.batchPageTitle).toBeVisible();
  }

  async chkTopDelBtnDisabled() {
    await expect(this.topDelBtn).toBeDisabled();
  }

  async paginatorVisible() {
    await expect(this.pagination).toBeVisible();
  }
  async rowChkBoxVisible() {
    await expect(this.rowChkBox).toBeVisible();
  }
  async rowEditBtnVisible() {
    await expect(this.rowEditBtn).toBeVisible();
  }
  async rowDelBtnVisible() {
    await expect(this.rowDelBtn).toBeVisible();
  }
  async batchNameColVisible() {
    await expect(this.batchNameCol).toBeVisible();
  }
  async batchDesColVisible() {
    await expect(this.batchDesCol).toBeVisible();
  }
  async batchStatusColVisible() {
    await expect(this.batchStatusCol).toBeVisible();
  }
  async numClassColVisible() {
    await expect(this.numClassCol).toBeVisible();
  }

  async editDelColVisible() {
    await expect(this.editDelCol).toBeVisible();
  }
  async thChkButtonVisible() {
    await expect(this.thChkButton).toBeVisible();
  }
}
module.exports = { BatchPage };
