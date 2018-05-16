<?php

	class Pessoa {

		private $nome;

		function __construct($nome) {
			echo 'Construtor iniciado<br />';
			$this->nome = $nome;
		}

		function __destruct() {
			echo 'Objeto removido<br />';
		}

		public function correr() {
			echo $this->nome.' correndo<br />';
		}
	}

	$pessoa = new Pessoa('Jamilton');
	$pessoa->correr();

?>