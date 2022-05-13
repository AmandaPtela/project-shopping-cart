require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Deve retornar um objeto', () => {
    expect(typeof fetchProducts()).toBe('object');
  });
/*   it("Deve retornar o array 'results' que contém todos os dados dos produtos", () => {
    expect(typeof fetchProducts()).toContain('object');
  }); */
});
