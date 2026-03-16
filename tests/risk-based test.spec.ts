import { test, expect } from '../fixtures/baseFixture';
import { ShopPage } from '../pages/shopPage';

test.describe('Risk Based Test Suite', () => {
 
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  
  // Test case 1. Validate In Stock status
  test('Validate In Stock status', async ({ shopPage, page }) => {
    await test.step('Search for "Phone" and filter by In Stock items', async () => {
    await shopPage.searchForItem('Phone');
    await shopPage.filteringInStockItems();
    await page.locator('#mz-product-grid-image-78-212469').click();
  await expect(page.locator('#entry_216826')).toContainText('In Stock');
    });
  });

  // Test case 2. Validate Out of Stock status
  test('Validate Out of Stock status', async ({ shopPage, page }) => {
    await test.step('Search for "Phone" and filter by In Stock items', async () => {
        await shopPage.searchForItem('Phone');
        await shopPage.filteringOutOfStockItems();
        await expect(page.locator('#entry_216826')).toContainText('Out Of Stock');
    });
    
  });

  
});

