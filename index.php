
<!DOCTYPE html>

<html>

<head>
  <title>Labirinto</title>
  <link href="css/estilos.css" rel="stylesheet" type="text/css" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
</head>
  <body>
    
    <div class="screen">
      
      <div id="direction"></div>
      
      <div id="view">
        
      </div>
      <input type="button" id="prev" class="turnBtn" value="<" />
      <input type="button" id="next" class="turnBtn" value=">" />
      
      <h2>Map</h2>
      <div id="mapa"></div>
      
    </div>
    
    
  <script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
  <script type="text/javascript" src="js/cycle.js"></script>
  <script type="text/javascript" src="js/util.js"></script>  
  <script type="text/javascript" src="js/wall.js"></script>  
  <script type="text/javascript" src="js/room.js"></script>  
  <script type="text/javascript" src="js/maze.js"></script>  
  <script type="text/javascript" src="js/main.js"></script>  
  </body>
</html>