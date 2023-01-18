const livros = require("../Misc/listaLivros");
const menorValor = require("../Misc/menorValor");

for(let atual = 0; atual < livros.length ; atual++){
    let menor = menorValor(livros, atual);

    console.log("Posição: ", atual)
    let livroAtual = livros[atual];
    console.log("livro atual: ", livroAtual)
    let livroMenorPreco = livros[menor];
    console.log("livro Menor Preco: " , livroMenorPreco)

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);