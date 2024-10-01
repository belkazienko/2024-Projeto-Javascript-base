//Funções

let x = 'nada'
console.log(x)

x = 'oi'

imprimeTexto(x)
console.log(x)

//Declarar uma função 
// estrutura nomeDaFunção (parâmetros) {funcionalidade}
function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto("Sou aluna de front-end")
imprimeTexto('Olá mundo')

function soma() {
    return 2+2
}
imprimeTexto(soma())
//console.log(soma())
function somaDeNumeros (numero1, numero2){
    return numero1 + numero2
}

imprimeTexto (somaDeNumeros(10, 8))

function divisaoDeNumeros (numero1, numero2){
    return numero1 / numero2
}
imprimeTexto(divisaoDeNumeros(10, 2))
imprimeTexto(divisaoDeNumeros(2, 10))

//Ordem de parâmetros 

function apresentacao(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos.`
}

imprimeTexto(apresentacao(`Cibelly`, 16))
imprimeTexto(apresentacao(16, `Cibelly`)) // A ordem dos parâmetros è importante

//Parâmetro inicial, para que a função começe com um parâmetro pré definido
function multiplicacao (n1 = 1, n2 = 1){
    return n1*n2
}

imprimeTexto(multiplicacao(2, 10))

// Expressão de função

const constanteSoma = function (n1, n2){ return n1 + n2}

imprimeTexto(constanteSoma(17,25))

// Função flecha 

const apresentaFlecha = (nome) => `Meu nome é ${nome} `

imprimeTexto(apresentaFlecha(`Cibelly`))

const somaNumeroPequenos = (nu1, nu2) => {
    if(nul <= 10 && nu2 <= 10){
        return nu1 + nu2
    }else{
        return nu1 `Seu número é maior do que 10`
    }
}

imprimeTexto(somaNumeroPequenos(2,11))
imprimeTexto(somaNumeroPequenos(2,4))