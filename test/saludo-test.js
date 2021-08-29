var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var s = require('../saludo');

describe('Prueba de saludos Assets', function(){
    
    describe('Prueba de la funcion', function(){
        it('Probando ingresando un valor negativo', function(){
            resultado = s.sal(-2,2);
            assert.equal(resultado,0);
        })

        it('Probando ingresando un valor String en negativo', function(){
            resultado = s.sal(-2.2,'2.2');
            assert.equal(resultado,0);
        })

        it('Probando ingresando un valor String en negativo con decimal en coma', function(){
            resultado = s.sal(-2.2,'2 2');
            assert.equal(resultado,0);
        })
    })

    describe('Prueba de webservice', ()=>{
        it('Obtener la lista y debe entregar la suma, le paso url buena', async ()=>{
            resultado = await s.webservice('https://my-json-server.typicode.com/typicode/demo/posts');
            assert.equal(resultado.respuesta, 3);
        })

        it('Le pasamos una URL mala para que nos devuelva error: No pudo conectar', async ()=>{
            resultado = await s.webservice('https://my-json-server.typicodecc.com/typicode/demo/postss');
            assert.equal(resultado.respuesta, 'No pudo conectar');
        })
    })

    describe('Un array [[1,2,3],[4,5,6],[7,8]] debe quedar como [1,2,3,4,5,6]', ()=>{
        it('Probamos pasando el array [[1,2,3],[4,5,6],[7,8]] y nos debe entregar [1,2,3,4,5,6,7,8]', ()=>{
            resultado = s.arrayJoin([[1,2,3],[4,5,6],[7,8]]);
            assert.deepEqual(resultado,[1,2,3,4,5,6,7,8])
        })
    })

    describe('Letra que se repite más veces', () => {
        it('Le pasamos el siguiente string: hola como estan', () =>{
            resultado = s.WordsRepeats('hola como estan');
            assert.equal(resultado, 'o', 'Espera o porque se repite 3 veces')
        })
    })


})