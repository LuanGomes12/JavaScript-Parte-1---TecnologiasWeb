console.log('Questão 9')

// Soma cada elemento de um mesmo índice em dois arrays diferentes
function somaValores(array1, array2) {
  var arrayResultante = []
  if (array1.length > array2.length) {
    var diferenca1 = array1.length - array2.length
    for (var x = 0; x < diferenca1; x++) {
      array2.push(0)
    }
  } else if (array2.length > array1.length) {
    var diferenca2 = array2.length - array1.length
    for (var x = 0; x < diferenca2; x++) {
      array1.push(0)
    }
  }
  for (var i = 0; i < array1.length; i++) {
    arrayResultante[i] = array1[i] + array2[i]
  }
  return arrayResultante
}

var array1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 10]
var array2 = [0, 1, 1, 2, 2, 3, 3, 4, 4]
console.log('Array 1:' + array1)
console.log('Array 2:' + array2)
console.log(somaValores(array1, array2))
