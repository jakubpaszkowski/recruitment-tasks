import { test, expect } from "@playwright/test";
import { SimpleElements } from "../pages/monogo.page";
import {
  addProductToCartAndGoToCheckoutEnglish,
  closeShopMenuIfVisible,
  findInvalidLinks,
  gatherImagesCheckHowMany,
  goToProductPageEnglish,
  linkToCartNCheckout,
  linkToProductPloomXAdvanced,
  quantityMinus,
  urlEnglish,
  urlEnglishCheckout,
  verifyAllLinksOnPage,
} from "../test-data/monogo-helpers.ts";

test("Verify if it is possible to add a product to the cart.", async ({
  page,
}) => {
  const elementsPage = new SimpleElements(page);
  await addProductToCartAndGoToCheckoutEnglish(page);
  await elementsPage.loginCheckoutButton.click();
});

test("Verify if it is possible to remove a product from the cart", async ({
  page,
}) => {
  const elementsPage = new SimpleElements(page);
  await addProductToCartAndGoToCheckoutEnglish(page);
  await page.goto(urlEnglishCheckout);
  await quantityMinus(page);
  await expect(elementsPage.youHaveNoItems).toBeVisible();
  await elementsPage.miniBasket.click();
  await elementsPage.emptyCartContainer.click();
  await expect(elementsPage.emptyCartContainer).toHaveText(
    "There are no products in your cart at the moment."
  );
});

test("Verify if there are any broken links or images on the product page", async ({
  page,
}) => {
  const elementsPage = new SimpleElements(page);
  await goToProductPageEnglish(page);
  await verifyAllLinksOnPage(page, linkToProductPloomXAdvanced);
  await gatherImagesCheckHowMany(page, linkToProductPloomXAdvanced);
  await findInvalidLinks(page);
});


test("Checking for broken links on the website as a bonus.", async ({ page }) => {
  await page.goto(
    "https://www.ploom.co.uk/en/shop/products/devices/ploom-x-advanced"
  ); 
  await findInvalidLinks(page);
});