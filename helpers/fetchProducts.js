const fetchProducts = async (product = 'computador') => {
  const baseUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const produto = await fetch(`${baseUrl}${product}`);
  const respostaJson = await produto.json();
  if(!respostaJson){
    throw new Error('Requisição falhou');
  }
  return respostaJson;
};
fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
