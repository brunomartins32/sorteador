function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  numerosSorteados = [];

  for (let i = 0; i < quantidade; i++) {
    numerosSorteados.push(obterNumeroAleatorio(de, ate));
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
