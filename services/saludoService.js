class salud{

    constructor(datos = {}){
        this.nombre = datos.nombre;
        this.apellido = datos.apellido;
    }

    set Apellido(apellido){
        this.apellido = apellido;
    }

    get Apellido(){
        return this.apellido;
    }

    CuentaElementos(a, b){
        return a*b;
    }
}

let suma = (a,b) =>{
    return a+b;
}

/*module.exports = salud

exports.suma = suma;*/
export {
    salud
}