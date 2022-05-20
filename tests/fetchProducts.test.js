require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Deve retornar um objeto', async () => {
    await expect(typeof fetchProducts()).toBe('object');
  });
  it('Deve ser uma função', async () => {
    await expect(typeof fetchProducts).toBe('function');
  });
  it("Verifica se ao chamar a função com 'computador' como argumento, o mesmo assuma lugar no fim da URL para fazer a requisição", async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
});
