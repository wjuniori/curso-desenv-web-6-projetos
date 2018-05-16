<?php

	$valor = 'texto';

	//isset
	/*if (isset($valor)) {
		echo 'Variável iniciada';
	}*/

	//empty
	// true -> '', 0, '0', false, null, array()
	/*if(empty($valor)) {
		echo 'Variável vazia';
	}*/

	//is_numeric
	if (is_numeric($valor)) {
		echo 'Valor número';
	}

?>