function creatboard() {
  const tabuleiro = document.getElementById('gameboard');
  const painel = document.getElementById('painel');
  tabuleiro.style.visibility = 'visible';
  let counter = 0;
  painel.innerHTML = `É o turno do jogador 1, faça sua jogada!`;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let div = document.createElement('div');
      div.classList = 'square';
      div.id = `l${i + 1}c${j + 1}`;
      let combinacao = '';
      div.onclick = function () {
        const encerra = function () {
          for (let i of tabuleiro.children) {
            i.onclick = function () {};
          }
          if (counter % 2 == 0) {
            painel.innerHTML = `Parabéns, jogador 2! Você venceu.`;
          } else {
            painel.innerHTML = `Parabéns, jogador 1! Você venceu.`;
          }
        };
        const verifica = function (string) {
          if (string == 'xxx' || string == 'ooo') {
            encerra();
          } else {
            combinacao = '';
          }
        };
        if (div.innerHTML == '') {
          if (counter % 2 == 0) {
            div.innerHTML = 'x';
            painel.innerHTML = `É o turno do jogador 2, faça sua jogada!`;
          } else {
            div.innerHTML = 'o';
            painel.innerHTML = `É o turno do jogador 1, faça sua jogada!`;
          }
          counter++;
          //conferir caso 1
          for (let l = 1; l <= 3; l++) {
            for (let c = 1; c <= 3; c++) {
              combinacao += document.getElementById(`l${l}c${c}`).innerHTML;
            }
            verifica(combinacao);
          }

          //conferir caso 2
          for (let cl = 1; cl <= 3; cl++) {
            for (let r = 1; r <= 3; r++) {
              combinacao += document.getElementById(`l${r}c${cl}`).innerHTML;
            }
            verifica(combinacao);
          }

          //conferir caso 3
          for (let n = 1; n <= 3; n++) {
            combinacao += document.getElementById(`l${n}c${n}`).innerHTML;
          }
          verifica(combinacao);

          //conferir caso 4
          for (let x = 1, y = 3; x <= 3; x++, y--) {
            combinacao += document.getElementById(`l${x}c${y}`).innerHTML;
          }
          verifica(combinacao);
          //conferir caso 5
          if (
            counter == 9 &&
            painel.innerHTML != `Parabéns, jogador 1! Você venceu.`
          ) {
            painel.innerHTML = 'Deu velha!';
          }
        }
      };
      tabuleiro.appendChild(div);
    }
  }
}
function start() {
  document.getElementById('start').remove();
  creatboard();
}
