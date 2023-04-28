const USER = {
  email: 'testtest123123@gmail.com',
  password: 'Test',
};

const CHECKOUT_INFO = {
  char: 'Test',
  number: 1243,
};
Feature('purchase');

Scenario.only('buy product', async ({ I, basePage }) => {
  I.openStore();
  I.login(USER);
  I.addItemToCart();
  const checkoutPrice = await I.grabTextFrom({ xpath: '//div/span[@class="price-cart"]' });
  console.log(checkoutPrice);
  I.movingToCheckout();

  //I.fillingBillingDetails(CHECKOUT_INFO);

  await I.clickOmContinueButton();

  await I.clickOmContinueButton();

  await I.clickOmContinueButton();

  I.click({ xpath: '//*[@id="agree1"]' });

  await I.clickOmContinueButton();
  const subTotalPrice = await I.grabTextFrom({ xpath: '//tfoot/tr[1]/td[2][@class="text-right"]' });
  console.log(subTotalPrice);
  const shippingPrice = await I.grabTextFrom({ xpath: '//tfoot/tr[2]/td[2][@class="text-right"]' });
  console.log(shippingPrice);
  I.click({ xpath: ' //*[@id="button-confirm"]' });
  I.see('Your order has been placed!');

  console.log(+subTotalPrice.substring(1) + +shippingPrice.substring(1));
  console.log(checkoutPrice.substring(1));
  const output = +subTotalPrice.substring(1) + +shippingPrice.substring(1);
  I.assertEqual(Math.round(output), Math.round(checkoutPrice.substring(1)));
}).tag('buy');
