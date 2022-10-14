import { test, expect } from '@playwright/test';

test('contacts has map & copy button is aveilable & links button open new tab', async ({ page }) => {

  // Заходим на сайт
  await page.goto('https://rasept.com/');

  // Заходим в раздел Контакты
  await page.locator('ul[role="menu"] >> text=Контакты').click();
  await expect(page).toHaveURL('https://rasept.com/contact');

// Нажать на кнопку "Скопировать"
await page.locator('[aria-label="Скопировать"]').click();

// Проверить изменилась ли кнопка "Скопировать" на "Скопировано"
const locator = page.locator('[aria-label="Скопировано\\!"]');
await expect(locator).toBeVisible();


// Переходим по кнопке "Написать нам «ВКонтакте»"
const [vkTab] = await Promise.all([
  page.waitForEvent('popup'),
  page.locator('a:has-text("Написать нам «ВКонтакте»")').click(),
]);

await vkTab.waitForLoadState();
await expect(vkTab).toHaveTitle(new RegExp('VK'));
await expect(vkTab).toHaveURL(new RegExp('vk.com/login'));
await vkTab.close();

// Переходим по кнопке "VK"
const [vkTab1] = await Promise.all([
  page.waitForEvent('popup'),
  page.locator('text=Пишите и звонитеmail@rasept.com+7 (846) 922-88-33МессенджерыНаписать нам «ВКонта >> img[alt="vk"]').click(),
]);

await vkTab1.waitForLoadState();
await expect(vkTab1).toHaveTitle(new RegExp('VK'));
await expect(vkTab1).toHaveURL(new RegExp('vk.com'));
await vkTab1.close();
/*

// Переходим по кнопке "OK"
const [okTab] = await Promise.all([
  page.waitForEvent('popup'),
  page.locator('text=Пишите и звонитеmail@rasept.com+7 (846) 922-88-33МессенджерыНаписать нам «ВКонта >> img[alt="ok"]').click(),
]);

await okTab.waitForLoadState();
await expect(okTab).toHaveTitle(new RegExp('OK'));
await expect(okTab).toHaveURL(new RegExp('ok.ru'));
await okTab.close();

*/
// Вроде бы првоеряю видимость Яндекс карты
await expect(page.frameLocator('iframe').locator('canvas')).toBeVisible;



});





