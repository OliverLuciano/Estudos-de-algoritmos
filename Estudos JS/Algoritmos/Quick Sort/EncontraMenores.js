const livros = require("./listaLivros");

function encontraMenor (pivo, lista) {
    let menores = 0;
    for(let atual = 0; atual < lista.length; atual++){
        if(lista[atual].valor < pivo.valor){
            menores++;
        }
    }
    Troca(lista, lista.indexOf(pivo), menores);
    return lista;
}

function Troca (array, de, para){
    let elemento1 = array[de];
    let elemento2 = array[para];

    array[para] = elemento1;
    array[de] = elemento2;
}

function DivideNoMeio(array){
    let pivo = array[Math.floor(array.length / 2)];
    encontraMenor(pivo, array);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < array.length; analisando++ ){
        let atual = array[analisando]
        if(atual.valor <= pivo.valor && atual !== pivo){
            Troca(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }
    return array;
}

//console.log(DivideNoMeio(livros));
//console.log(encontraMenor(livros[2],livros));

module.exports = Troca;