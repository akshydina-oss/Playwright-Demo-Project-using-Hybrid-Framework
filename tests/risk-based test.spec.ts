import { test, expect } from '../fixtures/baseFixture';

test.describe('Risk Based Test Suite', () => {
  
  // 1. Selecting an item which is IN STOCK
  test.only('Validate In Stock status', async ({ page }) => {
    await page.goto('index.php?route=product/product&product_id=28'); // HTC Touch HD
    const stock = page.locator('.stock');
    await expect(stock).toHaveText('In Stock');
  });

  // 2. Selecting an item which is NOT IN STOCK & capture screenshot
  test('Validate Out of Stock status and capture screenshot', async ({ page }) => {
    await page.goto('index.php?route=product/product&product_id=31'); // Palm Treo
    const stock = page.locator('.stock');
    
    // Validate text
    await expect(stock).toHaveText('Out of Stock');
    
    // Capture manual screenshot
    await page.screenshot({ path: 'screenshots/out-of-stock-palm.png' });
  });

  // 3. Checking out and validating API response
  test('Checkout and Validate API integration', async ({ page, shopPage, validateOrderAPI }) => {
    // Note: This assumes you are logged in via the 'authenticatedPage' fixture logic
    await page.goto('index.php?route=checkout/checkout');
    
    // Extract a mock Order ID (in real life, you'd get this from the UI)
    const mockOrderId = "998877";
    
    // Validate integrated system via API
    await validateOrderAPI(mockOrderId);
  });
});