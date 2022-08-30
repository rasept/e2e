import { test, expect } from '@playwright/test';

test('homepage has certain title and all header linked pages are available', async ({ page }) => {
  // Перейти на сайт
  await page.goto('https://rasept.com/');

  // Проверяем наличие тескта "Расепт" в теге <title>
  await expect(page).toHaveTitle(/Расепт/);

  // Проверка заголовка на главной странице
  await expect(page.locator('h1')).toHaveText('Производитель антисептиков и косметики');

  // Проверка страницы "Каталог"
  await page.locator('ul[role="menu"] >> text=Каталог').click();
  await expect(page).toHaveURL(/\/catalog$/);
  await expect(page.locator('h1')).toHaveText('Каталог продукции');

  // Проверка страницы "Купить"
  await page.locator('ul[role="menu"] >> text=Купить').click();
  await expect(page).toHaveURL(/\/buy$/);
  await expect(page.locator('h1')).toHaveText('Где купить нашу продукцию?');
  
  // Проверка страницы "Статьи"
  await page.locator('ul[role="menu"] >> text=Статьи').click();
  await expect(page).toHaveURL(/\/articles$/);
  await expect(page.locator('h1')).toHaveText('Статьи');

  // Проверка страницы "Партнёрам"
  await page.locator('ul[role="menu"] >> text=Партнёрам').click();
  await expect(page).toHaveURL(/\/partnership$/);
  await expect (page.locator('h1')).toHaveText('Партнёрам');

  // Проверка страницы "Контакты"
  await page.locator('ul[role="menu"] >> text=Контакты').click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.locator('h1')).toHaveText('Контактная информация');
});
