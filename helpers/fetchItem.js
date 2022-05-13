const fetchItem = () => {
  const baseUrl = 'https://api.mercadolibre.com/items/';
  const item = fetch(`${baseUrl}MLB1341706310`)
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
fetchItem('MLB1341706310');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
