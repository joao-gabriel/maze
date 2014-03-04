
var items = new Array();

$(document).ready(function() {

  // Define o número de salas do labirinto
  var labirinto = new Maze();
  labirinto.width = 3;
  labirinto.height = 3;

  // Cria o labirinto e coloca num array bidimensional de salas
  var salasArray = labirinto.create();

  // Define a sala inicial (0,0)
  var salaInicial = salasArray[0][0];

  // Define a direção inicial (sul)
  labirinto.direction = labirinto.south;
  labirinto.enterRoom(salaInicial);

  // Define a sala de saída
  var salaFinal = salasArray[labirinto.height - 1][labirinto.width - 1];
  var saida = new roomStuff();
  saida.direction = labirinto.east;
  saida.type = 'door';
  saida.what = 'end';
  salaFinal.roomStuff.push(saida);

  var salaChave = salasArray[parseInt(random(seed)*labirinto.height)-1][parseInt(random(seed)*labirinto.width)-1];
  var chave = new roomStuff();
  chave.direction = labirinto.west;
  chave.type = 'item';
  chave.what = 'key';
  salaChave.roomStuff.push(chave);

  $('#prev').click(function() {
    labirinto.direction = labirinto.direction > 1 ? labirinto.direction >> 1 : 8;
  });

  $('#next').click(function() {
    labirinto.direction = labirinto.direction < 8 ? labirinto.direction << 1 : 1;
  });




});


