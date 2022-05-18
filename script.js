const secaoCarrinho = document.querySelector('.cart__items');
const local = document.querySelector('.items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
}

const itens = async () => {
  const produtos = await fetchProducts('computador');
  produtos.results.map((product) => {
    const itemNovo = createProductItemElement({
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    });
    return local.appendChild(itemNovo);
  });
};

/* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

function cartItemClickListener(event) {
  secaoCarrinho.removeChild(event.target);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const dadosCarrinho = async (item) => {
  const sku = item.parentElement.firstChild.innerText;
  const { id, title, price } = await fetchItem(sku);
  secaoCarrinho.appendChild(createCartItemElement({
    sku: id,
    name: title,
    salePrice: price,
  }));
};
// PAREI AQUIIIIIIIIII / FAZER CALCULO PROS PREÇOS
// const calculoPrecos = async () => {};

// Apagar lista
const limparCarrinho = () => {
  const botaoLimpar = document.querySelector('.empty-cart');
  botaoLimpar.addEventListener('click', () => {
  const itensCarrinho = document.querySelector('li');
  secaoCarrinho.remove(itensCarrinho);
  });
};

window.onload = async () => { 
  await itens();
  const botoesItens = document.querySelectorAll('.item__add');
  botoesItens.forEach((item) => item.addEventListener('click', () => dadosCarrinho(item)));
  limparCarrinho();
};
