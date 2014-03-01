<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Sala
 *
 * @author Zona pc 02
 */
class Sala {
  
  private $id = null;
  private $posicaoHorizontal = null;
  private $posicaoVertical = null;
  private $caminhoVolta = null;
  private $solucao = null;
  private $borda = null;
  private $paredes = null;
  private $deOndeVeio = null;
  private $salaInicial = false;
  private $salaFinal = false;
  private $conteudo = null;
  
  public function getId() {
    return $this->id;
  }

  public function setId($id) {
    $this->id = $id;
  }

  public function getPosicaoHorizontal() {
    return $this->posicaoHorizontal;
  }

  public function setPosicaoHorizontal($posicaoHorizontal) {
    $this->posicaoHorizontal = $posicaoHorizontal;
  }

  public function getPosicaoVertical() {
    return $this->posicaoVertical;
  }

  public function setPosicaoVertical($posicaoVertical) {
    $this->posicaoVertical = $posicaoVertical;
  }

  public function getCaminhoVolta() {
    return $this->caminhoVolta;
  }

  public function setCaminhoVolta($caminhoVolta) {
    $this->caminhoVolta = $caminhoVolta;
  }

  public function getSolucao() {
    return $this->solucao;
  }

  public function setSolucao($solucao) {
    $this->solucao = $solucao;
  }

  public function getBorda() {
    return $this->borda;
  }

  public function setBorda($borda) {
    $this->borda = $borda;
  }

  public function getParedes() {
    return $this->paredes;
  }

  public function setParedes($paredes) {
    $this->paredes = $paredes;
  }

  
  public function getDeOndeVeio() {
    return $this->deOndeVeio;
  }

  public function setDeOndeVeio($deOndeVeio) {
    $this->deOndeVeio = $deOndeVeio;
  }

  public function getSalaInicial() {
    return $this->salaInicial;
  }

  public function setSalaInicial($salaInicial) {
    $this->salaInicial = $salaInicial;
  }

  public function getSalaFinal() {
    return $this->salaFinal;
  }

  public function setSalaFinal($salaFinal) {
    $this->salaFinal = $salaFinal;
  }
  
  public function getConteudo() {
      return $this->conteudo;
  }

  public function setConteudo($conteudo) {
      $this->conteudo = $conteudo;
  }


  
  
}

?>
