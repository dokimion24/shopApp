class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}



class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding product to cart');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt"${this.product.title}"/>
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://royaldesign.kr/image/9/ferm-living-kelim-cushion-50x50-cm-squares-0?w=800&quality=80',
      'A soft pillow',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://www.trdst.com/_next/image?url=https%3A%2F%2Fimages.homing.haus%2Fproduct%2F1000078887%2Fmain_20221125224122&w=1920&q=75',
      'A carpet which you might like - or not.',
      59.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.querySelector('#app');
    const productList = document.createElement('ul');
    productList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      productList.append(prodEl);
    }
    renderHook.append(productList);
  }
}

const productList = new ProductList();
productList.render();
