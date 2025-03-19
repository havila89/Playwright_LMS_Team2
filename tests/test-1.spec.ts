import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page
    .locator("tbody")
    .getByRole("gridcell")
    .filter({ hasText: /^$/ })
    .first()
    .click();
  await page
    .getByRole("row", { name: " createdataplayscript" })
    .getByRole("button")
    .first()
    .click();
  await page.getByRole("button", { name: "" }).click();
  await page
    .getByRole("row", { name: " createdataplayscript" })
    .getByRole("button")
    .nth(1)
    .click();
  await page.getByRole("button", { name: "No" }).click();

  //each row checkbox
  await page
    .getByRole("row", { name: "createdataplayscript" })
    .getByRole("checkbox")
    .nth(1)
    .click();
  //each row edit button
  await page
    .getByRole("row", { name: "createdataplayscript" })
    .getByRole("button")
    .first()
    .click();
  await page.locator(".action > span").first().click();
  //each row delete
  await page
    .getByRole("row", { name: "createdataplayscript" })
    .getByRole("button")
    .nth(1)
    .click();
  await page.locator(".action > span:nth-child(2)").first().click();

  //table header checkbox
  //div[@class='p-checkbox-box']
  await page
    .getByRole("row", { name: "Batch Name  Batch" })
    .getByRole("checkbox")
    .nth(1)
    .click();
  await page.getByRole("columnheader", { name: "Batch Name " }).click();
  //th[normalize-space()='Batch Name']
  await page.getByRole("columnheader", { name: "Batch Description " }).click();
  await page.getByRole("columnheader", { name: "Batch Status " }).click();
  await page.getByRole("columnheader", { name: "No Of Classes " }).click();
  await page.getByRole("columnheader", { name: "Program Name " }).click();
  await page.getByRole("gridcell", { name: "Edit / Delete" }).click();

  //table header sort boxes

  await page.getByRole('columnheader', { name: 'Batch Name ' }).locator('i').click();
  await page.getByRole('columnheader', { name: 'Batch Description ' }).locator('i').click();
  await page.getByRole('columnheader', { name: 'Batch Status ' }).locator('i').click();
  await page.getByRole('columnheader', { name: 'No Of Classes ' }).locator('i').click();
  await page.getByRole('columnheader', { name: 'Program Name ' }).locator('i').click();
});