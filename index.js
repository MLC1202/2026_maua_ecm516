// // Declarando constantes
// const nome = "pedro"
// console.log(nome)

// const idade = 17
// console.log(idade)

// console.log(typeof(idade))

// // Declarando variaveis
// let a = 2
// console.log(a)
// let passouDeAno = true
// console.log(passouDeAno)
// a = 3
// console.log(a)
// let b
// console.log(b)
// b = 1.5
// console.log(b)

// // var tbm existe (NAO USAR!)
// var c = 2
// c = 3
// console.log(c)

// var linguagem = "javascript"
// console.log('Aprendendo ' + linguagem)

// linguagem = "java" //pode colocar o var dnv ou nao
// console.log(`Aprendendo ${linguagem} agora!`) //interpolacao

// var idade = 18
// console.log(`Oi, ${nome}`) 
// if (idade >= 18){
//     var nome = 'Joao'
//     console.log(`tchau, ${nome}`)
// }

// let a = 2
// console.log(a)
// console.log(typeof(a))
// a = "dois"
// console.log(a)
// console.log(typeof(a))


// coercao implicita e explicita
// const n1 = 2
// const n2 = '3'

// const n3 = n1 + n2
// console.log(n3) //coercao implicita

// const n4 = n1 + Number(n2)
// console.log(n4) //coercao explicita

//operadores de comparacao por igualdade: == e ===
// console.log(2 == 2) //true, compara o valor
// console.log(2 === 2) //true, compara o valor e o tipo
// console.log(2 == '2') //true, compara o valor
// console.log(2 === '2') //false, compara o valor e o tipo

//colecoes
// v1 = [10]
// console.log(v1.length)
// v1[0] = 2
// console.log(v1.length)
// v1[1] = "abc"
// console.log(v1.length)
// v1[10] = "Joao"
// console.log(v1.length)
// console.log(v1)
// for (let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }

//funcoes
//function e arrow function
// function hello(){
//     console.log("hello, world!")
// }
// hello()
// function hello (nome){
//     console.log(`hello, ${nome}!`)
// }
// hello("pedro")

// function soma(a, b){
//     return a + b
// }
// const resultado = soma(2, 3)
// console.log(resultado)

// const dobro = function (n){
//     return 2 * n
// }
// console.log(dobro(4))

// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

// const falarOi = () => {console.log("hello")}
// falarOi()

// const ola = nome => {console.log(`hello, ${nome}!`)}
// ola('pedro')

// const somar = (a, b) => a + b // ou {return a + b} ou a + b
// console.log(somar(2, 3))

//Listas/ vetores/ arrays/ arranjos
// const nomes = ["Ana Maria", "Rodrigo", "Antonio"]
// const apenasComA = nomes.filter(nome => nome.startsWith('A') )
// console.log(apenasComA)

// const iniciais = nomes.map(function(nome){return nome.charAt(0)})
// 
// const res = nomes.every(n => n.startsWith('A'))
// console.log(res)

// const numeros = [1, 2, 3, 4, 5]
// const res = numeros.reduce((ac, v) => ac + v)
// console.log(res)

//closure

// let umaFuncao = function(){
//     console.log(" FUi armazenada em uma variável")
//     return () => 'oi'
// }
// umaFuncao()
// function f(funcao){
//     console.log(funcao())
// }
// f(umaFuncao())

// function f (funcao){
//     funcao()
// }

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         return () => "A"

//     }
//     return outraFuncao
// }
// console.log(g()())


// const res = g()
// f(res)
// console.log(res())

// function f(idade){
//     let nome = 'Joao'
//     function g(){
//         console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
//     }
//     return g

// }
// const res = f(18)
// res()

// const eAgora = () => {
// let cont = 1
// const f1 = () => console.log(cont)
// cont++
// const f2 = () => console.log(cont)
// cont++
// return {f1, f2}
// }
// const res = eAgora()
// res.f1()
// res.f2()

//JSON: JavaScript Object Notation
//Uma pessoa que se chama joao e tem 17 anos
// let pessoa = {
//     nome: 'Joao',
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

//Uma pessoa chamada maria, tem 21 anos e mora na rua B, numero 50
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         rua: 'B',
//         numero: 50
//     }
// }
// console.log(pessoa.nome)
// console.log(pessoa['idade'])
// console.log(pessoa.endereco.rua)
// console.log(pessoa.endereco['numero'])
//promises
//1 + 2 + 3 + ... + n
//demorando...
// const calculoDemorado = (n) => {
//     let cont = 0
//     for(let i = 1; i <= n; i++)
//         cont += i
//     return cont
// }
// const res = calculoDemorado(1000)
// console.log(res)


//CPU Bound: predominantemente caracterizada por ciclos de cpu
//IO Bound: predominantemente caracterizada por operações de entrada e saída
// const fs = require('fs')
// const nomeArquivo = 'arquivo.txt'
// //função callback
// const exibirConteudo = (erro, conteudo) => {
//     console.log("A")
//     if(erro){
//         console.log(`Deu erro: ${erro}`)
//     }
//     else{
//         console.log(`Conteúdo: ${conteudo}`)
//         const dobro = Number(conteudo.toString()) * 2
//         //mais uma função callback
//         const finalizar = (erro) => {
//             console.log(erro ? "Deu erro ao escrever o dobro" : "Ok, escreveu o dobro")
//             console.log('C')
//             const exibirDobro = (erro, conteudo) => {
//                 console.log("E")
//                 console.log(erro ? "Deu erro lendo o dobro": `Dobro: ${conteudo.toString()}`)
//             }
//             fs.readFile('dobro.txt', exibirDobro)
//             console.log('F')
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         console.log('D')
//     }
// }
// fs.readFile(nomeArquivo, exibirConteudo)
// console.log("B")
// function demorada(tempo){
//     const dataAtualMaisTempo = new Date().getTime() + tempo
//     while(new Date().getTime() <= dataAtualMaisTempo);
//     const d = 8 + 2 * 6
//     console.log(`Demorada com tempo: ${tempo}`)
//     return d
// }
// setTimeout(() => {
//     demorada(5000)
// }, 5000)

// setTimeout(() => {
//     demorada(1000)
// }, 1000)

// console.log('Fim do script principal')



// setTimeout(() => {
//     console.log("Agendada pela setTimeout")
// }, 0)
// const dataAtualMais5Segundos = new Date().getTime() + 5000
// while(new Date().getTime() <= dataAtualMais5Segundos);
// console.log("Terminando o script principal...")

// const a = 2 + 3
// const b = 6 * 1

// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 500)

// const e = a + b * 2
// console.log(`e: ${e}`)
// const a = 5 + 6
// const b = 9 * 4
// console.log(a + b)

// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log("Sempre serei a última...:(")


//Uma calculadora realiza as quatro operações fundamentais
//soma: representada por uma arrow function que faz return
//subtração: representa por uma arrow function sem return
//multiplicação: function regular
//divisão: você escolhe
//todas elas operam com dois operandos

// const calculadora = {
//     operacoes: {
//         soma: (a, b) => {return a + b},
//         subtracao: (a, b) => a - b,
//         multiplicacao: function (a, b){
//             return a * b
//         },
//         divisao: (a, b) => a / b    
//     }
// }
// console.log(calculadora.operacoes.soma(2, 3))
// console.log(calculadora['operacoes']['subtracao'](4, 5))


//Uma concessionária tem nome, CNPJ e endereço (logradouro, numero e bairro). Ela também seu estoque de veículos. A quantidade de veículos é arbitrária. A qualquer instante, ela pode ter 2 ou 5 ou 17 veículos. Cada veículo modelo, marca e placa.
// const concessionaria = {
//     cnpj: '000000000/0001-12',
//     nome: 'Nome qualquer',
//     endereco: {
//         logradouro: 'Rua A',
//         numero: 12,
//         bairro: {
//             nome: "Vija J",
//         }
//     },
//     estoque: [
//         {
//             modelo: "Ka",
//             marca: "Ford",
//             placa: "ABC-1234"
//         },
//         {
//             modelo: "Fusca",
//             marca: "VW",
//             placa: "ADD-4455"
//         },
//     ]
// }
// console.log(concessionaria.estoque[0].modelo)
// console.log(concessionaria['estoque'][1]['modelo'])

//promise
//1 + 2 + 3 + ... + n
// const calculoDemorado =(n) => {
//     let ac =0
//     for(let i=1; i <= n; i++)
//         ac += i
//     return ac
// }

// const calculoDemorado = (n) => {
//     return new Promise((resolve, reject) => {
//         // se n for negativo, propagar um erro
//         //caso contrario, continuar como ja era
//         if (n>0){
//             let ac = 0
//             for(let i = 1; i <= n; i++)
//                 ac += i
//             resolve(ac)
//         }
//         else{
//             reject("n deve ser positivo")
//         }


//     })
// }
// const minhaPromise = calculoDemorado(-2)
// //then/catch
// minhaPromise
// .then((resultado) => {console.log(`Resultado: ${resultado}`)})
// .catch((erro) => {console.log(`Deu erro: ${erro}`)})
// console.log('A')

// const calculoRapido = (n) =>{
//     return n > 0 ? Promise.resolve((n/2) * (n+1)) : Promise.reject("n deve ser positivo")
// }
// calculoRapido(1000)
// .then(function(resultado){ console.log(`Resultado: ${resultado}`)})
// .catch(function(erro){ console.log(`Deu erro: ${erro}`)})

