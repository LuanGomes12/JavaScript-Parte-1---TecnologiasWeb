console.log('Questão 10')

function unirArray(array1, array2) {
  var arrayUnido = [...array1, ...array2]
  return arrayUnido
}

var vetorPilha = [1, 2, 3, 4, 5]
var vetorAdiciona = [6, 7, 8, 9, 10]
console.log('vetorPilha:', vetorPilha)
console.log('vetorAdiciona:', vetorAdiciona)
console.log('vetorUnido:', unirArray(vetorPilha, vetorAdiciona))
