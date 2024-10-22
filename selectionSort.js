function selectionSort(array) {
	let menorPosicao;

	for (let i = 0; i < array.length - 1; i++) {
		menorPosicao = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[menorPosicao])
				menorPosicao = j;
		}

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
 