<?php

	class Veiculo {

		/*
			public
			private
			protected
		*/

		/*public $placa;
		private $cor;
		protected $tipo;*/

		private $placa;
		private $cor;
		protected $tipo = 'Caminhonete';

		//Encapsulamento do tributo placa
		public function setPlaca($placa) {
			//Validação da placa (somente letras e números)
			$this->placa = $placa;
		}

		public function getPlaca() {
			return $this->placa;
		}
	}

	class Carro extends Veiculo {

		public function exibirTipo() {
			echo $this->tipo;
		}

	}

	//$veiculo = new Veiculo();
	//$veiculo->placa = 'JAM3636';
	//echo $veiculo->placa;

	//$veiculo->cor = 'azul';
	//echo $veiculo->cor;

	//$veiculo->tipo = 'caminhonete';
	//echo $veiculo->tipo;

	//$veiculo->setPlaca('JAM2363');
	//echo $veiculo->getPlaca();

	$carro = new Carro();
	$carro->exibirTipo();

?>