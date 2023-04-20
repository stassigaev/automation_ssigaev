const { I } = inject();

module.exports = {
  verifySuccessPage() {
    I.see('Your Account Has Been Created!');
  },
};
