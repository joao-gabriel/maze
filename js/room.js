function Room(_hPos, _vPos, _cameFrom, _walls, _roomStuff) {

  _hPos = typeof _hPos !== "undefined" ? _hPos : 0;
  _vPos = typeof _vPos !== "undefined" ? _vPos : 0;
  _cameFrom = typeof _cameFrom !== "undefined" ? _cameFrom : 0;
  _walls = typeof _walls !== "undefined" ? _walls : null;
  _roomStuff = typeof _roomStuff !== "undefined" ? _roomStuff : new Array();


  this.hPos = _hPos;
  this.vPos = _vPos;
  this.cameFrom = _cameFrom;
  this.walls = _walls;
  this.roomStuff = _roomStuff;



  this.show = show;
  function show(where) {

    this.view = '';

    var directionName = [];

    directionName[0] = 'N';
    directionName[1] = 'L';
    directionName[2] = 'S';
    directionName[3] = 'W';


    for (i = 0; i < 4; i++) {
      // Teste em sentido horário a partir do Norte que paredes estão abertas nesta sala
      var wall = i > 0 ? wall >> 1 : this.walls;
      var parede = 1 & wall ? 'opened' : 'closed';

      this.view += '<div><img src="imgs/' + parede + '.png" title="' + directionName[i] + '"/>';

      console.log(1<<i);

      // Verifica se tem algo nesta sala
      if (this.roomStuff.length > 0) {
        console.log('aqui tem coisa');
        // Verifica em que parede
        for (j=0; j<this.roomStuff.length; j++){
          if (this.roomStuff[j].direction === 1<<i){
            console.log('na parede '+this.roomStuff[j].direction+' tem '+this.roomStuff[j].what);
            this.view +=this.roomStuff[j].getStuff();
            this.roomStuff[j].appendStuffEvent();
          };          
        }
        
      }

      // Se a parede é aberta, coloca o elemento porta
      this.view += parede === 'opened' ? '<div class="porta"></div>' : '';

      this.view += '</div>';

    }

    $(where).html(this.view);

  }

  salaInstancia = this;

}

