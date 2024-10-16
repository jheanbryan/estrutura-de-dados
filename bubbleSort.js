/*
Passo a Passo do Bubble Sort
Comece com a lista: Você terá uma lista de números que deseja ordenar. X
Percorra a lista: Faça um loop que percorre todos os elementos da lista. X
Compare elementos adjacentes: Para cada par de elementos adjacentes, compare-os.
Troque se necessário: Se o primeiro elemento é maior que o segundo, troque-os.
Repita: Continue esse processo até que você tenha percorrido toda a lista sem fazer nenhuma troca, o que significa que a lista está ordenada.
*/

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let e = 0; e < array.length - 1 - i; e++) {
            if(array[e] > array[e + 1]){
                let temp = array[e];
                array[e] = array[e + 1];
                array[e + 1] = temp;
            };
        };
    };

    return array;
};

let array = [2, 4, 8, 1, 3, 10, 44, 9];
console.log(bubbleSort(array))