import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
await page.getByRole('button', { name: '' }).click();
await page.getByText('createdatas').click();
await page.locator('#batchProg').click();
await page.getByRole('button', { name: '' }).click();
});