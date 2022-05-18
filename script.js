const secaoCarrinho = document.querySelector('.cart__items');
const local = document.querySelector('.items');
// const carrinho = document.querySelectorAll('li');
const arrayPrecos = [];

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
console.log(arrayPrecos);
function cartItemClickListener(event) {
  secaoCarrinho.removeChild(event.target);
/*   arrayPrecos.slice(EventTarget);
  console.log(arrayPrecos);
  // const total = document.querySelector('.total-price');
  total.innerText = 'Valor total '; */
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
// tentar fazer com o array dos itens ao invés de array separado
/* function calcular() {
  const calculo = carrinho.reduce((acc, item) => {
    acc = acc + item;
    return acc;
  });
  return calculo;
}; */

const dadosCarrinho = async (item) => {
  const sku = item.parentElement.firstChild.innerText;
  const { id, title, price } = await fetchItem(sku);
  secaoCarrinho.appendChild(createCartItemElement({
    sku: id,
    name: title,
    salePrice: price,
  }));

// FAZER CALCULO PROS PREÇOS

  calcular();
  const total = document.querySelector('.total-price');
  total.innerText = calcular();
};

// Apagar lista
const limparCarrinho = () => {
  const botaoLimpar = document.querySelector('.empty-cart');
  botaoLimpar.addEventListener('click', () => {
  secaoCarrinho.innerHTML = '';
  // saveCartItems(secaoCarrinho.innerHTML);
  const total = document.querySelector('.total-price');
  arrayPrecos.length = 0;
  total.innerText = 'Valor Total: ';
  });
};

window.onload = async () => { 
  await itens();
  const botoesItens = document.querySelectorAll('.item__add');
  botoesItens.forEach((item) => item.addEventListener('click', () => dadosCarrinho(item)));
  limparCarrinho();
};
