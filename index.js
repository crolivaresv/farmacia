const express = require('express')
const app = express();

app.get('/', (req,res)=>{
    res.json({hola:'hola'})
})

app.listen(3100);
 
