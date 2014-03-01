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

  // Escolhe uma sala aleatóriamente para ser a primeira
  var seed = parseInt(Math.random() * 255);
  var hPos = parseInt(random(seed) * labirinto.width-1);
  var vPos = parseInt(random(seed) * labirinto.height-1);
  var salaAtual = salasArray[vPos][hPos];



  // Define o número de salas visitadas
  var salasVisitadas = 0;

  // Uma pilha (LIFO) que guardará as salas já visitadas
  var pilhaDeSalas = [];
var i = 0;
  // Loop que só termina quando todas as salas do labirinto tiverem sido visitadas e configuradas
  do {

    var salasAdjacentesIntactas = [];

    // Verifica se existe uma sala à leste
    if (salaAtual.hPos + 1 < labirinto.width) {
      // Verifica se esta sala está intacta
      var salaObjLeste = salasArray[salaAtual.vPos][salaAtual.hPos + 1];
      if (salaObjLeste.walls === null) {
        // Informa de onde veio o algoritmo até chegar nesta sala
        salaObjLeste.cameFrom = labirinto.east;
        // Adiciona esta sala a um array de salas adjacentes à atual que estejam intactas
        salasAdjacentesIntactas.push(salaObjLeste);
      }
    }

    // Verifica se existe uma sala à sul
    if (salaAtual.vPos + 1 < labirinto.height) {
      // Verifica se esta sala está intacta
      var salaObjSul = salasArray[salaAtual.vPos + 1][salaAtual.hPos];
      if (salaObjSul.walls === null) {
        // Informa de onde veio o algoritmo até chegar nesta sala
        salaObjSul.cameFrom = labirinto.south;
        // Adiciona esta sala a um array de salas adjacentes à atual que estejam intactas
        salasAdjacentesIntactas.push(salaObjSul);
      }
    }

    // Verifica se existe uma sala à oeste
    if (salaAtual.hPos - 1 >= 0) {
      // Verifica se esta sala está intacta
      var salaObjOeste = salasArray[salaAtual.vPos][salaAtual.hPos - 1];
      if (salaObjOeste.walls === null) {
        // Informa de onde veio o algoritmo até chegar nesta sala
        salaObjOeste.cameFrom = labirinto.west;
        // Adiciona esta sala a um array de salas adjacentes à atual que estejam intactas
        salasAdjacentesIntactas.push(salaObjOeste);
      }
    }

    // Verifica se existe uma sala à norte
    if (salaAtual.vPos - 1 >= 0) {
      // Verifica se esta sala está intacta
      var salaObjNorte = salasArray[salaAtual.vPos - 1][salaAtual.hPos];
      if (salaObjNorte.walls === null) {
        // Informa de onde veio o algoritmo até chegar nesta sala
        salaObjNorte.cameFrom = labirinto.north;
        // Adiciona esta sala a um array de salas adjacentes à atual que estejam intactas
        salasAdjacentesIntactas.push(salaObjNorte);
      }
    }

    // Verifica se encontrou alguma sala adjacente intacta
    if (salasAdjacentesIntactas.length > 0) {

      // Escolhe uma das salas adjacentes aleatóriamente
      var indice = parseInt(Math.random() * salasAdjacentesIntactas.length);
      var salaEscolhida = salasAdjacentesIntactas[indice];

      // Coloca a sala atual na pilha de salas
      pilhaDeSalas.push(salaAtual);

      // Derruba a parede entre a sala atual e a proxima sala
      // Parede da sala atual
      salaAtual.walls = salaAtual.walls | salaEscolhida.cameFrom;

      // Parede da sala escolhida (oposta a que foi quebrada na atual)
      salaEscolhida.walls = salaEscolhida.walls | labirinto.oppositeDirection(salaEscolhida.cameFrom);

      // A célula escolhida será agora a célula atual
      salaAtual = salaEscolhida;

      // Aumenta 1 ao número de células visitadas
      salasVisitadas++;

    } else {

      // Se não encontrou uma sala adjacente intacta, pega a última sala salva na pilha e faz o teste com ela
      salaAtual = pilhaDeSalas.pop();

    }
  } while (salasVisitadas < ((labirinto.width) * (labirinto.height))-1);

  console.log(salasArray);

});


