console.log('Questão 6')

function numberIntoArray(number) {
  var arrOfDigits = Array.from(String(number), Number)
  return arrOfDigits
}

function putTrace(array, posicao) {
  if (posicao >= array.length) {
    array.push('-')
  } else if (posicao <= 0) {
    array.unshift('-')
  } else {
    for (var i = array.length; i >= posicao; i--) {
      array[i] = array[i - 1]
    }
    array[posicao] = '-'
  }
}

function tracerEvenNumber(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i + 1] % 2 === 0) {
      putTrace(array, i + 1)
      i + 1
    }
  }
}

function arrayToString(lista) {
  var listaEmString = lista.toString()
  return listaEmString
}

var number = 4652478
var array = numberIntoArray(number)
tracerEvenNumber(array)
console.log('Número:' + number)
console.log('Inserção de traços no número inserido:' + arrayToString(array))
