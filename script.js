//const { fetchProducts } = require("./helpers/fetchProducts");

// Cria imagem do produto
function createProductImageElement() {
  //const imagem = fetchProducts();
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = 'http://http2.mlstatic.com/D_704139-MLB47542929423_092021-I.jpg';
  return img;
}
createProductImageElement();
// Cria elemento
function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  const section = document.createElement('section')
  e.className = className
  e.innerText = innerText;
  section.appendChild(e);
}

// Adiciona item na página
function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui opa começandoa agr
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

window.onload = () => { };
