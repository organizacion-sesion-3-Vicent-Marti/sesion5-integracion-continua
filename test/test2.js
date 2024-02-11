// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función esPar', function() {
  operaciones.esPar.should.be.a.Function();
  should.equal(operaciones.esPar(1), false);
  should.equal(operaciones.esPar(3), false);
  should.equal(operaciones.esPar(5), false);
  // añadimos esta línea para ver como afecta en el repositorio remoto
  //should.equal(operaciones.esPar(7), false);
});


