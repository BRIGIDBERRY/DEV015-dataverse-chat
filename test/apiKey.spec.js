// test/apiKey.spec.js
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {
  beforeEach(() => {
    localStorage.clear(); // Limpiar el localStorage antes de cada test
  });

  it('debería devolver el valor de la API Key', () => {
    const testKey = 'test-api-key';
    setApiKey(testKey);
    expect(getApiKey()).toBe(testKey);
  });

  it('debería devolver null si no hay API Key almacenada', () => {
    expect(getApiKey()).toBeNull();
  });
});
/*HITO3.3Pruebas para funciones de API Key --->En este archivo, desarrolla los tests
 correspondientes. Puedes utilizar el siguiente esquema como punto de partida:*/
/* test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    // Desarrolla el test correspondiente aquí
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
   // Desarrolla el test correspondiente aquí
  });
});*/