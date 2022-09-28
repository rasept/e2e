import { test, expect } from '@playwright/test';

const siteUrl = 'https://rasept.com';
const articlesTitle = 'Статьи';
const allArticles: { [url: string]: string } = {
  timol: 'Тимол',
  lemongrass: 'Лемонграсс',
  myata: 'Мята',
  allantoin: 'Аллантоин',
  'vitamin-e': 'Витамин Е',
};

test('check articles for text and images being visible and buttons open new tab', async ({ page }) => {
  const selectorOf = {
    articleCardTitle: (title: string) => `.ant-card-meta-title >> text="${title}"`,
    articleCardImage: (title: string) => `.ant-card-cover img[alt="${title}"]`,
  };
  const checkArticleSnippet = async (title: string) => Promise.all([
    await expect(page.locator(selectorOf.articleCardTitle(title))).toBeVisible, // Проверяем видимость текст загловка 
    await expect(page.locator(selectorOf.articleCardImage(title))).toBeVisible, // Проверяем видимость картинки
  ]);
  const checkArticlePage = async (title: string, urlRegExp: RegExp) => {
    await page.locator('.ant-card', { has: page.locator(selectorOf.articleCardTitle(title)) }).click(); // Переходим в статью
    await expect(page).toHaveURL(urlRegExp); // Проверяем URL
    await expect(page.locator('h1')).toHaveText(title); // Проверяем текст загловка 
    await expect(page.locator(`main img[alt="${title}"]`)).toBeVisible; // Проверяем видимость картинки в статье
    await page.goto(`${siteUrl}/articles`); // Возвращаемся на страницу "Статьи"
  };

  // Заходим на сайт
  await page.goto(siteUrl);

  // Заходим на страницу "Статьи"
  await page.locator(`ul[role="menu"] >> text=${articlesTitle}`).click();
  await expect(page).toHaveURL(`${siteUrl}/articles`);

  // Проверяем заголовок страницы
  await expect(page.locator('h1')).toHaveText(articlesTitle);

  // Проверяем видимость картинки и текста заголовка карточки статьи
  for (const title of Object.values(allArticles)) {
    await checkArticleSnippet(title);
  }

  // Проверяем отображение информации на странице статьи
  for (const [url, title] of Object.entries(allArticles)) {
    await checkArticlePage(title, new RegExp(`/${url}$`));
  }
});
