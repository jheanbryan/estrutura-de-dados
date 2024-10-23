/*
Ordenaçao por insercao
Funcionamento: O algoritmo divide a lista em duas partes: a parte ordenada e a parte não ordenada. 
Ele percorre a lista não ordenada, inserindo cada elemento na posição correta da parte ordenada.
*/

function insertSection(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j;

    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    };
    array[j + 1] = currentValue

  };  
  
  return array;
}

const array = [9, 13, 16, 21, 32, 12];
console.log(insertSection(array));