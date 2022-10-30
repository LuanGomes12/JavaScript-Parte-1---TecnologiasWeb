console.log('Questão 1')

function testeArray(objeto) {
  if (Array.isArray(objeto)) {
    console.log('É array!')
  } else {
    console.log('Não é array!')
  }
}

entrada = ['maçã', 'laranja', 'banana', 'limão', 'uva']
console.log('Entrada:' + entrada)
testeArray(entrada)
