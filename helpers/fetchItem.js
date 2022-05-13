const fetchItem = (ItemId) => {
  const baseUrl = 'https://api.mercadolibre.com/items/';
  const item = fetch(`${baseUrl}${ItemId}`)
  .then((response) => response.json).then((data)=> {
    const obj = {
    sku: data.id,
    name: data.title,
    image: data.thumbnail,
    }
    return obj;
  })
  .catch((new Error('erro')));
  return item;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
