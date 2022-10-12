import { test, expect } from '@playwright/test';


const alltitles = (title: string, id: number) => [[`Гели для умывания`, 10], ['Средства по уходу за кожей лица', 9], ['Гели для душа', 8], ['Шампуни для волос', 7], ['Крем-мыло для интимной гигиены', 6], ['Средства для снятия макияжа', 5], ['Детские шампуни', 4], ['Антицеллюлитные средства', 3], ['Антибактериальное крем-мыло', 2], ['Антисептики для рук', 1]];


test('test', async ({ page }) => {

  // Заходим на сайт
  await page.goto('https://rasept.com/');

  // Переходим в Каталог
  await page.locator('ul[role="menu"] >> text=Каталог').click();
  await expect(page).toHaveURL('https://rasept.com/catalog');

  // Проверяем текст загловка 
  await expect(page.locator('h1')).toHaveText("Каталог продукции");


/*
   // Click .ant-card-body >> nth=0
   await page.locator('.ant-card-body').first().click();
   await expect(page).toHaveURL('https://rasept.com/catalog/antiseptiki-dlya-ruk');
 
   // Click div:nth-child(2) > a > .ant-card > .ant-card-body
   await page.locator('div:nth-child(2) > a > .ant-card > .ant-card-body').click();
   await expect(page).toHaveURL('https://rasept.com/catalog/antibakterialnoe-krem-mylo');
 */


 
  // Click text=Антисептики для рук
  //await expect(page.locator('.ant-card-boy', { has: page.locator('text=Антисептики для рук')}).toBeVisible;
  //await page.locator('.ant-layout-content > div > div > .ant-row > div', { has: page.locator('text=Антисептики для рук') }).click();
  // так было await expect(page.locator('.ant-card-body',  {has: page.locator["`${title}`"]})).toBeVisible,
  
  
 // var i = 1;

  const checkArticlePage = async (title: string, id: number) => Promise.all([
    
   // await expect(page.locator(`text=${title}`)).toBeVisible, // только text - слабый локатор 
    await expect(page.locator(`img[alt="${title}"]`)).toBeVisible,
    await expect(page.locator(`div:nth-child("${id}") > a > div > div.ant-card-body`,  {has: page.locator (`h2`)})).toHaveText (title),
    //i++
  ]);

 
for (const [title, id] of Object.entries(alltitles)) {
  await checkArticlePage(title, id);
}



const ProductPage = (title: string, url: number) => [[`с тимолом и маслом мяты`, 1], ['Средства по уходу за кожей лица', 2], ['Гели для душа', 3], ['Шампуни для волос', 4], ['Крем-мыло для интимной гигиены', 5], ['Средства для снятия макияжа', 6], ['Детские шампуни', 7], ['Антицеллюлитные средства', 8], ['Антибактериальное крем-мыло', 9], ['Антисептики для рук', 10]];

const allPageText: { [name: string]: { title: string; url: string; id: number, img: string, h1: string } } = {
  antiseptic: {
    title: `с тимолом и маслом мяты`,
    url: 'antisepticheskij-gel-dlya-ruk-s-timolom-i-maslom-myaty',
    id: 1,
    img:'img[alt="Антисептический гель для рук с тимолом и маслом мяты"]',
    h1: "Антисептический гель для рук с тимолом и маслом мяты",
  },
  creamSoap: {
    title: 'с тимолом и экстрактом хлопка',
    url: 'antibakterialnoe-krem-mylo-s-timolom-i-ekstraktom-hlopka',
    id: 2,
    img:'img[alt="\\32 07601\\.jpg"]',
    h1: "Антибактериальное крем-мыло с тимолом и экстрактом хлопка",
  },
  aSredstva: {
    title: 'с аминофиллином и маслом лемонграсса',
    url: "anticzellyulitnyj-formiruyushhij-gel-s-aminofillinom-i-maslom-lemongrassa",
    id: 3,
    img: 'img[alt="IMG_0447\\.png"]',
    h1: "Антицеллюлитный формирующий гель с аминофиллином и маслом лемонграсса",
  },
  babyShampoos: {
    title: 'с экстрактом череды',
    url: "detskij-shampun-s-ekstraktom-cheredy",
    id: 4,
    img:'img[alt="\\31 005638\\.jpg"]' ,
    h1: "Детский шампунь с экстрактом череды",
  },
  makeupRemovers: {
    title: 'с маслом шиповника',
    url: 'gidrofilnoe-maslo-s-maslom-shipovnika',
    id: 5,
    img:'img[alt="\\34 483610\\.jpg"]' ,
    h1: "Гидрофильное масло с маслом шиповника",
  },
  intimCreamSoap: {
  title: 'с экстрактом ромашки',
  url: 'krem-mylo-dlya-intimnoj-gigieny-s-ekstraktom-romashki',
  id: 6,
  img:'img[alt="\\33 735616\\.jpg"]',
  h1: "Крем-мыло для интимной гигиены с экстрактом ромашки",
},
shampoos: {
  title: 'с кофеином и янтарной кислотой',
  url: 'shampun-aktivator-rosta-volos-s-kofeinom-i-yantarnoj-kislotoj',
  id: 7,
  img:'img[alt="\\32 07601\\.jpg"]',
  h1: "Шампунь активатор роста волос с кофеином и янтарной кислотой",
},
showerGel: {
  title: '«Acqua Di Fresh»',
  url: 'parfyumirovannyj-gel-dlya-dusha-acqua-di-fresh',
  id: 8,
  img: 'img[alt="IMG_0447\\.png"]',
  h1: "Парфюмированный гель для душа «Acqua Di Fresh»",
},
skinCare: {
  title: 'с квасцами и BCAA',
  url: 'matiruyushhij-mineralnyj-tonik-s-kvasczami-i-bcaa',
  id: 9,
  img:'img[alt="\\31 005638\\.jpg"]' ,
  h1: "Матирующий минеральный тоник для лица",
},
cleansers: {
  title: 'с экстрактом ромашки',
  url: 'kollagenovyj-gel-dlya-umyvaniya-s-ekstraktom-romashki',
  id: 10,
  img:'img[alt="\\34 483610\\.jpg"]' ,
  h1: "Коллагеновый гель для умывания с экстрактом ромашки",
},
};

const checkProductPage = async (title: string, url: string, id: number, img: string, h1: string ) => ([
    
  page.hover(`div:nth-child(${id}) > a > .ant-card > .ant-card-cover > div:nth-child(2) > .ant-btn`),
  await page.locator(`text="${title}"`).click(),
  await expect(page).toHaveURL((`${url}`)),
  await expect(page.locator('h1')).toHaveText(h1),
  // Click text=50мл (Флип-топ) >> nth=1
  //await page.locator('text=50мл (Флип-топ)').nth(1).click(),
  //await expect(page).toHaveURL(/\/#50ml-flip_top$/),
  await expect(page.locator(img)).toBeVisible,
 ]);


for (const [title, url, id, img, h1] of Object.values(ProductPage)) {
 await checkProductPage(title, url, id, img, h1);
}

});

/*




*/