<?php

	class Pessoa {

		//Atributos
		var $nome;

		//Métodos

		//getters e setters

		function setNome ($nome) {
			$this->nome = $nome;
		}

		function getNome() {
			return $this->nome;
		}

	}

	$pessoa = new Pessoa();

	$pessoa->setNome('Jamilton');
	echo $pessoa->getNome();

?>