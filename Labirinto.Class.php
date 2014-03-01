<?php

class Labirinto {
  
  private $largura = null;
  private $altura = null;
  private $totalSalas = null;
  private $salaInicio = null;
  private $salaFim = null;

  public function getLargura() {
    return $this->largura;
  }

  public function setLargura($largura) {
    $this->largura = $largura;
  }

  public function getAltura() {
    return $this->altura;
  }

  public function setAltura($altura) {
    $this->altura = $altura;
  }

  public function getTotalSalas() {
    return $this->totalSalas;
  }

  public function setTotalSalas($totalSalas=null) {
    if (is_null($totalSalas))
      $this->totalSalas = $this->getAltura() * $this->getLargura();
    else
      $this->totalSalas = $totalSalas;
  }

  public function getSalaInicio() {
    return $this->salaInicio;
  }

  public function setSalaInicio($salaInicio) {
    $this->salaInicio = $salaInicio;
  }

  public function getSalaFim() {
    return $this->salaFim;
  }

  public function setSalaFim($salaFim) {
    $this->salaFim = $salaFim;
  }

  
  public function montaLabirintoDeCima($arraySalas){
    
    $output = '<table cellpadding="0" cellspacing="0">';
    for ($i=0; $i<$this->getAltura(); $i++){
      $output.='<tr>';
      for ($j=0; $j<$this->getLargura(); $j++){
        $arraySalas[$j][$i]->getSalaInicial()==true?$salaInicial="I":$salaInicial="";
        $arraySalas[$j][$i]->getSalaFinal()==true?$salaFinal="F":$salaFinal="";
        !is_null($arraySalas[$j][$i]->getConteudo())?$conteudo=$arraySalas[$j][$i]->getConteudo():$conteudo="";
        $output.='
          <td style="background-image: url(\'imgs/'.$arraySalas[$j][$i]->getParedes().'.gif\');" class="sala">
            <input type="hidden" value="'.$arraySalas[$j][$i]->getParedes().'" />
            '.$salaInicial.$salaFinal.$conteudo.'
          </td>';
      }
      $output.='</tr>';
    }
    $output.='</table>';
    return $output;
  }
  
}

?>
