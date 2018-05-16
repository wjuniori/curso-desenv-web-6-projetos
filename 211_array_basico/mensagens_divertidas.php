<!DOCTYPE HTML>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="estilo.css">
		<title>Mensagens divertidas</title>
	</head>

	<body>

		<!-- Comando echo e print -->
		<?php

			//arrays (falaremos mais adiante)
			/*$mensagens_divertidas['a'] = 'Primeira mensagem divertida';
			$mensagens_divertidas['b'] = 'Segunda mensagem divertida';
			$mensagens_divertidas[3] = 'Terceira mensagem divertida';
			$mensagens_divertidas[4] = 'Quarta mensagem divertida';
			$mensagens_divertidas[5] = 'Quinta mensagem divertida';*/

			$teste = 'teste com variável';

			$mensagens_divertidas = array(
				'a' => 2,
				'b' => true,
				3 => -7.15,
				4 => $teste,
				5 => 'Quinta mensagem divertida'
			);

			var_dump($mensagens_divertidas);
			echo '<br />';
			echo $mensagens_divertidas[3]; //-7.15
			echo '<br />';
			echo $mensagens_divertidas['b']; //1
		?>
		
	</body>
</html>