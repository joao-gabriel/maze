
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Labirinto</title>
  <link href="css/estilos.css" rel="stylesheet" type="text/css" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
  <script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
  <script type="text/javascript" src="js/core.js"></script>  
</head>
  <body>
<?php

require_once ('Labirinto.Class.php');
require_once ('Sala.Class.php');

define ('_NORTE', 1);
define ('_LESTE', 2);
define ('_SUL', 4);
define ('_OESTE', 8);


function direcaoOposta($direcao){
  
  switch ($direcao){
    
    case _NORTE:
      $retorno = _SUL;
      break;
    
    case _SUL:
      $retorno = _NORTE;
      break;
    
    case _LESTE:
      $retorno = _OESTE;
      break;
    
    case _OESTE:
      $retorno = _LESTE;
      break;
    
  }
  
  return $retorno;
  
}

// Define o número de Salas no Labirinto
$labirintoObj = new Labirinto();
$labirintoObj->setLargura($_GET['l']);
$labirintoObj->setAltura($_GET['a']);
$labirintoObj->setTotalSalas();

// Cria um array bidimensional que guarda as posicoes no labirinto
$salasArray = array(array());

// Enche o array bidimensional com salas vazias
for($i=0; $i<$labirintoObj->getAltura(); $i++){
  for ($j=0; $j<$labirintoObj->getLargura(); $j++){
    $salasArray[$j][$i] = new Sala();
    $salasArray[$j][$i]->setPosicaoHorizontal($j);
    $salasArray[$j][$i]->setPosicaoVertical($i);
  }
}

// Define a primeira sala atual aleatóriamente
$salaAtualObj = $salasArray[rand(0, $labirintoObj->getLargura()-1)][rand(0, $labirintoObj->getAltura()-1)];

// Guarda o número de salas visitadas
$salasVisitadas = 0;

// Uma pilha (LIFO) que guardará as salas já visitadas
$pilhaDeSalas = array();

// Loop que só termina quando todas as salas do labirinto tiverem sido visitadas e configuradas
do {

     $salasAdjacentesIntactas = array();
  
	// Verifica se existe uma sala à leste
	if ($salaAtualObj->getPosicaoHorizontal()+1 < $labirintoObj->getLargura()){
    // Verifica se esta sala está intacta
    $salaObjLeste = $salasArray[$salaAtualObj->getPosicaoHorizontal()+1][$salaAtualObj->getPosicaoVertical()];
    if (is_null($salaObjLeste->getParedes())){
      // Informa de onde veio o algoritmo até chegar nesta sala
      $salaObjLeste->setDeOndeVeio(_LESTE);
      // Adiciona esta sala a um array de salas adjacentes à atual que estejam intactas
      $salasAdjacentesIntactas[] = $salaObjLeste;
    }
  }
    
	// Repete o teste com as outras salas ajacentes 
  // oeste
  if ($salaAtualObj->getPosicaoHorizontal()-1 >= 0){
    $salaObjOeste = $salasArray[$salaAtualObj->getPosicaoHorizontal()-1][$salaAtualObj->getPosicaoVertical()];
    if (is_null($salaObjOeste->getParedes())){     
      $salaObjOeste->setDeOndeVeio(_OESTE);
      $salasAdjacentesIntactas[] = $salaObjOeste;
    }
  }
  
	// norte
  if ($salaAtualObj->getPosicaoVertical()-1 >= 0){
    $salaObjNorte = $salasArray[$salaAtualObj->getPosicaoHorizontal()][$salaAtualObj->getPosicaoVertical()-1];
    if (is_null($salaObjNorte->getParedes())){     
      $salaObjNorte->setDeOndeVeio(_NORTE);
      $salasAdjacentesIntactas[] = $salaObjNorte;
    }
  }
  
  // sul
  if ($salaAtualObj->getPosicaoVertical()+1 < $labirintoObj->getAltura()){
    $salaObjSul= $salasArray[$salaAtualObj->getPosicaoHorizontal()][$salaAtualObj->getPosicaoVertical()+1];
    if (is_null($salaObjSul->getParedes())){     
      $salaObjSul->setDeOndeVeio(_SUL);
      $salasAdjacentesIntactas[] = $salaObjSul;
    }
  }
  
  $salasAdjacentesNum = count($salasAdjacentesIntactas);
  
  // Verifica se encontrou alguma sala adjacente intacta
	if ($salasAdjacentesNum>0) {
   
    // Escolhe uma das salas adjacentes aleatóriamente
    $salaEscolhida = $salasAdjacentesIntactas[rand(0, $salasAdjacentesNum-1)];
    
    // Coloca a sala atual na pilha de salas
    array_push($pilhaDeSalas, $salaAtualObj);    
    
		// Derruba a parede entre a sala atual e a proxima sala
    // Parede da sala atual
		$salaAtualObj->setParedes($salaAtualObj->getParedes() | $salaEscolhida->getDeOndeVeio());  
    // Parede da sala escolhida (oposta a que foi quebrada na atual)
    $salaEscolhida->setParedes($salaEscolhida->getParedes() | direcaoOposta($salaEscolhida->getDeOndeVeio()));
   
    // A célula escolhida será agora a célula atual
    $salaAtualObj = $salaEscolhida;
       
    // Aumenta 1 ao número de células visitadas
    $salasVisitadas = $salasVisitadas + 1;
    
	}else{
    
    // Se não encontrou uma sala adjacente intacta, pega a última sala salva na pilha e faz o teste com ela
    $salaAtualObj = array_pop($pilhaDeSalas);
    
  }
  
}while ($salasVisitadas < $labirintoObj->getTotalSalas()-1);

// Define sala inicial
$salasArray[rand(0, $labirintoObj->getAltura()-1)][0]->setSalaInicial(true);

// Define sala final
$salasArray[$labirintoObj->getLargura()-1][$labirintoObj->getAltura()-1]->setSalafinal(true);

// Define que salas terão armadilhas
$num = (int)($labirintoObj->getLargura()+$labirintoObj->getAltura())/4;
for ($i=0; $i<$num; $i++){
    $salasArray[rand(1, $labirintoObj->getLargura()-2)][rand(1, $labirintoObj->getAltura()-2)]->setConteudo('x');
}

// Define que salas terão ouro
$num = (int)($labirintoObj->getLargura()+$labirintoObj->getAltura())/4;
for ($i=0; $i<$num; $i++){
    $salasArray[rand(1, $labirintoObj->getLargura()-2)][rand(1, $labirintoObj->getAltura()-2)]->setConteudo('$');
}

// Define que salas terão monstros
$num = (int)($labirintoObj->getLargura()+$labirintoObj->getAltura())/4;
for ($i=0; $i<$num; $i++){
    $salasArray[rand(1, $labirintoObj->getLargura()-2)][rand(1, $labirintoObj->getAltura()-2)]->setConteudo('M');
}


echo $labirintoObj->montaLabirintoDeCima($salasArray);

?>
</body>
</html>
