import { test, expect } from '@playwright/test';

    test('dropdown menu is working and links in it are able to use', async ({ page }) => {
    
  // Перейти на сайт Расепт
  await page.goto('https://rasept.com/');
    
  // Нажать на Каталог
  await page.locator('[aria-label="Каталог"]').click();

  // Навестись на категорию Антисептикидля рук
  page.hover('a:has-text("Антисептикидля рук")');
    
  // Нажать на первую строчку выпадающего меню и перейти в карточку товара "Антисептический гель для рукс тимолом и маслом мяты" 
  await page.locator('text=с тимолом и маслом мяты').first().click();
  //Проверить URL страницы
   await expect(page).toHaveURL('https://rasept.com/catalog/antisepticheskij-gel-dlya-ruk-s-timolom-i-maslom-myaty');

   const allPageText: { [allPageText: string]: {title: string; url: string; h1: string; } } = {
    antiseptic: {
      title: `Антисептикидля рук`,
      url: 'https://rasept.com/catalog/antisepticheskij-gel-dlya-ruk-s-timolom-i-maslom-myaty',
      //id: 1,
      //img:'img[alt="Антисептический гель для рук с тимолом и маслом мяты"]',
      h1: "с тимолом и маслом мяты",
    },
    creamSoap: {
      title: 'Антибактериальноекрем-мыло',
      url: 'https://rasept.com/catalog/antibakterialnoe-krem-mylo-s-timolom-i-ekstraktom-hlopka',
      //id: 2,
      //img:'img[alt="\\32 07601\\.jpg"]',
      h1: "с тимолом и экстрактом хлопка",
    },
    aSredstva: {
      title: 'Антицеллюлитныесредства',
      url: 'https://rasept.com/catalog/anticzellyulitnyj-formiruyushhij-gel-s-aminofillinom-i-maslom-lemongrassa',
      //id: 3,
      //img: 'img[alt="IMG_0447\\.png"]',
      h1: "с аминофиллином и маслом лемонграсса",
    },
    babyShampoos: {
      title: 'Детскиешампуни',
      url: "https://rasept.com/catalog/detskij-shampun-s-ekstraktom-cheredy",
      //id: 4,
      //img:'img[alt="\\31 005638\\.jpg"]' ,
      h1: "с экстрактом череды",
    },
    makeupRemovers: {
      title: 'Средства дляснятия макияжа',
      url: 'https://rasept.com/catalog/gidrofilnoe-maslo-s-maslom-shipovnika',
      //id: 5,
      //img:'img[alt="\\34 483610\\.jpg"]' ,
      h1: "с маслом шиповника",
    },
    intimCreamSoap: {
    title: 'Крем-мыло дляинтимной гигиены',
    url: 'https://rasept.com/catalog/krem-mylo-dlya-intimnoj-gigieny-s-ekstraktom-romashki',
    //id: 6,
    //img:'img[alt="\\33 735616\\.jpg"]',
    h1: "с экстрактом ромашки",
  },
  shampoos: {
    title: 'Шампунидля волос',
    url: 'https://rasept.com/catalog/shampun-aktivator-rosta-volos-s-kofeinom-i-yantarnoj-kislotoj',
    //id: 7,
    //img:'img[alt="\\32 07601\\.jpg"]',
    h1: "с кофеином и янтарной кислотой",
  },
  showerGel: {
    title: 'Гелидля душа',
    url: 'https://rasept.com/catalog/parfyumirovannyj-gel-dlya-dusha-acqua-di-fresh',
    //id: 8,
    //img: 'img[alt="IMG_0447\\.png"]',
    h1: "«Acqua Di Fresh»",
  },
  skinCare: {
    title: 'Средства по уходуза кожей лица',
    url: 'https://rasept.com/catalog/matiruyushhij-mineralnyj-tonik-dlya-licza',
    //id: 9,
    //img:'img[alt="\\31 005638\\.jpg"]' ,
    h1: "для лица",
  },
  cleansers: {
    title: 'Гелидля умывания',
    url: 'https://rasept.com/catalog/saliczilovyj-gel-dlya-umyvaniya-s-ekstraktom-kalenduly',
    //id: 10,
    //img:'img[alt="\\34 483610\\.jpg"]' ,
    h1: "Салициловый гель для умыванияс экстрактом календулы",
  },
   };


   const checkProductPage = async (title: string) => ([
    
    await page.locator('[aria-label="Каталог"]').click(),
    page.hover(`a:has-text(${title})`),
    await page.locator(`text=${h1}`).click(),
    await expect(page).toHaveURL(`${url}`),
    
   ]);


   const checkProductPages = async (url: string,  h1: string ) => ([
    
    await page.locator('[aria-label="Каталог"]').click(),
    page.hover(`a:has-text(${title})`),
    await page.locator(`text=${h1}`).click(),
    await expect(page).toHaveURL(`${url}`),
    
   ]);

  
  
  for (const title of Object.values(allPageText)) {
   await checkProductPage(title);
  }

  for (const [url, h1] of Object.entries(allPageText)) {
    await checkProductPages(url, h1);
   }

  //Проверяем Антибактериальноекрем-мыло
  // Нажать на Каталог
  await page.locator('[aria-label="Каталог"]').click();
  
  // Навестись на категорию
   page.hover('a:has-text("Антибактериальноекрем-мыло")');

  // Перейти на страницу "Антибактериальное крем-мыло с тимолом и экстрактом хлопка"
  await page.locator('text=с тимолом и экстрактом хлопка').click();
  await expect(page).toHaveURL('https://rasept.com/catalog/antibakterialnoe-krem-mylo-s-timolom-i-ekstraktom-hlopka');


  //Проверяем Антицеллюлитные средства
  // Нажать на Каталог
  await page.locator('[aria-label="Каталог"]').click();

  // Навестись на категорию
   page.hover('a:has-text("Антицеллюлитныесредства")');
 
  // Перейти на страницу "Антицеллюлитный формирующий гель с аминофиллином и маслом лемонграсса"
  await page.locator('text=с аминофиллином и маслом лемонграсса').click();
  await expect(page).toHaveURL('https://rasept.com/catalog/anticzellyulitnyj-formiruyushhij-gel-s-aminofillinom-i-maslom-lemongrassa');


  // Проверяем детскиешампуни
  // Нажать на Каталог
  await page.locator('[aria-label="Каталог"]').click();

  // Навестись на категорию
   page.hover('a:has-text("Детскиешампуни")');

  // Перейти на страницу "Детский шампунь с экстрактом череды"
  await page.locator('text=с экстрактом череды').click();
  await expect(page).toHaveURL('https://rasept.com/catalog/detskij-shampun-s-ekstraktom-cheredy');
  

  // Проверяем Средства дляснятия макияжа
  // Нажать на Каталог
  await page.locator('[aria-label="Каталог"]').click();

  // Навестись на категорию
   page.hover('a:has-text("Средства дляснятия макияжа")');

  // Перейти на страницу "Гидрофильное масло с маслом шиповника"
  await page.locator('text=с маслом шиповника').click();
  await expect(page).toHaveURL('https://rasept.com/catalog/gidrofilnoe-maslo-s-maslom-shipovnika');


  // Проверяем Крем-мыло дляинтимной гигиены
  // Нажать на Каталог
  await page.locator('[aria-label="Каталог"]').click();

  // Навестись на категорию
   page.hover('a:has-text("Крем-мыло дляинтимной гигиены")');

  // Перейти на страницу "Крем-мыло дляинтимной гигиены с экстрактом ромашки" 
  await page.locator('text=с экстрактом ромашки').click();
  await expect(page).toHaveURL('https://rasept.com/catalog/krem-mylo-dlya-intimnoj-gigieny-s-ekstraktom-romashki');


// Проверяем Шампуни для волос
// Нажать на Каталог
await page.locator('[aria-label="Каталог"]').click();

  // Навестись на категорию
   page.hover('a:has-text("Шампунидля волос")');

  // Перейти на страницу "Шампунь для волос с кофеином и янтарной кислотой" 
  await page.locator('text=с кофеином и янтарной кислотой').click();
  await expect(page).toHaveURL('https://rasept.com/catalog/shampun-aktivator-rosta-volos-s-kofeinom-i-yantarnoj-kislotoj');


// Проверяем Гели для душа
// Нажать на Каталог
await page.locator('[aria-label="Каталог"]').click();

  // Навестись на категорию
   page.hover('a:has-text("Гелидля душа")');

  // Перейти на страницу "Acqua Di Fresh" 
  await page.locator('text=«Acqua Di Fresh»').click();
  await expect(page).toHaveURL('https://rasept.com/catalog/parfyumirovannyj-gel-dlya-dusha-acqua-di-fresh');


// Проверяем Средства по уходу за кожей лица
// Нажать на Каталог
await page.locator('[aria-label="Каталог"]').click();

  // Навестись на категорию
   page.hover('a:has-text("Средства по уходуза кожей лица")');

  // Перейти на страницу "Матирующий минеральный тоник для лица"
  await page.locator('a:has-text("для лица")').click();
  await expect(page).toHaveURL('https://rasept.com/catalog/matiruyushhij-mineralnyj-tonik-dlya-licza');


// Проверяем Гелидля умывания
// Нажать на Каталог
await page.locator('[aria-label="Каталог"]').click();

  // Навестись на категорию
   page.hover('a:has-text("Гелидля умывания")');

  // Перейти на страницу "Салициловый гель для умыванияс экстрактом календулы" 
  await page.locator('text=Салициловый гель для умыванияс экстрактом календулы >> a').click(); // использовал эту ссылку потому что остальные не имеют локаторов
  await expect(page).toHaveURL('https://rasept.com/catalog/saliczilovyj-gel-dlya-umyvaniya-s-ekstraktom-kalenduly');

});

/** 
  Не проходит в webkit
*/