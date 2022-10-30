console.log('Questão 8')

function removeItensDuplicados(array) {
  var novoArray = [...new Set(array)]
  return novoArray
}

array = ['maçã', 'laranja', 'laranja', 'laranja', 'banana', 'banana', 1, 2, 2]
console.log('Array Original:', array)
console.log('Array sem itens duplicados:', removeItensDuplicados(array))
