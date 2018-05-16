<?php

	$array = array('mac', 'linux', 'windows');

	//is_array
	//$retorno = is_array($array);

	//in_array
	//$retorno = in_array('solaris', $array);
	
	/*if ($retorno) {
		echo 'Verdadeiro';
	} else {
		echo 'Falso';
	}*/

	//array_keys
	/*$produtos = array(10 => 'Notebook', 11 => 'Teclado');
	$chaves_array = array_keys($produtos);

	var_export($chaves_array);*/

	//sort e asort
	//$frutas = array(0 => 'Banana', 1 => 'Amora', 2 => 'Carambola');
	/*var_export($frutas); echo '<br />';
	//sort($frutas);
	asort($frutas);
	var_export($frutas);*/

	//count
	/*$itens_array = count($frutas);
	echo $itens_array;*/

	//array_merge
	/*$array1 = array('mac', 'linux');
	$array2 = array('windows');
	$array3 = array('solaris');

	$novo_array = array_merge($array1, $array2, $array3);

	var_export($novo_array);*/

	//explode
	$string = '20/10/2020';
	$retorno = explode('/', $string);

	var_export($retorno);

	echo '<br />';

	//implode
	$nova_string = implode('/', $retorno);
	echo $nova_string;

?>