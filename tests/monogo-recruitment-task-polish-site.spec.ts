import { test, Page, expect, chromium } from "@playwright/test";
import { SimpleElements } from "../pages/monogo-polish.page.ts";
import {
  closeShopMenuIfVisible,
  gatherImagesCheckHowMany,
  gatherImagesCheckHowManyPolish,
  linkToCartNCheckout,
  linkToCartNCheckoutPolish,
  linkToProductPloomXAdvanced,
  linkToProductPloomXAdvancedBronzePolish,
  quantityMinus,
  quantityMinusPolish,
  verifyAllLinksOnPage,
  collectAllLocators,
  checkImagesWithRelativeURLs,
  urlPolish,
  addProductToCartAndGoToCheckout,
} from "../test-data/monogo-helpers.ts";
import {
  addProductToCartAndGoToCheckoutPolish,
  goToProductPagePolish,
  linkToProductPloomXAdvancedBluePolish,
  urlCheckoutPolish, findInvalidLinks
} from "../test-data/monogo-helpers-polish.ts";

test("Verify if it is possible to add a product to the cart.", async ({
  page,
}) => {
  const elementsPage = new SimpleElements(page);

  await addProductToCartAndGoToCheckoutPolish(page);
  await elementsPage.loginCheckoutButton.click();
});

test("Verify if it is possible to remove a product from the cart", async ({
  page,
}) => {
  const elementsPage = new SimpleElements(page);

  await addProductToCartAndGoToCheckoutPolish(page);
  await page.goto(urlCheckoutPolish);
  await quantityMinusPolish(page);
  await expect(elementsPage.emptyContainerInfoTextPolish).toBeVisible();

  await elementsPage.miniBasket.click();
  await elementsPage.emptyCartContainer.click();
  await expect(elementsPage.emptyCartContainerPolish).toBeVisible;
});


test("Verify if there are any broken links or images on the product page", async ({
  page,
}) => {
  const elementsPage = new SimpleElements(page);

  await goToProductPagePolish(page);
  await verifyAllLinksOnPage(page, linkToProductPloomXAdvancedBronzePolish);
  await gatherImagesCheckHowMany(page, linkToProductPloomXAdvancedBronzePolish);
  await findInvalidLinks(page);
});

test("Sprawdzenie niepoprawnych linków na stronie jako bonus", async ({ page }) => {
  await page.goto(
    "https://www.ploom.pl/pl/sklep/produkty/urzadzenie/ploom-x-advanced-niebieski"
  ); 
  await findInvalidLinks(page);
});

