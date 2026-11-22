// Faça o contador funcionar. Edite só este arquivo.
//
// TODO 1: mostre 0 no #total ao carregar a página.
// TODO 2: ao clicar em #somar, aumente 1 e atualize o #total.
// TODO 3: ao clicar em #zerar, volte para 0 e atualize o #total.
//
// Dica: document.querySelector("#total"), addEventListener("click", ...),
//       elemento.textContent = valor.

// escreva seu código aqui
const totalEl = document.querySelector("#total");
const btnSomar = document.querySelector("#somar");
const btnZerar = document.querySelector("#zerar");

let valor = 0;


function atualizarTela() {
  totalEl.textContent = valor;
}

atualizarTela();


btnSomar.addEventListener("click", () => {
  valor += 1;
  atualizarTela();
});

btnZerar.addEventListener("click", () => {
  valor = 0;
  atualizarTela();
});