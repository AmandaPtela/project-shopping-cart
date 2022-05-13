const fetchItem = (ItemId) => {
  const baseUrl = 'https://api.mercadolibre.com/items/';
  const item = fetch(`${baseUrl}${ItemId}`)
  .then((response) => response.json).then((data)=> data)
  .catch((new Error('erro')));
  return item;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
