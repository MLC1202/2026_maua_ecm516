const dotenv = require('dotenv').config()
const axios = require("axios")
//sua chave de api aqui
const appid = process.env.API_KEY
console.log(appid)
//cidade desejada
const q = 'Itu'
//unidades de temperatura em graus celsius
const units = 'metric'
//idioma
const lang = 'pt_BR'
//quantidade de resultados
const cnt = '10'
//url do site
const site = 'https://api.openweathermap.org'
//endpoit
const endpoint = '/data/2.5/forecast'
//url de acesso
const url = `${site}${endpoint}?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`

axios
    .get(url)
    .then((res) => {
        console.log(res)
        return res.data
    })
    .then((res) => {
        console.log(res.cnt)
        return res['list']
    })
    .then((res) => {
        console.log(res)
        return res
    })
    .then((res) => {
        for(let previsao of res){
            console.log(`
                ${new Date(previsao.dt * 1000).toLocaleString()},
                ${'Min :' + previsao.main.temp_min}\u00B0C,
                ${'Max :' + previsao.main.temp_max}\u00B0C,
                ${'Umid:' + previsao.main.humidity}%,
                ${previsao.weather[0].description}

                `)
        }
        return res
    })
    .then((res) => {
        //verifica quantas previsões têm sensação térmica acima de 30 graus
        const lista = res.filter(r => r.main.feels_like >= 30);
        console.log (`${lista.length} previsão(ões) te(ê)m sensação térmica acima de 30 graus`)
    })
    .catch((err) => {
        console.log(err)
    })