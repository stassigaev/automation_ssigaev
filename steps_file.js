const base = require('./pages/base');

const STORE_URL = 'http://opencart.qatestlab.net/index.php';
const ITEM_URL = 'http://opencart.qatestlab.net/index.php?route=product/product&product_id=44';
module.exports = function () {
  const singInButton = { xpath: '//a[text()="Sign In"]' };
  const emailField = { xpath: '//*[@id="input-email"]' };
  const passwordField = { xpath: '//*[@id="input-password"]' };
  const addToCartButton = { xpath: '//*[@id="button-cart"]' };
  const checkoutButton = {
    xpath: '//*[@id="content"]/div[3]/div[2]/a',
  };

  return actor({
    openStore() {
      this.amOnPage(STORE_URL);
    },

    login(user) {
      this.click(singInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      base.submitForm();
      this.see('My Orders');
    },
    addItemToCart() {
      this.amOnPage(ITEM_URL);

      this.click({ xpath: '//*[@id="product"]/div[1]/div' }); // first dropdown
      this.click({ xpath: '//*[@id="product"]/div[1]/div/ul/li[2]' }); // first dropdown option
      this.click({ xpath: '//*[@id="product"]/div[2]/div' }); // second dropdown
      this.click({ xpath: '//*[@id="product"]/div[2]/div/ul/li[2]' }); // second dropdown option
      this.click(addToCartButton);
    },
    movingToCheckout() {
      base.enteringCartWithItems();

      this.click(checkoutButton);
      this.click({ xpath: '//*[@id="collapse-payment-address"]/div/form/div[1]/label' });
    },

    clickOmContinueButton() {
      this.click({ xpath: '//input[@value="Continue"]' });
    },

    async clickOmContinueButton() {
      pause();
      await this.click({ xpath: '//input[@value="Continue"]' });
    },
    // fillingBillingDetails(checkoutInfo) {
    //   this.fillField({ xpath: '//input[@name="firstname"]' }, checkoutInfo.char);
    //   this.fillField({ xpath: '//input[@name="lastname"]' }, checkoutInfo.char);
    //   this.fillField({ xpath: '//input[@name="address_1"]' }, checkoutInfo.char);
    //   this.fillField({ xpath: '//input[@name="city"]' }, checkoutInfo.char);
    //   this.fillField({ xpath: '//input[@name="postcode"]' }, checkoutInfo.number);
    //   pause();
    //   this.click({ xpath: '//*[@id="input-payment-zone"]' });
    // },
  });
};
