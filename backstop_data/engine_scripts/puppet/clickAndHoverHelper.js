module.exports = async (page, scenario) => {
  const hoverSelector = scenario.hoverSelectors || scenario.hoverSelector;
  const clickSelector = scenario.clickSelectors || scenario.clickSelector;
  const keypressSelector = scenario.keypressSelectors || scenario.keypressSelector;

  if (hoverSelector) {
    for (const hoverSelectorIndex of [].concat(hoverSelector)) {
      await page.waitForSelector(hoverSelectorIndex);
      await page.hover(hoverSelectorIndex);
    }
  }

  if (clickSelector) {
    for (const clickSelectorIndex of [].concat(clickSelector)) {
      await page.waitForSelector(clickSelectorIndex);
      await page.click(clickSelectorIndex);
    }
  }

  if (keypressSelector) {
    for (const keypressSelectorIndex of [].concat(keypressSelector)) {
      await page.waitForSelector(keypressSelectorIndex.selector);
      await page.type(keypressSelectorIndex.selector, keypressSelectorIndex.keyText);
    }
  }
};
