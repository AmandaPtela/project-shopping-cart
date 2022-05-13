const fetchProducts = () => {
  const baseUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const produto = fetch(`${baseUrl}`)
  .then((response) => response.json).then((data) => data)
  .catch((new Error('erro')));
  return produto;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
