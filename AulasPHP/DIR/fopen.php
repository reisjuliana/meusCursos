<?php

$file = fopen("log.txt", "w+");
fwrite($file, date("Y-m-d H:i:s")); // inclui um conteudo
fclose($file); // fecha o arquivo

?>