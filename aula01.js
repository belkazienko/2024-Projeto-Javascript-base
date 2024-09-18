// Tipo Number

// var era uma utilizado para todas as variáveis
var numero01 = 3
// let é uma atualização do var e é passível de variação
let numero02 = 10
//const é uma maneira de declarar uma variável que irá permanecer constante
const numero03 = 7

const soma = numero01 + numero02
const subtracao = numero02 - numero03
const  multiplicacao = numero03 * numero01
const divisao = numero01 / numero02

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

// Tipo Float -- ponto flutuante

const numero04 = 3.5
const numero05 = .5

const multiplicacao2 = numero04 * numero05

console.log(multiplicacao)

//NaN -> Not a Number

const nome = 'Cibelly'
const falsoNumero = '7'

const naoEnumero = nome * 0.4
const concatenacao01 = falsoNumero + numero04

console.log(naoEnumero)
console.log(concatenacao01)

// Dados tipo String = Textos

const frase = 'meu nome é: '
const frase2 = 'O segundo DS é "estudioso", não é?'

const concatenacao02 = frase + nome 

console.log(concatenacao02)
console.log(frase2)

//Dados tipo Boolean
// True -> verdadeiro
// False -> Falso

const numero06 = 7

const comparacao01 = numero06 == falsoNumero
const comparacao02 = numero06 === falsoNumero

// Um sinal de igual (=) é para declarar
// Dois sinais de igual (==) comparando os valores e não o tipo do dado (comparação fraca)
// Tres sinais de igual (===) comparando os tipos do dado. (comparação forte)

console.log(comparacao01)
console.log(comparacao02)

