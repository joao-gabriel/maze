function Maze(_W, _H) {

  _W = typeof _W !== "undefined" ? _W : 0;
  _H = typeof _H !== "undefined" ? _H : 0;

  this.height = _H;
  this.width = _W;

  this.north = 1;
  this.east = 2;
  this.south = 4;
  this.west = 8;



  this.oppositeDirection = oppositeDirection;
  function oppositeDirection($direcao) {

    var oppositeDirection;

    switch ($direcao) {

      case this.north:
        oppositeDirection = this.south;
        break;

      case this.east:
        oppositeDirection = this.west;
        break;

      case this.south:
        oppositeDirection = this.north;
        break;

      case this.west:
        oppositeDirection = this.east;
        break;

    }

    return oppositeDirection;

  }


  this.create = create;
  function create() {

    this.salasArray = createArray(this.height, this.width);

    // Enche o array de arrays com salas vazias e fechadas
    for (j = 0; j < this.width; j++) {
      for (i = 0; i < this.height; i++) {
        var sala = new Room();
        sala.hPos = j;
        sala.vPos = i;
        this.salasArray[i][j] = sala;

      }
    }

    // Escolhe uma sala aleatóriamente para ser a primeira
    var seed = 13;
    var hPos = parseInt(random(seed) * this.width - 1);
    var vPos = parseInt(random(seed) * this.height - 1);
    var salaAtual = this.salasArray[vPos][hPos];

    // Define o número de salas visitadas
    var salasVisitadas = 0;

    // Uma pilha (LIFO) que guardará as salas já visitadas
    var pilhaDeSalas = [];
    var i = 0;
    // Loop que só termina quando todas as salas do labirinto tiverem sido visitadas e configuradas
    do {

      var salasAdjacentesIntactas = [];

      // Verifica se existe uma sala à leste
      if (salaAtual.hPos + 1 < this.width) {
        // Verifica se esta sala está intacta
        var salaObjLeste = this.salasArray[salaAtual.vPos][salaAtual.hPos + 1];
        if (salaObjLeste.walls === null) {
          // Informa de onde veio o algoritmo até chegar nesta sala
          salaObjLeste.cameFrom = this.east;
          // Adiciona esta sala a um array de salas adjacentes à atual que estejam intactas
          salasAdjacentesIntactas.push(salaObjLeste);
        }
      }

      // Verifica se existe uma sala à sul
      if (salaAtual.vPos + 1 < this.height) {
        // Verifica se esta sala está intacta
        var salaObjSul = this.salasArray[salaAtual.vPos + 1][salaAtual.hPos];
        if (salaObjSul.walls === null) {
          // Informa de onde veio o algoritmo até chegar nesta sala
          salaObjSul.cameFrom = this.south;
          // Adiciona esta sala a um array de salas adjacentes à atual que estejam intactas
          salasAdjacentesIntactas.push(salaObjSul);
        }
      }

      // Verifica se existe uma sala à oeste
      if (salaAtual.hPos - 1 >= 0) {
        // Verifica se esta sala está intacta
        var salaObjOeste = this.salasArray[salaAtual.vPos][salaAtual.hPos - 1];
        if (salaObjOeste.walls === null) {
          // Informa de onde veio o algoritmo até chegar nesta sala
          salaObjOeste.cameFrom = this.west;
          // Adiciona esta sala a um array de salas adjacentes à atual que estejam intactas
          salasAdjacentesIntactas.push(salaObjOeste);
        }
      }

      // Verifica se existe uma sala à norte
      if (salaAtual.vPos - 1 >= 0) {
        // Verifica se esta sala está intacta
        var salaObjNorte = this.salasArray[salaAtual.vPos - 1][salaAtual.hPos];
        if (salaObjNorte.walls === null) {
          // Informa de onde veio o algoritmo até chegar nesta sala
          salaObjNorte.cameFrom = this.north;
          // Adiciona esta sala a um array de salas adjacentes à atual que estejam intactas
          salasAdjacentesIntactas.push(salaObjNorte);
        }
      }

      // Verifica se encontrou alguma sala adjacente intacta
      if (salasAdjacentesIntactas.length > 0) {

        // Escolhe uma das salas adjacentes aleatóriamente
        var indice = parseInt(random(seed) * salasAdjacentesIntactas.length);
        var salaEscolhida = salasAdjacentesIntactas[indice];

        // Coloca a sala atual na pilha de salas
        pilhaDeSalas.push(salaAtual);

        // Derruba a parede entre a sala atual e a proxima sala
        // Parede da sala atual
        salaAtual.walls = salaAtual.walls | salaEscolhida.cameFrom;

        // Parede da sala escolhida (oposta a que foi quebrada na atual)
        salaEscolhida.walls = salaEscolhida.walls | this.oppositeDirection(salaEscolhida.cameFrom);

        // A célula escolhida será agora a célula atual
        salaAtual = salaEscolhida;

        // Aumenta 1 ao número de células visitadas
        salasVisitadas++;

      } else {

        // Se não encontrou uma sala adjacente intacta, pega a última sala salva na pilha e faz o teste com ela
        salaAtual = pilhaDeSalas.pop();

      }
    } while (salasVisitadas < ((this.width) * (this.height)) - 1);

    return this.salasArray;

  }

  this.show = show;
  function show() {

    this.output = '';

    // Enche o array de arrays com salas vazias e fechadas
    for (j = 0; j < this.height; j++) {
      for (i = 0; i < this.width; i++) {

        var salaAtual = this.salasArray[j][i];
        console.log(this.salasArray[j][i]);

        var northWall = salaAtual.walls & this.north ? ' bt' : '';
        var eastWall = salaAtual.walls & this.east ? ' br' : '';
        var southWall = salaAtual.walls & this.south ? ' bb' : '';
        var westWall = salaAtual.walls & this.west ? ' bl' : '';

        var quebraLinha = i===this.width-1?'<div class="clear"></div>':'';

        this.output += '<div class="sala ' + northWall + eastWall + southWall + westWall + ' " ></div>'+quebraLinha;


      }
    }

    this.output += '';

    console.log(this.output);

    $('body').html(this.output);

  }


}