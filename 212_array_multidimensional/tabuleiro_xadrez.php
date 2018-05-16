<!DOCTYPE HTML>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="estilo.css">
		<title>Tabuleiro de xadrez</title>
	</head>

	<body>

		<?php

			$tabuleiro[8]['a'] = 'torre preta';
			$tabuleiro[8]['b'] = 'bispo preto';
			$tabuleiro[8]['c'] = 'cavalo preto';
			$tabuleiro[8]['d'] = 'rainha preta';
			$tabuleiro[8]['e'] = 'rei preto';
			$tabuleiro[8]['f'] = 'bispo preto';
			$tabuleiro[8]['g'] = 'cavalo preto';
			$tabuleiro[8]['h'] = 'torre preta';

			$tabuleiro[7]['a'] = 'peão preto';
			$tabuleiro[7]['b'] = 'peão preto';
			$tabuleiro[7]['c'] = 'peão preto';
			$tabuleiro[7]['d'] = 'peão preto';
			$tabuleiro[7]['e'] = 'peão preto';
			$tabuleiro[7]['f'] = 'peão preto';
			$tabuleiro[7]['g'] = 'peão preto';
			$tabuleiro[7]['h'] = 'peão preto';

			print_r($tabuleiro);
			print '<br />';
			print $tabuleiro[8]['d'];
			print '<br />';
			print $tabuleiro[8]['g'];
			print '<br />';
			print $tabuleiro[7]['b'];
		?>
		
	</body>
</html>