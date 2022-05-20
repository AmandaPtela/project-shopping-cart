const baseUrl2 = 'https://api.mercadolibre.com/items/';
const fetchItem = async (itemId) => { 
  const produto = await fetch(`${baseUrl2}${itemId}`);
  const respostaJson = await produto.json();
  if(!respostaJson){
    throw new Error('Requisição falhou');
  }
  return respostaJson;
};
fetchItem('MLB1341706310');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
