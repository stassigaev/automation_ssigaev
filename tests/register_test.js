Feature('register');

const NEW_USER = {
  firstName: 'Oleg',
  lastName: '242',
  email: Date.now() + '@test.com',
  telephone: '+' + Date.now(),
  password: '125135135',
};

Scenario('register new usernp', ({ I, basePage, registerPage }) => {
  I.amOnPage('http://opencart.qatestlab.net/index.php');
  basePage.clickMyAccountSpoiler();
  basePage.clickMyRegisterLink();
  registerPage.verifyRegisterPage();
  registerPage.fillNewUserForm(NEW_USER);
  registerPage.clickOnSubscribeRadio();
  registerPage.clickOnPolicyCheckbox();
  registerPage.clickOnContinueButton();
  registerPage.verifySuccessPage();
});
