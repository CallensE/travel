import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Travel/);
});

test('button should be disabled when item is too short', async ({ page }) => {
  await page.goto('/packing-list');

  // Click the get started link.
  await page.getByLabel('item').fill('a');

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('form button')).toBeDisabled();;
});

test('button should be disabled when item is too long', async ({ page }) => {
  await page.goto('/packing-list');

  // Click the get started link.
  await page.getByLabel('item').fill('this is more than 30 charachters');

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('form button')).toBeDisabled();;
});

test('button should be disabled when item is empty', async ({ page }) => {
  await page.goto('/packing-list');

  // Click the get started link.
  await page.getByLabel('item').fill('');

  // Expects page to have a heading with the name of Installation.
  await expect(page.locator('form button')).toBeDisabled();;
});

