<?php

	//Herança
	
	//classe-mãe ou superclasse
	class Felino {

		var $mamifero = 'sim';

		function correr() {
			echo 'Correr como felino';
		} 

	}

	//classe-filha ou subclasse
	class Chita extends Felino {

		//polimorfismo
		function correr() {
			echo 'Correr como chita 100KM/H';
		}

	}

	$chita = new Chita();

	echo $chita->mamifero.'<br />';
	$chita->correr();

?>