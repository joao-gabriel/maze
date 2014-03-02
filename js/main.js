$(document).ready(function() {

  // Define o número de salas do labirinto
  var labirinto = new Maze();
  labirinto.width = 11;
  labirinto.height = 11;

  // Cria o labirinto e coloca num array bidimensional de salas
  var salasArray = labirinto.create();

  // Define a sala inicial (0,0)
  var salaInicial = salasArray[0][0];

  // Define a direção inicial (sul)
  labirinto.direction = labirinto.south;

  labirinto.enterRoom(salaInicial);

  $('#prev').click(function() {
    labirinto.direction = labirinto.direction > 1 ? labirinto.direction >> 1 : 8;
  });

  $('#next').click(function() {
    labirinto.direction = labirinto.direction < 8 ? labirinto.direction << 1 : 1;
  });

});


