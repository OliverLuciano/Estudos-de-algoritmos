const {edFolha, edGalho} = require("../Misc/livrosEditoras");

function uniaoLista (lista1, lista2) {
    let listaFinal = [];
    let atualL1 = 0;
    let atualL2 = 0;

    while(atualL1 < lista1.length && atualL2 < lista2.length){
        let produtoAtualLista1 = lista1[atualL1];
        let produtoAtualLista2 = lista2[atualL2];

        if(produtoAtualLista1.valor < produtoAtualLista2.valor){
            listaFinal.push(produtoAtualLista1);
            atualL1++;
        }
        else{
            listaFinal.push(produtoAtualLista2);
            atualL2++;
        }
    }

    return listaFinal;
}

console.log(uniaoLista(edFolha, edGalho));
