const fetchProducts = async (product = 'computador') => {
  const baseUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const produto = await fetch(`${baseUrl}${product}`);
  const respostaJson = await produto.json();
  return respostaJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
