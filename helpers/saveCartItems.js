const saveCartItems = (item) => {
  localStorage.setItem('itens', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
