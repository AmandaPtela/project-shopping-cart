const secaoCarrinho = document.querySelector('.cart__items');
const getSavedCartItems = () => {
  const conteudo = localStorage.getItem('itens');
  secaoCarrinho.appendChild(conteudo);
  return conteudo;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
