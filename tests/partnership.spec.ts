import { test, expect } from '@playwright/test';

import { partnership, OfferToDistributors, OfferToPharmacyСhains, OfferContract, OfferToRetail, JointPurchases } from './texts.js';


test('test partensip page all text headers and images are not corrupted', async ({ page }) => {

  // Переходим на сайт
  await page.goto('https://rasept.com/');

  // Переходим на страницу "Партнёрам"
  await page.locator('ul[role="menu"] >> text=Партнёрам').click();
  await expect(page).toHaveURL('https://rasept.com/partnership');

  // Проверяем заголовок и текст в участке страницы "Партнёрам"
  await expect(page.locator('h1')).toHaveText("Партнёрам");
  await expect(page.locator('#gatsby-focus-wrapper > section > main > div > div > article > div > div > div')).toHaveText(partnership);

  

  const allPageText: { [allPageText: string]: { header: string; text: string; id: number, img: string } } = {
    OfferToDistributors:{
      text: OfferToDistributors,
      header: 'Предложение дистрибьюторам',
      id: 3,
      img:'img[alt="\\33 735616\\.jpg"]',
    },
    OfferToPharmacyСhains: {
      text: OfferToPharmacyСhains,
      header: "Предложение аптечным сетям",
      id: 4,
      img:'img[alt="\\32 07601\\.jpg"]',
    },
    OfferContract: {
      text: OfferContract,
      header: "Предложение контрактного производства",
      id: 5,
      img: 'img[alt="IMG_0447\\.png"]',
    },
    OfferToRetail: {
      text: OfferToRetail,
      header: "Предложение торговым сетям",
      id: 6,
      img:'img[alt="\\31 005638\\.jpg"]' ,
    },
    JointPurchases: {
      text: JointPurchases,
      header: "Совместные покупки",
      id: 7,
      img:'img[alt="\\34 483610\\.jpg"]' ,
    },
  };

  const selectorOf = {
    articleCardTitle: (id:number) =>  `div:nth-child(${id}) > div.ant-col.ant-col-sm-24.ant-col-md-12 > div > div.ant-typography.text-4xl`, 
    articleCardText: (id:number) => `div:nth-child(${id}) > div.ant-col.ant-col-sm-24.ant-col-md-12 > div > div:nth-child(2)`,
  };

  const checkArticleSnippet = async ( text: string, header: string, id: number, img: string) => ([
    await expect(page.locator(selectorOf.articleCardTitle(id))).toHaveText(header), // Проверяем видимость текст загловка 
    await expect(page.locator(selectorOf.articleCardText(id))).toHaveText(text), // Проверяем текст под заголовком
    await expect(page.locator(img)).toBeVisible, // Проверяем видимость картинки
  ]);

  for (const {text, header, id, img} of Object.values(allPageText)) {
    await checkArticleSnippet (text, header, id, img);
  }

});

/*


*/