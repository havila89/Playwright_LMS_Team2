const { expect } = require("@playwright/test");

class BatchPage {
  constructor(page) {
    this.page = page;
    this.batchBtn = page.getByRole("button", { name: "Batch" });
    this.batchPageTitle = page.getByText(" Manage Batch");
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
    this.pgmNameCol = page.locator("//th[normalize-space()='Program Name']");
    this.editDelCol = page.getByRole("gridcell", { name: "Edit / Delete" });
    this.thChkButton = page.locator("//div[@class='p-checkbox-box']");

    //table header locators
    this.batchNameColSort = page.locator(
      "//th[normalize-space()='Batch Name']/p-sorticon/i"
    );
    this.batchDesColSort = page.locator(
      "//th[normalize-space()='Batch Description']/p-sorticon/i"
    );
    this.batchStatusColSort = page.locator(
      "//th[normalize-space()='Batch Status']/p-sorticon/i"
    );
    this.numClassColSort = page.locator(
      " //th[normalize-space()='No Of Classes']/p-sorticon/i"
    );
    this.pgmNameColSort = page.locator(
      "//th[normalize-space()='Program Name']/p-sorticon/i"
    );
    //*****addnewbatch************
    //this.addNewBatchBtn = page.getByRole("menuitem", { name: "Add New Batch" });
    this.addNewBatchBtn = page.locator(
      "//button[normalize-space()='Add New Batch']"
    );
    this.batchDetailsPopup = page.locator("//div[@role='dialog']");
    this.batchDetailsHeading = page.getByText("Batch Details");
    this.pgmNameLabel = page.locator("//label[@for='programName']");
    this.pgmDropdown = page.getByRole("textbox", {
      name: "Select a Program name",
    });
    this.pgmDropdownBtn = page.locator("(//div[@role='button'])[1]");
    this.batchNameLabel = page.getByLabel("Batch Name");
    this.batchNameText1 = page.locator("//input[@id='batchProg']");
    this.batchNameText2 = page.locator("(//input[@id='batchName'])[1]");
    this.descriptionLabel = page.getByLabel("Description ");
    this.descriTextBox = page.locator("//input[@id='batchDescription']");
    this.numOfClassesLabel = page.getByLabel("Number of Classes ");
    this.numofClassesTextbox = page.locator("//input[@id='batchNoOfClasses']");
    this.pgmNameDropdown = page.locator(
      "//ul[@role='listbox']/p-dropdownitem/li"
    );
    this.pgmNameListFirst = page.locator(
      "//ul[@role='listbox']/p-dropdownitem/li[1]"
    );
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
  async pgmNameColVisible() {
    await expect(this.pgmNameColSort).toBeVisible();
  }
  async editDelColVisible() {
    await expect(this.editDelCol).toBeVisible();
  }
  async thChkButtonVisible() {
    await expect(this.thChkButton).toBeVisible();
  }
  //sort buttons in data head visiblity check
  async batchNameColSortVisible() {
    await expect(this.batchNameColSort).toBeVisible();
  }
  async batchDesColSortVisible() {
    await expect(this.batchDesColSort).toBeVisible();
  }
  async batchStatusColSortVisible() {
    await expect(this.batchStatusColSort).toBeVisible();
  }
  async numClassColSortVisible() {
    await expect(this.numClassColSort).toBeVisible();
  }
  async pgmNameColSortVisible() {
    await expect(this.pgmNameColSort).toBeVisible();
  }

  //*****add new batch Popup functions**************

  async addNewBatchBtnVisible() {
    await expect(this.addNewBatchBtn).toBeVisible();
  }

  async addNewBatchBtnClick() {
    await this.clickBatchBtn();
    await this.addNewBatchBtn.click();
  }

  async batchDetailsPopupVisible() {
    await expect(this.batchDetailsPopup).toBeVisible();
  }
  async batchDetailsHeadingVisible() {
    await expect(this.batchDetailsHeading).toBeVisible();
  }
  async pgmNameLabelVisible() {
    await expect(this.pgmNameLabel).toBeVisible();
  }
  async pgmDropdownEnabled() {
    await expect(this.pgmDropdown).toBeEnabled();
  }
  async textAttributeCheck() {
    await expect(this.batchNameText1).toHaveAttribute("type", "text");
    await expect(this.batchNameText2).toHaveAttribute("type", "text");
    await expect(this.descriTextBox).toHaveAttribute("type", "text");
    await expect(this.numofClassesTextbox).toHaveAttribute("type", "text");
  }
  async prefixCheck() {
    await this.pgmDropdownBtn.click();
    const count = await this.pgmNameDropdown.count();
    const pgmNamelist = await this.pgmNameDropdown.all();
    console.log(count);

    // if (count > 0) {
    //   await pgmNamelist.nth(0).click();
    //   console.log(await pgmNamelist.nth(0).textContent());
    // } else {
    //   console.log("No programs present at this time");
    // }
    // for (const listitem of pgmNamelist) {
    //   console.log(await listitem.textContent());
    // }
    // for (i = 0; i < count; i++) {
    //   console.log(await pgmNamelist.nth(i).textContent());
    // }
    const pgmNamelistFirst = await this.pgmNameListFirst.textContext();
    console.log(pgmNamelistFirst);
  }
}
module.exports = { BatchPage };
