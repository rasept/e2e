import { test, expect } from '@playwright/test';
import { site, menuPages } from "./config";

test('homepage has certain title and all header linked pages are available', async ({ page }) => {
  const checkMenuPage = async (url: string, pageTitle: string, menuTitle: string) => {
    await page.locator(`ul[role="menu"] >> text="${menuTitle}"`).click(); // Переходим на страницу
    await expect(page).toHaveURL(new RegExp(`\/${url}$`)); // Проверяем URL
    await expect(page.locator('h1')).toHaveText(pageTitle); // Проверяем загаловок
  };

  // Перейти на сайт
  await page.goto(site.url);

  // Проверяем наличие тескта "Расепт" в теге <title>
  await expect(page).toHaveTitle(new RegExp(site.title));

  // Проверка заголовка на главной странице
  await expect(page.locator('h1')).toHaveText('Производитель антисептиков и косметики');

  for (const [url, { pageTitle, menuTitle }] of Object.entries(menuPages)) {
    await checkMenuPage(url, pageTitle, menuTitle);
  }
});
