<p class="copyright text-muted small" style="padding: 20px 0px 0px 0px;">
    Copyright &copy; KitPraia Delivery <?php $date = new DateTime('now', new DateTimeZone('America/Bahia'));
    $timestamp = $_SERVER['REQUEST_TIME'];
    $date->setTimestamp($timestamp);
    echo $date->format('Y') ?>. All Rights Reserved
</p>

<?php

	$date = new DateTime('now', new DateTimeZone('America/Bahia'));
    $timestamp = $_SERVER['REQUEST_TIME'];
    $date->setTimestamp($timestamp);

    echo $date->format('Y');
    echo '<br />';
    echo date("Y");

    echo '<br />';
    echo date('Y');
?>