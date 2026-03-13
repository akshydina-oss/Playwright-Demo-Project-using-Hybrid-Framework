import { Page, Locator } from '@playwright/test';

export class ShopPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly categoryMenu: Locator;
  readonly stockStatus: Locator;
  readonly addToCartBtn: Locator;
  readonly checkoutBtn: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly iphoneImage: Locator;
  readonly productHeading: Locator;
  //readonly allCategoriesBtn: Locator;
  readonly desktopsLink: Locator;
  readonly searchBtn: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox =  page.locator('input:visible');
    this.categoryMenu = page.getByRole('button', { name: 'Shop by Category' });
    this.stockStatus = page.locator('.stock');
    this.addToCartBtn = page.locator('button[title="Add to Cart"]');
    this.checkoutBtn = page.getByRole('link', { name: 'Checkout' });
    this.searchInput = page.getByRole('textbox', { name: 'Search For Products' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.iphoneImage = page.locator('#mz-product-grid-image-55-212469');
    this.productHeading = page.locator('h1');
    //this.allCategoriesBtn = page.getByRole('button', { name: 'All Categories' });
    this.desktopsLink = page.getByRole('link', { name: 'Desktops', exact: true });
    this.searchBtn = page.getByRole('button', { name: 'Search' });
    this.sortDropdown = page.locator('#input-sort-212464');
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
    await this.iphoneImage.click();

  }

  async navigateToDesktops() {
    // 1. Navigate directly using the full relative path
    // The '/' at the beginning ensures it starts from your Base URL
    await this.page.goto('/index.php?route=product/category&path=20');
    
    // 2. Wait for the dropdown to be "attached" and "visible" 
    // This ensures the page is fully loaded before we try to click anything
    await this.sortDropdown.waitFor({ state: 'visible', timeout: 5000 });
  }

  async sortByPriceHighToLow() {
    // 3. Select the option by the exact Label text
    await this.sortDropdown.selectOption({ label: 'Price (High > Low)' });
  }
}