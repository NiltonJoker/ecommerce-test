import { expect, test } from "../../fixtures/store.fixture";

test("Compra un producto", async ({ storePage, page }) => {
  const products = await storePage.getProducts();

  const product = products.nth(0);

  await storePage.addToCartProduct(product);

  const toast = await page.locator('text="🚀 Producto añadido al carrito"');
  await expect(toast).toBeVisible();

  const cartButton = await storePage.getCartButton();
  await expect(cartButton).toBeVisible();

  const cartBadge = await storePage.getCartBadge();
  await expect(cartBadge).toHaveText("1");

  await cartButton.click();

  const cartItemsQuantity = await storePage.getCartItemsQuantity();
  await expect(cartItemsQuantity).toHaveText("1 productos");

  const productId = (await product.getAttribute("data-product-id")) || "";

  const productItem = await storePage.getCartProduct(productId);
  await expect(productItem).toBeVisible();

  await storePage.increaseQuantityToCartProduct(productId);

  const productQuantity = await storePage.getCartProductQuantity(productId);
  await expect(productQuantity).toHaveText("2");

  await storePage.decreaseQuantityToCartProduct(productId);
  await expect(productQuantity).toHaveText("1");

  await storePage.finishPurchase();

  const purchaseToast = await page.locator(
    'text="✅ Compra realizada exitosamente"'
  );
  await expect(purchaseToast).toBeVisible();
});

test("Aumentar la cantidad de un producto en el carrito", async ({
  storePage,
}) => {
  const products = await storePage.getProducts();

  const product = products.nth(0);

  await storePage.addToCartProduct(product);

  const cartButton = await storePage.getCartButton();
  await expect(cartButton).toBeVisible();

  await cartButton.click();

  const cartItemsQuantity = await storePage.getCartItemsQuantity();
  await expect(cartItemsQuantity).toHaveText("1 productos");

  const productId = (await product.getAttribute("data-product-id")) || "";

  const productItem = await storePage.getCartProduct(productId);
  await expect(productItem).toBeVisible();

  await storePage.increaseQuantityToCartProduct(productId);

  const productQuantity = await storePage.getCartProductQuantity(productId);
  await expect(productQuantity).toHaveText("2");
});

test("Quitar producto del carrito si la cantidad del producto es 0", async ({
  storePage,
}) => {
  const products = await storePage.getProducts();

  const product = products.nth(0);

  await storePage.addToCartProduct(product);

  const cartButton = await storePage.getCartButton();
  await expect(cartButton).toBeVisible();

  await cartButton.click();

  const cartItemsQuantity = await storePage.getCartItemsQuantity();
  await expect(cartItemsQuantity).toHaveText("1 productos");

  const productId = (await product.getAttribute("data-product-id")) || "";

  const productItem = await storePage.getCartProduct(productId);
  await expect(productItem).toBeVisible();

  await storePage.decreaseQuantityToCartProduct(productId);

  const productQuantity = await storePage.getCartProductQuantity(productId);
  await expect(productQuantity).not.toBeVisible();

  const cartButtonAfterClear = await storePage.getCartButton();
  await expect(cartButtonAfterClear).toBeVisible();

  const cartBadgeAfterClear = await storePage.getCartBadge();
  await expect(cartBadgeAfterClear).not.toBeVisible();
});


test("Botones del carrito desactivados si no hay items en el carrito", async ({
  storePage,
}) => {
  const products = await storePage.getProducts();
  const product = products.nth(0);
  await storePage.addToCartProduct(product);

  const cartButton = await storePage.getCartButton();
  await expect(cartButton).toBeVisible();
  await cartButton.click();

  const cartItemsQuantity = await storePage.getCartItemsQuantity();
  await expect(cartItemsQuantity).toHaveText("1 productos");

  const productId = (await product.getAttribute("data-product-id")) || "";
  const productItem = await storePage.getCartProduct(productId);
  await expect(productItem).toBeVisible();

  const productQuantity = await storePage.getCartProductQuantity(productId);
  await expect(productQuantity).toHaveText("1");

  await storePage.decreaseQuantityToCartProduct(productId);
  await expect(productQuantity).not.toBeVisible();

  const purchaseButton = await storePage.getPurchaseButton();
  await expect(purchaseButton).toBeDisabled();
  const clearCartButton = await storePage.getClearCartButton();
  await expect(clearCartButton).toBeDisabled();
});

test("Vaciar carrito", async ({ storePage }) => {
  const products = await storePage.getProducts();

  const product = products.nth(0);

  await storePage.addToCartProduct(product);

  const cartButton = await storePage.getCartButton();
  await expect(cartButton).toBeVisible();

  await cartButton.click();

  const cartItemsQuantity = await storePage.getCartItemsQuantity();
  await expect(cartItemsQuantity).toHaveText("1 productos");

  const productId = (await product.getAttribute("data-product-id")) || "";

  const productItem = await storePage.getCartProduct(productId);
  await expect(productItem).toBeVisible();

  await storePage.clearCart();

  const cartButtonAfterClear = await storePage.getCartButton();
  await expect(cartButtonAfterClear).toBeVisible();

  const cartBadgeAfterClear = await storePage.getCartBadge();
  // no debe existir en el dom
  await expect(cartBadgeAfterClear).not.toBeVisible();
});
