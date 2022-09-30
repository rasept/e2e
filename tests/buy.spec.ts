import { test, expect } from '@playwright/test';

test('links on the page are availeble', async ({ page }) => {

  // Go to https://rasept.com/
  await page.goto('https://rasept.com/');

  // Click ul[role="menu"] >> text=Купить
  await page.locator('ul[role="menu"] >> text=Купить').click();
  await expect(page).toHaveURL('https://rasept.com/buy');

  // Click h1:has-text("Где купить нашу продукцию?")
  await page.locator('h1:has-text("Где купить нашу продукцию?")').click();

  // Click img[alt="«Wildberries»"]
  const [wildberries] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('img[alt="«Wildberries»"]').click()
  ]);
  
  await wildberries.waitForLoadState();
  //await expect(wildberries).toHaveTitle(new RegExp('VK'));
  await expect(wildberries).toHaveURL(new RegExp('wildberries'));
  await wildberries.close();


/*
  // Click img[alt="«Яндекс\.Маркет»"]
  const [yandex] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('img[alt="«Яндекс\\.Маркет»"]').click()
  ]);

  await yandex.waitForLoadState();
  //await expect(yandex).toHaveTitle(new RegExp('VK'));
  await expect(yandex).toHaveURL(new RegExp('yandex'));
  await yandex.close();

  // Click img[alt="«AliExpress»"]
  const [aliexpress] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('img[alt="«AliExpress»"]').click()
  ]);

  await aliexpress.waitForLoadState();
  //await expect(aliexpress).toHaveTitle(new RegExp('Aliexpress.'));
  await expect(aliexpress).toHaveURL(new RegExp('aliexpress'));
  await aliexpress.close();


  // Переходим по кнопке "Написать нам «ВКонтакте»"
const [vkTab] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('a:has-text("Написать нам «ВКонтакте»")').click(),
  ]);
  
  await vkTab.waitForLoadState();
  await expect(vkTab).toHaveTitle(new RegExp('VK'));
  await expect(vkTab).toHaveURL(new RegExp('vk.com/login'));
  await vkTab.close();

  */
});