const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

//definir endpost POST /eventos
//extrair o evento da requisicao
//enviar o evento para ambos os mss de lembretes e observacoes
//usando a axios

app.post('/eventos', async function(req, res){
    const evento = req.body
    try{
        await axios.post('http://localhost:4000/eventos')
    }
    catch(e){}
    try{
        await axios.post('http://localhost:50001/eventos')
    }
    catch(e){}
    res.end()
})

//colocar o barramento de eventos em funcionamento na porta 100000
const port = 10000
app.listen(port, () => { `Barramento. Porta ${port}.`})