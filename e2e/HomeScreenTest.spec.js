/* eslint-env detox/detox, mocha */

describe('Owners list', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have search bar', async () => {
    await expect(element(by.id('SearchBar'))).toBeVisible();
  });

  it('should have hint in search bar', async () => {
    await expect(element(by.text('Type Here...'))).toBeVisible();
  });

  it('should show empty list hint', async () => {
    const searchBar = element(by.id('SearchBar'));

    await searchBar.tap();
    await searchBar.clearText();

    await expect(element(by.text('Nothing here'))).toBeVisible();
  });

  it('should show a list of search results', async () => {
    const searchBar = element(by.id('SearchBar'));

    await searchBar.tap();
    await searchBar.typeText('google');
    await element(by.text('Cancel')).tap();

    await element(by.id('OwnersList')).scrollTo('bottom');
    await expect(element(by.id('OwnerListItem')).atIndex(0)).toBeVisible();
  });
});
