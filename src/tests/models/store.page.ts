import { Locator, Page } from '@playwright/test';

export class StorePage {
  constructor(private readonly page: Page) {}
  async goto() {
    await this.page.goto('/');
  }

  async getProducts() {
    const products = await this.page.locator('[data-item="product"]');
    return products;
  }

  async getProduct(id: string) {
    const product = await this.page.locator(`[data-product="${id}"]`).first();
    return product;
  }

  async addToCartProduct(product: Locator) {
    return await product.locator('[data-item="add-to-cart"]').click();
  }
  

  async getCartButton() {
    const cartButton = await this.page.locator('[data-item="cart-button"]').first();
    return cartButton;
  }

  async getCartBadge() {
    const cartBadge = await this.page.locator('[data-item="cart-badge"]').first();
    return cartBadge;
  }

  async getCartItemsQuantity() {
    const cartItemsQuantity = await this.page.locator('[data-item="cart-items-quantity"]').first();
    return cartItemsQuantity;
  }

  async getCartProduct(id: string) {
    const cartProduct = await this.page.locator(`[data-cart-item="${id}"]`).first();
    return cartProduct;
  }

  async getCartProductQuantity(id: string) {
    const cartProductQuantity = await this.page.locator(`[data-cart-item-quantity="${id}"]`).first();
    return cartProductQuantity;
  }

  async increaseQuantityToCartProduct(id: string) {
    const increaseButton = await this.page.locator(`[data-button-increase="${id}"]`).first();
    return await increaseButton.click();
  }
  
  async decreaseQuantityToCartProduct(id: string) {
    const decreaseButton = await this.page.locator(`[data-button-decrease="${id}"]`).first();
    return await decreaseButton.click();
  }

  async finishPurchase() {
    const purchaseButton = await this.page.locator('[data-item="purchase-button"]').first();
    return await purchaseButton.click();
  }

  async clearCart() {
    const clearCartButton = await this.page.locator('[data-item="clear-cart-button"]').first();
    return await clearCartButton.click();
  }

  async getPurchaseButton() {
    const purchaseButton = await this.page.locator('[data-item="purchase-button"]').first();
    return purchaseButton;
  }

  async getClearCartButton() {
    const clearCartButton = await this.page.locator('[data-item="clear-cart-button"]').first();
    return clearCartButton;
  }

}