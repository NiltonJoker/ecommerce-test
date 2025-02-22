import { test as base } from '@playwright/test';
import { StorePage } from '../models/store.page';


type StoreFixture = {
  storePage: StorePage
};

export const test = base.extend<StoreFixture>({
  storePage: async ({ page }, applyFixture) => {
      const storePage = new StorePage(page);
      await storePage.goto();
      await page.waitForSelector('[data-item="product"] > *', { state: 'visible' });
      applyFixture(storePage);
  }
});
export { expect } from '@playwright/test';