// Alguns erros

let numero = 12 // O javascritp é sensível ao capslok
//console.log(Numero) // Erro de declaração, variável não declarada

//console.log(numero // Erro de sintaxe, falta de parenteses

// Tratamento de erros
//console.error('A lista não está executando a média') // Declara um erro para outro usuário;

const idadeMinima = 18
let idadeCliente = 17

if(idadeCliente>= idadeMinima){
    console.log('Cervela')
} else{
    console.log('Suco')
} 

//Valor ternário
idadeCliente= 20

//modo ternário, _______<= _________ ? --------- ;
//modo ternário, _______== _________ ? --------- ;
console.log(idadeCliente>= idadeMinima? 'Cerveja' : 'Suco')
                      // => uma função arrow, completamente diferente de maior igual

//utilizar com cuidado

const nome = "Cibelly"
const idade = "16"
const cidadeNascimento = "Foz do Iguaçu"

const apresentacao = "Meu nome é " + nome + " tenho " + idade + " anos de nasci em " + cidadeNascimento

console.log(apresentacao)
//Template string

const apresentacaoII = `Sou a ${nome} e tenho ${idade} anos de idade. Nasci na cidade de ${cidadeNascimento}`

console.log(apresentacaoII)