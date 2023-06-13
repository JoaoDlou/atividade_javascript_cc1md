function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Função para ler um número do usuário
function readNumber() {
  let input = prompt('Digite um número inteiro positivo:');
  return parseInt(input);
}

// Função para exibir o resultado
function showResult(number, isPrime) {
  if (isPrime) {
    console.log(number + ' é primo.');
  } else {
    console.log(number + ' não é primo.');
  }
}

// Obtém o número do usuário
let number = readNumber();

// Verifica se o número é primo
let prime = isPrime(number);

// Exibe o resultado
showResult(number, prime);