
function roomStuff(_direction, _type, _what) {

  this.direction = _direction;
  this.type = _type;
  this.what = _what;

  this.getStuff = getStuff;
  function getStuff() {
    return '<div class="' + this.type + '" id="' + this.what + '"></div>';
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