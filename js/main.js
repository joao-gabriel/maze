$(document).ready(function() {

  // Define o número de salas do labirinto
  var labirinto = new Maze();
  labirinto.width = 4;
  labirinto.height = 3;


  // Cria um array de arrays para conter as salas do labirinto
  var salasArray = createArray(labirinto.height, labirinto.width);

  // Enche o array de arrays com salas vazias e fechadas

  for (j = 0; j < labirinto.width; j++) {
    for (i = 0; i < labirinto.height; i++) {
      var sala = new Room();
      sala.hPos = j;
      sala.vPos = i;
      salasArray[i][j] = sala;
      
    }
  }

  console.log(salasArray);

});


