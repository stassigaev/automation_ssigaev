const base = require('../pages/base');
const { passwordField } = require('../pages/register');

Feature('register');

const NEW_USER = {
  firstName: 'Oleg',
  lastName: '242',
  email: Date.now() + '@test.com',
  telephone: '+' + Date.now(),
  password: '125135135',
  passwordConfirmation: '125135135',
};

Scenario('register new usernp', ({ I, basePage, registerPage, successPage }) => {
  I.amOnPage('http://opencart.qatestlab.net/index.php');
  basePage.clickMyAccountSpoiler();
  basePage.clickMyRegisterLink();
  registerPage.verifyRegisterPage();
  registerPage.fillNewUserForm(NEW_USER);
  registerPage.clickOnSubscribeRadio();
  registerPage.clickOnPolicyCheckbox();
  registerPage.clickOnContinueButton();
  successPage.verifySuccessPage();
  pause();
});

xScenario('Grab price', async ({ I }) => {
  I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=29');
  const price = await I.grabTextFrom({
    xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]',
  });
  console.log(price);
});
