const request = require('supertest'),
      app  = require('../');

describe('Probamos GET de principal', ()=>{
    it('Probamos el principal /', (done)=>{
        request(app).get('/')
        .expect(200)
        .expect(/como estas/,respuesta);
    })
})