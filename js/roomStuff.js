
function roomStuff(_direction, _type, _what, _cover) {

  _cover = typeof _cover !== "undefined" ? _cover : '';

  this.direction = _direction;
  this.type = _type;
  this.what = _what;
  this.cover = _cover;
  
  this.getStuff = getStuff;
  function getStuff() {
    return '<div class="' + this.type + ' '+this.cover+'" id="' + this.what + '"></div>';
  }
  this.appendStuffEvent = appendStuffEvent;
  
  function appendStuffEvent() {
    console.log('appendStuffEvent' + this.what);

    var what = this.what;

    $("body").on("click", "#end", function(e) {
      // Verifica se o jogador tem a chave
      console.log(items);
      if (items.indexOf('key') !== -1) {
        alert('Saiu');
      }else{
        alert('Porta trancada');
      }

    });

    $("body").on("click", ".item", function(e) {
      // Verifica se o jogador tem a chave
      console.log(items);
      items.push(what);
      $(this).remove();
      $('#items').append(what+' ');
    });



  }
}