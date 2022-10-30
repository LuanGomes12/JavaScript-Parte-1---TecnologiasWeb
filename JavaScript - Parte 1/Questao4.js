console.log('Questão 4')

function final(array) {
  var ultimoElemento = array.slice(-1)
  console.log('Último elemento do array é', ultimoElemento)
  ultimosElementos = array.slice(array.length - 3)
  console.log('Retorna os 3 últimos elementos do array:', ultimosElementos)
}

array = ['maçã', 'laranja', 'banana', 'limão', 'uva']
console.log('Array:', array)
final(array)
