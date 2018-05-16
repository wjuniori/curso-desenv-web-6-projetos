
<?php

	//Operadores de comparação
	//==
	//===
	//!= <>
	//!==
	//<
	//>
	//<=
	//>=

	//Operadores lógicos
	//&& ou AND -> retorna verdadeiro se todos os resultados as expressões forem verdade
	//|| ou OR -> retorna verdadeiro se uma das expressões for verdadeira
	//XOR -> retorna verdadeiro apenas se 1 das expressões for verdadeira

	//((V e V) ou F) => (V ou F) => V
	if ((2 == 2 && 3 == 3) || 5 <> 5) {
		echo 'Entrou no bloco if';
	} else {
		echo 'Entrou no bloco else';
	}

?>