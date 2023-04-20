const { I } = inject();

module.exports = {
  firstNameField: { xpath: '//*[@id="input-firstname"]' },
  lastNameField: { xpath: '//*[@id="input-lastname"]' },
  emailField: { xpath: '//*[@id="input-email"]' },
  telephoneField: { xpath: '//*[@id="input-telephone"]' },
  passwordField: { xpath: '//*[@id="input-password"]' },
  passwordConfirmationField: { xpath: '//*[@id="input-confirm"]' },
  subscribeRadioIsActive: { xpath: '//*[@id="content"]/form/fieldset[3]/div/div/label[1]' },
  policyCheckbox: { xpath: '//*[@id="content"]/form/div/div/input[1]' },
  continueButtonRegistrationPage: { xpath: '//*[@id="content"]/form/div/div/input[2]' },

  verifyRegisterPage() {
    I.see('Register Account');
  },

  fillNewUserForm(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailField, user.email);
    I.fillField(this.telephoneField, user.telephone);
    I.fillField(this.passwordField, user.password);
    I.fillField(this.passwordConfirmationField, user.passwordConfirmation);
  },

  clickOnSubscribeRadio() {
    I.click(this.subscribeRadioIsActive);
  },
  clickOnPolicyCheckbox() {
    I.click(this.policyCheckbox);
  },
  clickOnContinueButton() {
    I.click(this.continueButtonRegistrationPage);
  },
  verifyRegisterPage() {
    I.see('Register Account');
  },
};
