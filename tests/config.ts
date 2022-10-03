export const site: { url: string; title: string } = {
    url: 'https://rasept.com',
    title: 'Расепт',
};


export const menuPages: { [url: string]: { pageTitle: string; menuTitle: string } } = {
    catalog: {
      pageTitle: 'Каталог продукции',
      menuTitle: 'Каталог',
    },
    buy: {
      pageTitle: 'Где купить нашу продукцию?',
      menuTitle: 'Купить',
    },
    articles: {
      pageTitle: 'Статьи',
      menuTitle: 'Статьи',
    },
    partnership: {
      pageTitle: 'Партнёрам',
      menuTitle: 'Партнёрам',
    },
    contact: {
      pageTitle: 'Контактная информация',
      menuTitle: 'Контакты',
    },
  };
  