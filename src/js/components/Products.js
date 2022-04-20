import { settings } from '../settings';

class Product {
  constructor() {
    const thisProduct = this;

    thisProduct.getElemenets();
  }

  getElemenets() {
    const thisProduct = this;

    thisProduct.dom = {
      products: document.querySelectorAll(settings.db.products),
    };

    console.log('products: ', thisProduct.dom.products);
  }
}

export default Product;
