function Room(_hPos, _vPos, _cameFrom, _walls) {
  
  _hPos = typeof _hPos !== "undefined" ? _hPos : 0;
  _vPos = typeof _vPos !== "undefined" ? _vPos : 0;
  _cameFrom = typeof _cameFrom !== "undefined" ? _cameFrom : 0;
  _walls = typeof _walls !== "undefined" ? _walls : null;

  this.hPos = _hPos;  
  this.vPos = _vPos;
  this.cameFrom = _cameFrom;
  this.walls = _walls;


}

