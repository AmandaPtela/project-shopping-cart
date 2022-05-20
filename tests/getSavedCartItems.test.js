const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');
// Feito com consulta ao https://jestjs.io/docs/expect
describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se o método localStorage.getItem é chamado ao recerregar a página', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
