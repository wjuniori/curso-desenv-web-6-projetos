<?php

	$cpf = isset($_POST["cpf"]) ? $_POST["cpf"] : '';
	$total_string_cpf = strlen($cpf);

	if ($total_string_cpf != 11 && $cpf != '') {
		echo 'CPF inválido';
	}

?>

<form method="post" action="">
	<label>
		CPF:
		<input type="text" name="cpf">
	</label>

	<input type="submit" name="Cadastrar">

</form>