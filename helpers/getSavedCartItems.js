const getSavedCartItems = () => {
  const conteudo = localStorage.getItem('itens');
  return conteudo;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
