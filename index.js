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
const nomes = ["Ana Maria", "Rodrigo", "Antonio"]
// const apenasComA = nomes.filter(nome => nome.startsWith('A') )
// console.log(apenasComA)

// const iniciais = nomes.map(function(nome){return nome.charAt(0)})
// 
// const res = nomes.every(n => n.startsWith('A'))
// console.log(res)

// const numeros = [1, 2, 3, 4, 5]
// const res = numeros.reduce((ac, v) => ac + v)
// console.log(res)

