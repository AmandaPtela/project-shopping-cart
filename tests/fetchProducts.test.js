require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Deve retornar um objeto', () => {
    expect(typeof fetchProducts()).toBe('object');
  });
  it ('Deve retornar um objeto com 3 chaves: SKU, name, salePrice', () => {
    expect(fetchProducts()).toEqual({sku, name, salePrice});
  })
});
