<?php 
$my_file = fopen('location.txt', 'w');
$info = 'Lat: ' .$_GET['lat']. '\nLong: ' . $_GET['long'];
fwrite($my_file, $info);
fclose($my_file);

?>