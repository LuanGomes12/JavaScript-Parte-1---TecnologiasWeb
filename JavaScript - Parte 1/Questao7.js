console.log('Questão 7')

// Compara elemento a lemento e incrementa caso seja repetido
function itemFrequente(array) {
  var aparicoes = 1
  var contador = 0
  var elementoPopular
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        contador++
      }
      if (aparicoes < contador) {
        aparicoes = contador
        elementoPopular = array[i]
      }
    }
    contador = 0
  }
  return elementoPopular
}

var array = [1, 2, 2, 3, 'a', 'a', 'a', 5, 5, 5, 5, 'b']
console.log('Array original: \n' + array)
console.log('Elemento que mais se repete:' + itemFrequente(array))
