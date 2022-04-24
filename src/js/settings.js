export const select = {
  containerOf: {
    home: '.splash',
  },
  home: {
    homeTitle: '.page-title',
  },
};

export const settings = {
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};
