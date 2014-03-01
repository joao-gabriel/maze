function Room(_hPos, _vPos, _cameFrom, _walls) {

  _hPos = typeof _hPos !== "undefined" ? _hPos : 0;
  _vPos = typeof _vPos !== "undefined" ? _vPos : 0;
  _cameFrom = typeof _cameFrom !== "undefined" ? _cameFrom : 0;
  _walls = typeof _walls !== "undefined" ? _walls : null;

  this.hPos = _hPos;
  this.vPos = _vPos;
  this.cameFrom = _cameFrom;
  this.walls = _walls;

  this.show = show;
  function show(where) {

    this.view = '';

    for (i = 0; i < 4; i++) {
      // Teste em sentido horário a partir do Norte que paredes estão abertas nesta sala
      var wall = i>0?wall>>1:this.walls;
      var parede = 1 & wall ? 'closed' : 'opened';
      
      this.view += '<img src="imgs/'+parede+'.png" />';
      
    }
    
    $(where).html(this.view);

  }



}

