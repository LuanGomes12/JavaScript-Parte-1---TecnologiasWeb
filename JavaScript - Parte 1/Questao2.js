console.log('Questão 2')

function clonarArray(arrayOriginal) {
  var arrayClonado = arrayOriginal.slice()
  console.log('Array original:', arrayOriginal)
  console.log('Array copiado:', arrayClonado)
}

array = ['maçã', 'laranja', 'banana', 'limão', 'uva']
clonarArray(array)
