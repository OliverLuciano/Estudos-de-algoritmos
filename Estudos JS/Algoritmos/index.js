const listaLivros = require('./listaLivros') ; 


let maisBarato = 0;

for(let atual = 0;atual < listaLivros.length; atual++ ){
    if (listaLivros[atual].valor < listaLivros[maisBarato].valor){
        maisBarato = atual;
    }
}

console.log(`O livro mais barato com o titulo: ${listaLivros[maisBarato].titulo} custa ${listaLivros[maisBarato].valor}`);