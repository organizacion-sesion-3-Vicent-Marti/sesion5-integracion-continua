// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función esPar', function() {
	assert.equal(operaciones.esPar(2), true);
	assert.equal(operaciones.esPar(4), true);
	assert.equal(operaciones.esPar(6), true);
});



