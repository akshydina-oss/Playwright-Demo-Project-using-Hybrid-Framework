import { test, expect } from '../fixtures/baseFixture';

test.describe('Regression Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // 1. Selecting an item from a list (e.g., clicking the 2nd product)
  test('Select 2nd item from list', async ({ shopPage, page }) => {
    await test.step('Search for "iphone" and click the product image', async () => {
      await shopPage.searchAndSelectIphone('iphone');
    });

    await test.step('Verify that the product detail page displays the correct heading', async () => {
      // Using the heading locator you found
      await expect(shopPage.productHeading).toContainText('iPhone');
  
  });

  });

  // 2. sorting the search results by price (high to low)
  test('Sort items by Price (High > Low)', async ({ shopPage, page }) => {
    // This calls the direct navigation we just fixed
    await shopPage.navigateToDesktops();

    // This selects the High > Low option
    await shopPage.sortByPriceHighToLow();

    // Verification
    await expect(page).toHaveURL(/sort=p.price&order=DESC/);
  });

  // 3. Adding an item to the cart
  test('Add item to cart and verify popup', async ({ shopPage, page }) => {
    await shopPage.searchForItem('HTC Touch HD');
    await shopPage.addToCartBtn.first().click();
    await expect(page.locator('.alert-success')).toContainText('Success');
  });
  
});




