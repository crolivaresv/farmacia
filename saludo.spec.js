

var s = require('./saludo')
//var saludo = require('./services/saludoService')
import {salud} from './services/saludoService'
let iniciaServicio = new salud({nombre: 'Cristian', apellido: 'Olivares'});

test('Probando El campo', ()=>{
    let resultado = s.sal(2,2)
    expect(resultado).toBe(4)
})

describe('Probando servicio saludo', ()=>{
    test('Probando servicio Saludo', () => {
    
        let resultado = iniciaServicio.CuentaElementos(5,5);
        expect(resultado).toBe(25);
   
    })

    test('prueba trae Apellido olivares', ()=>{
        let resultado = iniciaServicio.Apellido
        expect(resultado).toBe('Olivares');
    })

    test('Probando cambiando el apellido', ()=>{
        iniciaServicio.Apellido = 'Vasquez'
        let resultado = iniciaServicio.Apellido;
        expect(resultado).toEqual('Vasquez')
    })
})
