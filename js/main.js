$(document).ready(function() {

  // Define o número de salas do labirinto
  var labirinto = new Maze();
  labirinto.width = 4;
  labirinto.height = 3;

  var salasArray = labirinto.create();

  

  labirinto.show();

});


