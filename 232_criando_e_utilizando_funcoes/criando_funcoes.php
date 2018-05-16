<?php

	//Não é permitido a utilização de caracateres especiais (exceto o caractere '_')
	//Não pode ser iniciada com números
	/*function primeira_funcao() {
		echo 'Curso de PHP';
	}

	primeira_funcao();*/

	//Função sem retorno
	function exibir_boas_vindas($nome='indefinido') {
		echo 'Bem vindo ao curso de PHP, '.$nome;
	}

	//Função com retorno
	function calcular_soma($numero1, $numero2) {
		return $numero1 + $numero2;
	}

	//Chamar a função sem retorno
	//exibir_boas_vindas();

	//Chamar a função com retorno
	echo calcular_soma(2, 2);

?>