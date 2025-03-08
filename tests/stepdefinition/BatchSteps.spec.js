import { test, expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("Admin is on the home page", async ({}) => {
  test({});
});

When("Admin clicks Batch menu from the top navigation bar", async ({}) => {
  // Step: When Admin clicks Batch menu from the top navigation bar
  // From: tests/features/Batch.feature:5:1
});

Then("Admin should see manage batch page", async ({}) => {
  // Step: Then Admin should see manage batch page
  // From: tests/features/Batch.feature:6:1
});
