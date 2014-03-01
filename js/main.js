$(document).ready(function() {


  directions[1] = 'N';
  directions[2] = 'L';
  directions[4] = 'S';
  directions[8] = 'W';

  // Define o número de salas do labirinto
  var labirinto = new Maze();
  labirinto.width = 4;
  labirinto.height = 3;

  // Cria o labirinto e coloca num array bidimensional de salas
  var salasArray = labirinto.create();

  // Define a direção inicial (sul)
  direcao = labirinto.south;
  $('#direction').html(directions[direcao]);

  // Define a sala inicial (0,0)
  var salaInicial = salasArray[0][0];

  salaInicial.show('#view');

  labirinto.show('#mapa');

  $('#view').cycle({
    fx: 'scrollHorz',
    speed: 'fast',
    timeout: 0,
    next: '#next',
    prev: '#prev'
  });

});

// Variáveis globais
var direcao;
var directions = [];
$('#prev').click(function() {
  direcao = direcao > 1 ? direcao >> 1 : 8;
  $('#direction').html(directions[direcao]);
});

$('#next').click(function() {
  direcao = direcao < 8 ? direcao << 1 : 1;
  $('#direction').html(directions[direcao]);
});

