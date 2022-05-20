require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Deve ser uma função', async () => {
    await expect(typeof fetchItem).toBe('function');
  });
  it("Verifica se ao chamar a função com 'MLB1615760527' como argumento, o mesmo assuma lugar no fim da URL para fazer a requisição", async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  }); 
  it ('Verifica se ao passar um parâmetro a função é chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled(); 
  });
});
