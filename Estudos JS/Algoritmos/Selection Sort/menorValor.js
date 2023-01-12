const listaLivros = require('./listaLivros') ; 

function menorValor (Produtos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for(let atual = posicaoInicial;atual < Produtos.length; atual++){
        if (Produtos[atual].valor < Produtos[maisBarato].valor){
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;