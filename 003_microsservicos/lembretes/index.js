const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const lembretes = {}
let contador = 0

app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

app.post('/lembretes', async (req, res) => { // Adicionado 'async'
    contador++
    const { texto } = req.body
    lembretes[contador] = { contador, texto }
    
    try {
        await axios.post('http://localhost:10000/eventos', {
            tipo: 'LembreteCriado',
            dados: {
                contador,
                texto
            }
        })
    } catch (error) {
        console.error('Erro ao enviar evento:', error.message)
    }

    res.status(200).send(lembretes[contador])
})

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000.')
})