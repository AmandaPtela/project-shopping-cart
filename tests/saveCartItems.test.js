const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Verifica se o método localStorage.setItem é chamado', () => {
    saveCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
