import { test, expect } from '@playwright/test';

test('Homepage loads and title is correct', async ({ page }) => {
  await page.goto('https://zeeshanriaz763.github.io');
  await expect(page).toHaveTitle(/Zeeshan Riaz/i); // Change to actual title
});
