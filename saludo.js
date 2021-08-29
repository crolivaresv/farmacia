
const https = require('https');

exports.sal = function(a,b){
     //console.log(parseInt(b))
    return parseInt(a)+parseInt(b);
}

let requester = (url)=>{
    return new Promise((resolve, reject)=>{
        
        let request = https.get(url,(res)=>{
            let datos = [];
            res.on('data',(d)=>{
                datos.push(d);
            })

            res.on('end', (end)=>{
                resolve(JSON.parse(datos));
            })

            
            
        }).end().on('error', (err)=>{
            reject('No pudo conectar')
        })
    })
}



exports.webservice = async function(web){
    let resultado = {}
    const consulta = await requester(web).then((data)=>{
        resultado = {'respuesta':data.length}
    }).catch((error)=>{
        resultado = {'respuesta': error}
    })
    
    return resultado
    
}

//Un array [[1,2,3],[4,5,6],[7,8]] debe quedar como [1,2,3,4,5,6]
let unirArray = (arr)=>{
    let nuevoArray = arr.reduce((previo, actual)=>{
        return previo.concat(actual)
    },[]);
    return nuevoArray;
}

//Cuenta la cantidad de letras que se repiten

let buscaenArraySuma = (anterior,actual)=>{
    if(anterior[actual])
        anterior[actual] = anterior[actual]+1;
    else
        anterior[actual] = 1
    return anterior;
}

let WordsRepeats = (str) => {
    let splitted = str.replace(/ /g,'').split('');
    let convertido_array = Object.entries(splitted.reduce(buscaenArraySuma, []))
    let d =convertido_array.reduce((anterior,actual)=> actual[1] > anterior[1] ? actual[0] : anterior[0])
    
    return d
}

let Reversa = str => {
    let splitted = str.split('');
    let reversa = splitted.reverse().join('')
    return reversa
}
console.log(Reversa('hola'))

exports.WordsRepeats = WordsRepeats;

exports.arrayJoin = unirArray;
