// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  if (nota >= 6 && nota <= 10) {
    return "Aprovado";
  } else if (nota <= 6 && nota >= 0) {
    return "Reprovado";
  } else {
    return "Nota inválida!";
  };
};

console.log(classificarNota(6));

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };