import { expect, test } from '@playwright/test';

test('landing page', async ({ page }) => {
  await page.goto('http://localhost:3080/');
  const pageTitle = await page.textContent('#landing-title');
  expect(pageTitle.length).toBeGreaterThan(0);
});
