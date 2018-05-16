<?php
	
	$num = 1;
	while ($num < 10) {
		
		$num = $num + 1;

		if ($num == 3) {
			continue;
		}
		
		echo $num;
		echo '<br />';

		/*if ($num == 5) {
			break;
		}*/
	}

?>