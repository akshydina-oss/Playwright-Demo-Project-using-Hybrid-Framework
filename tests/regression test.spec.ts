import { test, expect } from '../fixtures/baseFixture';

test.describe('Regression Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Test Case 1. Selecting an item from a list (e.g., clicking the 2nd product)
  test('Select 2nd item from list', async ({ shopPage, page }) => {
    await test.step('Search for "iphone" and click the product image', async () => {
      await shopPage.searchAndSelectIphone('iphone');
    });

    await test.step('Verify that the product detail page displays the correct heading', async () => {
      // Using the heading locator you found
      await expect(shopPage.productHeading).toContainText('iPhone');
    });
  });

  // Test Case 2. Sorting the search results by price (high to low)
  test('Sort items by Price (High > Low)', async ({ shopPage, page }) => {
    // This calls the direct navigation we just fixed
    await shopPage.searchForItem('Canon');

    // This selects the High > Low option
    await shopPage.sortByPriceHighToLow();

    // Verification
    await expect(page).toHaveURL(/.*sort=p.price&order=DESC./);
  });
});

//Test Case 3. Adding an item to the cart and verifying the success message
test('Add item to cart and verify success message', async ({ shopPage, page }) => {
  await test.step('Search for "HTC Touch HD" and add to cart', async () => {
    await shopPage.searchForItem('Apple');
  await page.locator('#mz-filter-panel-0-4').getByText('In stock').click();
  await page.locator('#mz-product-grid-image-50-212469').click();
  await page.locator('#input-option234-216836').selectOption('52');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByText('Success: You have added Apple')).toBeVisible();
    
  });

});

  

