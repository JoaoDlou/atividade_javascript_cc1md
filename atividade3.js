function findMaxElement(matrix) {
    let max = matrix[0][0]; // Inicializa com o primeiro elemento da matriz
  
    // Percorre todos os elementos da matriz
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > max) {
          max = matrix[i][j];
        }
      }
    }
  
    return max;
  }
  
  // Exemplo de matriz
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Encontra o maior elemento da matriz
  let maxElement = findMaxElement(matrix);
  
  // Exibe o resultado
  console.log("O maior elemento da matriz é:", maxElement);