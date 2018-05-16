<?php

	$texto = '345.332.456-40'; //'12.40'

	//strlen
	echo strlen($texto);

	echo '<br />';

	//str_replace
	$cpf = str_replace(".", "", $texto);
	$cpf = str_replace("-", "",$cpf);
	echo $cpf;

	echo '<br />';

	//substr
			 //0123456789....
	$texto1 = 'Entenda porque seu smartphone esquenta tanto, se você tem um smartphone.';
	$noticia = substr($texto1, 0, 44);
	echo $noticia.' ...';

?>