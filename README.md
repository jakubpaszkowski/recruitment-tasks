# Ploom.co.uk Recruitment Task  

## Overview  
This project contains automated tests for the **Ploom** website, ensuring core functionalities work as expected across multiple markets. The test framework is designed to support easy expansion to new country-specific versions of the site.  

### Supported Shops  
- [Ploom UK](https://www.ploom.co.uk/en)  
- [Ploom Poland](https://www.ploom.pl/pl)  

## Implemented Test Cases  

### **1. Add Product to Cart**  
**Objective:** Verify if a product can be successfully added to the cart.  
**Test Steps:**  
1. Visit the Ploom website.  
2. Click on "Shop."  
3. Open the product page by locating the SKU (`ploom-x-advanced`).  
4. Add the product to the cart.  
5. Verify the basket count is updated.  
6. Open the cart.  
7. Ensure the product appears in the basket.  

### **2. Remove Product from Cart**  
**Objective:** Verify if a product can be successfully removed from the cart.  
**Precondition:** A product must already be in the cart.  
**Test Steps:**  
1. Open the cart.  
2. Remove the product from the cart.  
3. Confirm the product is no longer present.  
4. Ensure the basket count updates correctly.  

### **3. Check for Broken Links & Images**  
**Objective:** Identify any broken links or missing images on the product page.  
**Test Steps:**  
1. Visit the Ploom website.  
2. Click on "Shop."  
3. Open the product page by locating the SKU (`ploom-x-advanced`).  
4. Check all links to ensure they are functional.  
5. Verify that all images load correctly.  

## Notes  
- Tests are structured to allow easy expansion to additional country-specific websites.  
- The framework ensures stability and reliability when navigating, adding/removing products, and checking page integrity.  
