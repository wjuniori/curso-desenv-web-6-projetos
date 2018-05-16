<?php

	//date
	// format: d/m/Y ; d-m-Y ; Y-m-d
	echo $data = date("Y-m-d H:i");

	echo '<br /><br />';

	$data_inicial = '2015-04-25';
	$data_final = '2017-12-14';

	$time_inicial = strtotime($data_inicial);
	$time_final = strtotime($data_final);

	$diferenca_time = $time_final - $time_inicial;

	$diaSegundos = 24*60*60;

	$diferenca_dia = $diferenca_time / $diaSegundos;

	echo $diferenca_dia;

?>