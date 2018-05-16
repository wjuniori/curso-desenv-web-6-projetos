<?php

	$produtos[1] = 'Sofá';
	$produtos[2] = 'Mesa';
	$produtos[3] = 'Cadeira';
	$produtos[4] = 'Fogão';
	$produtos[5] = 'Geladeira';

	//var_dump($produtos);

	foreach ($produtos as $produto) {
		
		echo $produto.'<br />';

		if ($produto == 'Mesa') {
			echo 'Compre uma mesa e ganhe 25% de desconto na compra de 4 cadeiras <br />';
		}
	}

?>