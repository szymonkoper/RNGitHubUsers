describe('Users list', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have search bar', async () => {
    await expect(element(by.id('SearchBar'))).toBeVisible();
  });
})