const livros = require("./listaLivros");
const trocaLugar = require('./EncontraMenores');

function QuickSort (lista, esquerda, direita) {
    if(lista.length > 1){
        let indiceAtual = particiona(lista, esquerda, direita);
        if (esquerda < indiceAtual - 1){
            QuickSort(lista, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita){
            QuickSort(lista, indiceAtual, direita);
        }
    }

    return lista;
}

function particiona(lista, esquerda, direita){
    let pivo = lista[Math.floor((esquerda + direita)/ 2)]
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita){
        while (lista[atualEsquerda].valor < pivo.valor ){
            atualEsquerda++;
        }
        while (lista[atualDireita].valor > pivo.valor){
            atualDireita--;
        }

        if(atualEsquerda <= atualDireita){
            trocaLugar(lista, atualEsquerda, atualDireita);
            atualDireita--;
            atualEsquerda++;
        }
    }
    return atualEsquerda;
}
console.log(QuickSort(livros, 0, livros.length - 1));