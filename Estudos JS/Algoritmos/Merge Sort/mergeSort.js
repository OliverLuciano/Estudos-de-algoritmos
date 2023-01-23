const livros = require("./listaLivros");

function mergeSort(array) {

    if(array.length > 1){
        const meio = Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0, meio));
        const part2 = mergeSort(array.slice(meio, array.length));
        array = orderna(part1, part2);
    }; 

    return array;
}

function orderna(part1, part2){
    let atual1 = 0;
    let atual2 = 0;
    const resultado = []

    while(atual1 < part1.length && atual2 <part2.length){
        let produto1 = part1[atual1];
        let produto2 = part2[atual2];

        if (produto1.valor < produto2.valor){
            resultado.push(produto1)
            atual1++;
        }
        else{
            resultado.push(produto2)
            atual2++;
        }
    }
    return resultado.concat(atual1 < part1.length
        ? part1.slice(atual1)
        : part2.slice(atual2));
}

console.log(mergeSort(livros));