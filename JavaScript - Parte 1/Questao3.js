console.log('Questão 3')

function inicio(array) {
  primeiroElemento = array[0]
  console.log('Primeiro elemento do array é', primeiroElemento)
  primeirosElementos = array.slice(0, 2)
  console.log('Retorna os 2 primeiros elementos do array:', primeirosElementos)
}

array = ['maçã', 'laranja', 'banana', 'limão', 'uva']
console.log('Array:', array)
inicio(array)
