<?php

$file = fopen("teste.txt", "w+");
fclose($file); // fecha o arquivo
unlink("teste.txt");

mkdir("images");


?>