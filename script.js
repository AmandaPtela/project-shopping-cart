const secaoCarrinho = document.querySelector('.cart__items');
const local = document.querySelector('.items');
const total = document.querySelector('.total-price');
const arrayPrecos = [];
const carregamento = document.querySelector('.loading');

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
  local.removeChild(carregamento);
};

/* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

function calcular() {
  const calculo = arrayPrecos.reduce((acc, item) => {
    let acumulador = acc;
    acumulador += item;
    return acumulador;
  });
  return calculo;
}

function cartItemClickListener(event) {
  event.target.remove();
  const precoItem = event.target.innerHTML.split('$');
  function calculoRemovido() {
    const result = calcular() - precoItem[1];
    return result;
  }
  total.innerText = calculoRemovido();
  saveCartItems(secaoCarrinho.innerHTML);
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
  const itensss = createCartItemElement({
    sku: id,
    name: title,
    salePrice: price,
  });
  secaoCarrinho.appendChild(itensss);
  arrayPrecos.push(price);
  total.innerText = calcular();
  saveCartItems(secaoCarrinho.innerHTML);
};

const limparCarrinho = () => {
  const botaoLimpar = document.querySelector('.empty-cart');
  botaoLimpar.addEventListener('click', () => {
  secaoCarrinho.innerHTML = '';
  arrayPrecos.length = 0;
  total.innerText = 'Valor Total: ';
  });
};

window.onload = async () => { 
  await itens();
  const botoesItens = document.querySelectorAll('.item__add');
  botoesItens.forEach((item) => item.addEventListener('click', () => dadosCarrinho(item)));
  limparCarrinho();
  secaoCarrinho.innerHTML = getSavedCartItems();
  const arrayItens = document.querySelectorAll('.cart__item');
  arrayItens.forEach((li) => li.addEventListener('click', (event) => {
    event.target.remove();
  }));
};
