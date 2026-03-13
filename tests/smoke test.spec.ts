import { test, expect } from '../fixtures/baseFixture';

test.describe('Smoke Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // 1. Searching for an item using Search Box
  test('Search for iPhone', async ({ shopPage }) => {
    await test.step('Type "iPhone" into search box and press Enter', async () => {
      await shopPage.searchForItem('iPhone');
    });

    await test.step('Verify that search results are displayed', async () => {
      await expect(shopPage.page.locator('a').filter({ hasText: 'iPhone' }).last()).toBeVisible();
    });
  });

  // 2. Selecting an item from Shop by Category
  test('Select Software from Category', async ({ shopPage }) => {
    await test.step('Open category menu and select "Software"', async () => {
      await shopPage.selectCategory('Software');
    });

    await test.step('Verify that the correct category is displayed', async () => {
      await expect(shopPage.page.locator('h1')).toHaveText('Software');
    });
  });
});