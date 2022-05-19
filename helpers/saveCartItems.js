const secaoCarrinho = document.querySelector('.cart__items');
const saveCartItems = () => {
  localStorage.setItem('itens', secaoCarrinho.children);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
