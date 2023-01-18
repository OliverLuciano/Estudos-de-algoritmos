function menorValor (Produtos, posicaoInicial) {

    for(let atual = posicaoInicial;atual < Produtos.length; atual++){
        if (Produtos[atual].valor < Produtos[posicaoInicial].valor){
            posicaoInicial = atual;
        }
    }
    return posicaoInicial;
}

module.exports = menorValor;