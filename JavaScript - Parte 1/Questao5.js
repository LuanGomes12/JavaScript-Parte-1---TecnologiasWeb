console.log('Questão 5')

function unirArray(objeto) {
  arrayUnido = objeto.join('-')
  console.log('Array:', objeto)
  console.log('União de todos os elementos:', arrayUnido)
}

array = [1, 2, 3, 'a', 'b', 'c', 4, 5]
unirArray(array)
