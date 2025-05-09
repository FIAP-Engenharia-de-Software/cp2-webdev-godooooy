// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  if (typeof (valor) !== Number) {
    return Number(valor)
  } else {
    return "Valor inválido"
  }
}

console.log(corrigirValor("7"))

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };