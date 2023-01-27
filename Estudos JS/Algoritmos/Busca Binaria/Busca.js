const livros = require("./ListaOrdenada");

function BuscaBinaria(lista, de, ate, valorBuscado){
    const meio = Math.floor((de + ate) / 2);
    const atual = lista[meio];

    if(de > ate){
        return -1;
    }
    if(valorBuscado === atual.valor){
        return meio
    }
    else if(valorBuscado < atual.valor){
        return BuscaBinaria(lista,de, meio - 1, valorBuscado);
    }
    else if(valorBuscado > atual.valor){
        return BuscaBinaria(lista, meio + 1, de, valorBuscado);
    }

}

console.log(BuscaBinaria(livros, 0, livros.length - 1, 60));