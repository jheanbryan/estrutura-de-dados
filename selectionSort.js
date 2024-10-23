/*
Ordenaçao por seleçao
Funcionamento: O algoritmo percorre a lista e encontra o menor (ou maior) elemento, 
trocando-o com o primeiro elemento da parte não ordenada. Esse processo é repetido para 
cada posição subsequente.
*/


function selectionSort(array) {
	let menorPosicao;

	for (let i = 0; i < array.length - 1; i++) {
		menorPosicao = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[menorPosicao])
				menorPosicao = j;
		}

		//se o i for o menor entao troca
		if (i != menorPosicao) {
			let temp = array[i];
			array[i] = array[menorPosicao];
			array[menorPosicao] = temp;
		};
	};

	return array;
}

const array = [9, 3, 1, 4];
console.log(selectionSort(array));
 