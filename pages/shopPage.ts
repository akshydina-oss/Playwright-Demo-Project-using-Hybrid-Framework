import { Page, Locator, expect } from '@playwright/test';

export class ShopPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly categoryMenu: Locator;
  readonly stockStatus: Locator;
  readonly checkoutBtn: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly iphoneImage: Locator;
  readonly productHeading: Locator;
  readonly desktopsLink: Locator;
  readonly searchBtn: Locator;
  readonly sortDropdown: Locator;
  readonly successAlert: Locator;
  readonly inStockFilter: Locator;
  readonly InstockProduct: Locator;
  readonly PhoneSearchList: Locator;
  readonly FirstPhoneInSearchList: Locator;
  readonly outOfStockFilter: Locator;
  readonly OutOfStockProduct: Locator;

  constructor(page: Page) { 
    this.page = page;
    this.searchBox =  page.locator('input:visible');
    this.categoryMenu = page.getByRole('button', { name: 'Shop by Category' });
    this.stockStatus = page.locator('.stock');
    this.checkoutBtn = page.getByRole('link', { name: 'Checkout' });
    this.searchInput = page.getByRole('textbox', { name: 'Search For Products' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.iphoneImage = page.locator('#mz-product-grid-image-55-212469');
    this.productHeading = page.locator('h1');
    this.desktopsLink = page.getByRole('link', { name: 'Desktops', exact: true });
    this.searchBtn = page.getByRole('button', { name: 'Search' });
    this.sortDropdown = page.locator('#input-sort-212464');
    this.successAlert = page.locator('.alert-success');
    this.inStockFilter = page.locator('#mz-filter-panel-0-4').getByText('In stock');
    this.InstockProduct = page.locator('#mz-product-grid-image-50-212469');
    this.PhoneSearchList = page.locator('.product-layout.product-grid');
    this.FirstPhoneInSearchList = page.locator(".product-layout.product-grid").first();
    this.outOfStockFilter = page.locator('#mz-filter-panel-0-4').getByText('Out of stock');
    this.OutOfStockProduct = page.locator('#mz-product-grid-image-40-212469');
    

  }

  async searchForItem(item: string) {
    await this.searchBox.fill(item);
    await this.searchBox.press('Enter');
  }

  async selectCategory(category: string) {
    await this.categoryMenu.click();
    await this.page.getByRole('link', { name: category, exact: true }).click();
  }

  async searchAndSelectIphone(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
    await this.FirstPhoneInSearchList.click();

  }



  async sortByPriceHighToLow() {
    // 3. Select the option by the exact Label text
    await this.sortDropdown.selectOption({ label: 'Price (High > Low)' });
  }

  async getSuccessMessage() {
  // Wait for it to be visible so the test doesn't move too fast
  await this.successAlert.waitFor({ state: 'visible', timeout: 5000 });
  return await this.successAlert.textContent();
}

async filteringInStockItems() {

  await this.inStockFilter.click();
 // await expect(this.iphoneImage).toBeVisible();
  //await this.iphoneImage.click();

}

async filteringOutOfStockItems() {

  await this.outOfStockFilter.click();
  
  await this.OutOfStockProduct.click();

  }
}