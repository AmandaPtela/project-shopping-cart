const saveCartItems = () => {
  localStorage.setItem('itens', '1');
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
