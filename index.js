// async/await
function fatorial(n){
    if (n < 0) return Promise.reject("O valor não pode ser negativo")
    let res = 1
    for(let i = 2; i <= n; i++) res *= i
    return Promise.resolve(res)
}

fatorial(5)
    .then((res) => {
        console.log('then', res)
    })
    .catch((err) => {
        console.log('catch', err)
    })
fatorial(-5)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

async function chamadaComAwait(){
    try{
        const f1 = await fatorial(5)
        console.log(f1)
        const f2 = await fatorial(-5)
        console.log(f2)
    } catch(err) {
        console.log(err)
    }
}

chamadaComAwait()

//não funciona
// try {
//     fatorial(-5)
//         .then((res) => {
//             console.log(res)
//         })
// } catch(err){
//     console.log(err)
// }



// // // promises

// function calculoRapidinho(numero){
//     return numero >= 0
//         ? Promise.resolve(numero*(numero+1)/2)
//         : Promise.reject("numero deve ser maior ou igual a zero")
// }

// calculoRapidinho(10)
//     .then((res) => {
//         console.log(res)
//         console.log('10')
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// calculoRapidinho(-10)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//         console.log('-10')
//     })
// console.log('esperando')



// // function calculoDemorado(numero){
// //     return new Promise(function (resolve, reject) {
// //         let res = 0
// //         if (numero > 0) {
// //             for (let i = 1; i <= numero; i++){
// //                 res += i
// //             }
// //             resolve(res)
// //         } else {
// //             reject("numero deve ser maior que zero")
// //         }
// //     })
// // }
// // calculoDemorado(-10)
// // .then((resultado) => {
// //     console.log(resultado)
// // }).catch((erro) => {
// //     console.log(erro)
// // })
// // console.log(calculoDemorado(-10))

// // // // callback hell
// // // const fs = require('fs')
// // // const abrirArquivo = function (nomeArquivo){
// // //     const exibirConteudo = function(erro, conteudo){
// // //         if(erro){
// // //             console.log(`Deu erro: ${erro}`)
// // //         } else {
// // //             console.log(conteudo.toString())
// // //             const dobro = conteudo.toString() * 2
// // //             const finalizar = function(erro){
// // //                 if(erro){
// // //                     console.log('Deu erro tentando salvar o arquivo.', erro)
// // //                 } else {
// // //                     console.log('Salvou o dobro com sucesso')
// // //                 }
// // //             }
// // //             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
// // //         }
// // //     }
// // //     fs.readFile(nomeArquivo, exibirConteudo)
// // // }
// // // abrirArquivo('arquivo.txt') 


// // // // // callback
// // // // const fs = require('fs')
// // // // const abrirArquivo = function (nomeArquivo){
// // // //     const exibirConteudo = function(erro, conteudo){
// // // //         if(erro){
// // // //             console.log(`Deu erro: ${erro}`)
// // // //         } else {
// // // //             console.log(conteudo.toString())
// // // //         }
// // // //     }
// // // //     fs.readFile(nomeArquivo, exibirConteudo)
// // // // }
// // // // abrirArquivo('arquivo.txt') 

// // // // function demorada(tempo){
// // // //     console.log(`demorada ${tempo}`)
// // // //     const atualMais2Segundos = new Date().getTime() + tempo
// // // //     while(new Date().getTime() <= atualMais2Segundos);
// // // //     const d = 8 + 4
// // // //     return d
// // // // }
// // // // setTimeout(function(){demorada(2000)}, 2000)
// // // // setTimeout(function(){demorada(1000)}, 1000)
// // // // console.log('chegou o fim do script principal')

// // // // // setTimeout(function(){
// // // // //     console.log('dentro da timeout', 0)
// // // // // })
// // // // // const a = new Date().getTime() + 1000
// // // // // while (new Date().getTime() <= a);
// // // // // console.log('fora da timeout')

// // // // // // // Síncrono e assíncrono

// // // // // // //modelo single thread
// // // // // // // console.log('Eu primeiro')
// // // // // // // console.log('Agora eu')
// // // // // // // console.log('Sempre vou ser a última')
// // // // // // // const a = 2 + 7
// // // // // // // const b = 5
// // // // // // // console.log(a + b)

// // // // // // function demorada(){
// // // // // //     const atualMais2Segundos = new Date().getTime() + 2000
// // // // // //     while(new Date().getTime() <= atualMais2Segundos);
// // // // // //     const d = 8 + 4
// // // // // //     return d
// // // // // // }
// // // // // // const a = 2 + 3
// // // // // // const b = 5 + 9
// // // // // // setTimeout(function(){
// // // // // //    const d = demorada()
// // // // // //    console.log(d) 
// // // // // // }, 500)

// // // // // // const e = 2 + a + b
// // // // // // console.log(e)

// // // // // // // //JSON de funções

// // // // // // // let calculadora = {
// // // // // // //     soma: (a, b) => a + b,
// // // // // // //     subtracao: function (a, b) {
// // // // // // //         return a - b
// // // // // // //     },
// // // // // // //     multiplicacao: (a, b) => a * b,
// // // // // // //     divisao: (a, b) => a / b,
// // // // // // //     potenciacao: (a, b) => a ** b,
// // // // // // //     logaritmo: (a, b) => Math.log(a, b)
// // // // // // // }
// // // // // // // operacoes = ['subtracao', 'soma', 'multiplicacao', 
// // // // // // //     'divisao', 'potenciacao', 'logaritmo']
// // // // // // // dados = [3, 2]
// // // // // // // for (let operacao of operacoes){
// // // // // // //     console.log(`${operacao}: ${calculadora[operacao](...dados)}`)
// // // // // // // }

// // // // // // // // //JSON Array

// // // // // // // // let concessionaria = {
// // // // // // // //     cnpj: "00011122210001-45",
// // // // // // // //     endereco: {
// // // // // // // //         logradouro: "Rua A",
// // // // // // // //         numero: 10,
// // // // // // // //         bairro: "Vila J"
// // // // // // // //     },
// // // // // // // //     veiculos: [
// // // // // // // //         {
// // // // // // // //             marca: 'Ford',
// // // // // // // //             modelo: 'Ecosport',
// // // // // // // //             anoDeFabricacao: 2018
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //             marca: 'Chevrolet',
// // // // // // // //             modelo: 'Onix',
// // // // // // // //             anoDeFabricacao: 2020
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //             marca: 'Volkswagen',
// // // // // // // //             modelo: 'Nivus',
// // // // // // // //             anoDeFabricacao: 2020
// // // // // // // //         }
// // // // // // // //     ]
// // // // // // // // }
// // // // // // // // for(let veiculo of concessionaria.veiculos){
// // // // // // // //     console.log(`\nMarca: ${veiculo.marca}`)
// // // // // // // //     console.log(`Modelo: ${veiculo.modelo}`)
// // // // // // // //     console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`)
// // // // // // // // }


// // // // // // // // // //JSON

// // // // // // // // // let pessoa = {
// // // // // // // // //     nome: 'João',
// // // // // // // // //     idade: 17
// // // // // // // // // }
// // // // // // // // // // acesso pode ser feito com ponto
// // // // // // // // // console.log("Me chamo " + pessoa.nome)
// // // // // // // // // // acesso pode ser feito com colchetes
// // // // // // // // // console.log("Me chamo " + pessoa['nome'])
// // // // // // // // // //pode misturar
// // // // // // // // // console.log(`Me chamo ${pessoa.nome} e tenho ${pessoa['idade']} anos.`)

// // // // // // // // // //objetos aninhados

// // // // // // // // // let pessoaComEndereco = {
// // // // // // // // //     nome: 'Maria',
// // // // // // // // //     idade: 21,
// // // // // // // // //     endereco: {
// // // // // // // // //         logradouro: "Rua B",
// // // // // // // // //         numero: 121
// // // // // // // // //     }
// // // // // // // // // }

// // // // // // // // // console.log(pessoaComEndereco.endereco.logradouro)
// // // // // // // // // console.log(pessoaComEndereco['endereco'].logradouro)
// // // // // // // // // console.log(pessoaComEndereco.endereco['logradouro'])
// // // // // // // // // console.log(pessoaComEndereco['endereco']['logradouro'])

// // // // // // // // // let campos = ['logradouro', 'numero']
// // // // // // // // // for(let campo of campos){
// // // // // // // // //     console.log(pessoaComEndereco.endereco[campo])
// // // // // // // // // }
// // // // // // // // // // // escopo interno e externo

// // // // // // // // // // function f() {
// // // // // // // // // //     let nome = 'João'
// // // // // // // // // //     function g(){
// // // // // // // // // //         console.log(nome)
// // // // // // // // // //     }
// // // // // // // // // //     g()
// // // // // // // // // // }

// // // // // // // // // // f()

// // // // // // // // // // /* Uma função interna em conjunto com as variáveis de seu escopo externo
// // // // // // // // // //    é o que chamamos de closure.
// // // // // // // // // //    Exemplos:
// // // // // // // // // // */

// // // // // // // // // // function ola(){
// // // // // // // // // //     let nome = 'José'
// // // // // // // // // //     return function() {
// // // // // // // // // //         console.log(nome)
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // let olaResult = ola()
// // // // // // // // // // olaResult()

// // // // // // // // // // function saudacoesFactory(saudacao, nome){
// // // // // // // // // //     return function(){
// // // // // // // // // //         console.log(`${saudacao}, ${nome}`)
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // let olaMaria = saudacoesFactory('Olá', 'Maria')
// // // // // // // // // // let tchauMaria = saudacoesFactory('Tchau', 'Maria')

// // // // // // // // // // olaMaria()
// // // // // // // // // // tchauMaria()

// // // // // // // // // // /* os efeitos do closure, porém, podem trazer resultados
// // // // // // // // // //    pouco intuitivos
// // // // // // // // // // */

// // // // // // // // // // function eAgora(){
// // // // // // // // // //     let cont = 1
// // // // // // // // // //     function f1() {
// // // // // // // // // //         console.log(cont)
// // // // // // // // // //     }
// // // // // // // // // //     cont++
// // // // // // // // // //     function f2() {
// // // // // // // // // //         console.log(cont)
// // // // // // // // // //     }
// // // // // // // // // //     //JSON com as duas funções
// // // // // // // // // //     return {f1, f2}
// // // // // // // // // // }

// // // // // // // // // // let eAgoraResult = eAgora()
// // // // // // // // // // console.log(eAgoraResult)

// // // // // // // // // // eAgoraResult.f1()
// // // // // // // // // // eAgoraResult.f2()

// // // // // // // // // // // // closure
// // // // // // // // // // // /*uma função pode ser atrubuída 
// // // // // // // // // // //   a uma variável*/

// // // // // // // // // // // let umaFuncao = function () {
// // // // // // // // // // //     console.log('Fui armazenada em uma variável.')
// // // // // // // // // // // }
// // // // // // // // // // // //pode ser chamada assim
// // // // // // // // // // // umaFuncao()
// // // // // // // // // // // /* f é uma função que recebe outra função como 
// // // // // // // // // // //    parâmetro e por isso é uma função de mais
// // // // // // // // // // //    alta ordem (HOF). 
// // // // // // // // // // //    Ela executa qualquer função sem parâmetros
// // // // // // // // // // //    que ela receba.
// // // // // // // // // // // */
// // // // // // // // // // // function f(funcao){
// // // // // // // // // // //     funcao()
// // // // // // // // // // // }
// // // // // // // // // // // f(umaFuncao)
// // // // // // // // // // // f((n = 10) => console.log(3 * n))
// // // // // // // // // // // f(function(){
// // // // // // // // // // //     console.log('Fui criada aqui mesmo.')
// // // // // // // // // // // })

// // // // // // // // // // // /* g também é HOF pois retorna uma função */
// // // // // // // // // // // function g() {
// // // // // // // // // // //     function outraFuncao(){
// // // // // // // // // // //         console.log('Fui criada por g.')
// // // // // // // // // // //     }
// // // // // // // // // // //     return outraFuncao
// // // // // // // // // // // }

// // // // // // // // // // // /* outras formas de executar a função outraFuncao
// // // // // // // // // // //    definida pela funcao g */
// // // // // // // // // // // f(g())
// // // // // // // // // // // g()()
// // // // // // // // // // // //f(g)() não funciona
// // // // // // // // // // // //f(g()()) não funciona
// // // // // // // // // // // //f(1) não funciona


// // // // // // // // // // // // // //funções definidas pelo usuário

// // // // // // // // // // // // //arrow functions
// // // // // // // // // // // // const hello = () => console.log('Hello')
// // // // // // // // // // // // hello()
// // // // // // // // // // // // console.log(hello)
// // // // // // // // // // // // console.log(hello())

// // // // // // // // // // // // const dobro = (valor) => valor * 2
// // // // // // // // // // // // console.log(dobro(10))

// // // // // // // // // // // // const triplo = (valor) => {
// // // // // // // // // // // //     return valor * 3
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log(triplo(10))

// // // // // // // // // // // // const ehPar = (n) => {
// // // // // // // // // // // //     return n%2 === 0
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log(ehPar(10))

// // // // // // // // // // // // // //método tradicional
// // // // // // // // // // // // // function hello() {
// // // // // // // // // // // // //     console.log('Oi')
// // // // // // // // // // // // // }
// // // // // // // // // // // // // hello()

// // // // // // // // // // // // // function hello(nome) {
// // // // // // // // // // // // //     console.log('Oi, ' + nome)
// // // // // // // // // // // // // }
// // // // // // // // // // // // // hello('Pedro')

// // // // // // // // // // // // // function soma(a , b){
// // // // // // // // // // // // //     return a + b
// // // // // // // // // // // // // }

// // // // // // // // // // // // // console.log(soma(2, 3))
// // // // // // // // // // // // // const res = soma('2', 3)
// // // // // // // // // // // // // console.log(res)

// // // // // // // // // // // // // //funções anônimas
// // // // // // // // // // // // // const dobro = function(n) {
// // // // // // // // // // // // //     return 2 * n
// // // // // // // // // // // // // }
// // // // // // // // // // // // // console.log(dobro(10))

// // // // // // // // // // // // // //valores default (padrão)
// // // // // // // // // // // // // const triplo = function(n = 5){
// // // // // // // // // // // // //     return 3*n
// // // // // // // // // // // // // }
// // // // // // // // // // // // // console.log(triplo(10))
// // // // // // // // // // // // // console.log(triplo())

// // // // // // // // // // // // // // //funções sobre vetores
// // // // // // // // // // // // // // const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// // // // // // // // // // // // // // //filter
// // // // // // // // // // // // // // const apenasComA = nomes.filter((n) => n.startsWith('A'))
// // // // // // // // // // // // // // console.log(apenasComA)
// // // // // // // // // // // // // // const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // // // // // // // // // // // // // pares = lista.filter((x) => x%2===0)
// // // // // // // // // // // // // // console.log(pares)

// // // // // // // // // // // // // // //map
// // // // // // // // // // // // // // const iniciais = nomes.map((nome) => nome.charAt(0))
// // // // // // // // // // // // // // console.log(iniciais)
// // // // // // // // // // // // // // const sequencia = lista.map((x) => Math.exp(x))
// // // // // // // // // // // // // // console.log(sequencia)

// // // // // // // // // // // // // // //reduce
// // // // // // // // // // // // // // const soma = lista.reduce((ac, v) => ac + v)
// // // // // // // // // // // // // // console.log(soma)


// // // // // // // // // // // // // // // //vetores
// // // // // // // // // // // // // // // v1 = []
// // // // // // // // // // // // // // // v1[0] = 3.4
// // // // // // // // // // // // // // // v1[2] = 2
// // // // // // // // // // // // // // // v1[10] = 'abc'
// // // // // // // // // // // // // // // console.log(v1)
// // // // // // // // // // // // // // // console.log(v1.length)
// // // // // // // // // // // // // // // //iterando com for
// // // // // // // // // // // // // // // for(let i = 0; i < v1.length; i++){
// // // // // // // // // // // // // // //     console.log(v1[i])
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // //posso reatribuir, pois é variável
// // // // // // // // // // // // // // // v1 = [3.4, 2, 'abc']
// // // // // // // // // // // // // // // v2 = v1
// // // // // // // // // // // // // // // console.log(v2)
// // // // // // // // // // // // // // // console.log(v2.length)
// // // // // // // // // // // // // // // console.log('v1 antes =',v1)
// // // // // // // // // // // // // // // console.log('v2 antes =', v2)
// // // // // // // // // // // // // // // v2[1] = 3
// // // // // // // // // // // // // // // console.log('v1 depois =',v1)
// // // // // // // // // // // // // // // console.log('v2 depois =', v2)
// // // // // // // // // // // // // // // ///iterando com for-each
// // // // // // // // // // // // // // // for(indice in v2){
// // // // // // // // // // // // // // //     console.log(v2[indice])
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // //iterando com for-of
// // // // // // // // // // // // // // // for(valor of v2){
// // // // // // // // // // // // // // //     console.log(valor)
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // //vetor constante
// // // // // // // // // // // // // // // const v3 = []
// // // // // // // // // // // // // // // v3[0] = 'a'
// // // // // // // // // // // // // // // v3[2] = 1
// // // // // // // // // // // // // // // //v3 = ['a', 1] dá erro
// // // // // // // // // // // // // // // console.log(v3)
// // // // // // // // // // // // // // // console.log(v3.length)
// // // // // // // // // // // // // // // const v4 = [0, 1.2, 'j']
// // // // // // // // // // // // // // // console.log(v4)
// // // // // // // // // // // // // // // console.log(v4.length)
// // // // // // // // // // // // // // // // //comparação
// // // // // // // // // // // // // // // // console.log(1, 1 == 1)//true
// // // // // // // // // // // // // // // // console.log(2, 1 == '1')//true
// // // // // // // // // // // // // // // // console.log(3, 1 === '1')//false

// // // // // // // // // // // // // // // // console.log(4, true == 1)
// // // // // // // // // // // // // // // // console.log(5, true == '1')
// // // // // // // // // // // // // // // // console.log(6, true === 1)
// // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // console.log(7, 0 == false)
// // // // // // // // // // // // // // // // console.log(8, 2 == false)
// // // // // // // // // // // // // // // // console.log(9, -3.1415 == false)

// // // // // // // // // // // // // // // // console.log(10, 2 == true)
// // // // // // // // // // // // // // // // console.log(11, -3.1415 == true)

// // // // // // // // // // // // // // // // console.log(12, 1 == [1])
// // // // // // // // // // // // // // // // console.log(13, null == null)
// // // // // // // // // // // // // // // // console.log(14, null == undefined)
// // // // // // // // // // // // // // // // console.log(15, [] == false)
// // // // // // // // // // // // // // // // console.log(16, [] == [])

// // // // // // // // // // // // // // // // // //coerção
// // // // // // // // // // // // // // // // // const n1 = 2
// // // // // // // // // // // // // // // // // const n2 = '3'
// // // // // // // // // // // // // // // // // //coerção implícita
// // // // // // // // // // // // // // // // // const n3 = n1 + n2
// // // // // // // // // // // // // // // // // console.log(n3)
// // // // // // // // // // // // // // // // // //coerção explícita
// // // // // // // // // // // // // // // // // const n4 = n1 + Number(n2)
// // // // // // // // // // // // // // // // // console.log(n4)

// // // // // // // // // // // // // // // // // console.log(n1 + Number(n2))


// // // // // // // // // // // // // // // // // // //declaração de constantes  
// // // // // // // // // // // // // // // // // // const nome = "José"
// // // // // // // // // // // // // // // // // // const idade = 27
// // // // // // // // // // // // // // // // // // console.log(nome, idade)

// // // // // // // // // // // // // // // // // // const sexo = "M"
// // // // // // // // // // // // // // // // // // const endereco = 'Rua K, 12'
// // // // // // // // // // // // // // // // // // const endereco2 = "Rua Olho D'Água, 12"
// // // // // // // // // // // // // // // // // // const citacao = '"Ser ou não ser..."'
// // // // // // // // // // // // // // // // // // console.log(sexo, endereco, endereco2, citacao)

// // // // // // // // // // // // // // // // // // //declaração de variáveis
// // // // // // // // // // // // // // // // // // //let: variável local com escopo de bloco
// // // // // // // // // // // // // // // // // // let a = 2
// // // // // // // // // // // // // // // // // // let b = 'abc'
// // // // // // // // // // // // // // // // // // console.log(a,b)
// // // // // // // // // // // // // // // // // // b = 3
// // // // // // // // // // // // // // // // // // console.log(a,b)
// // // // // // // // // // // // // // // // // // /* variável global com escopo na função em que 
// // // // // // // // // // // // // // // // // //    foi criada ou no script todo */
// // // // // // // // // // // // // // // // // // var c = 2 + 3
// // // // // // // // // // // // // // // // // // var d = "abcd"
// // // // // // // // // // // // // // // // // // console.log(c, d)
// // // // // // // // // // // // // // // // // // console.log('nome3:', nome3)
// // // // // // // // // // // // // // // // // // let idade2 = 18
// // // // // // // // // // // // // // // // // // if (idade2 >= 18){
// // // // // // // // // // // // // // // // // //     let nome2 = "João"
// // // // // // // // // // // // // // // // // //     var nome3 = "Maria"
// // // // // // // // // // // // // // // // // //     console.log('nome2:', nome2)
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // //console.log('nome2:', nome2)
// // // // // // // // // // // // // // // // // // console.log('nome3:', nome3)

// // // // // // // // // // // // // // // // // // var linguagem = 'Javascript'
// // // // // // // // // // // // // // // // // // //concatenação
// // // // // // // // // // // // // // // // // // console.log('Aprendendo ' + linguagem)
// // // // // // // // // // // // // // // // // // //interpolação
// // // // // // // // // // // // // // // // // // let linguagem2 = 'Java'
// // // // // // // // // // // // // // // // // // console.log(`Já aprendi ${linguagem2} anteriormente.)