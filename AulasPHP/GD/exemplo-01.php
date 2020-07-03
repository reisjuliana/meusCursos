<?php

//muda o tipo de resposta deste arquivo
header("Content-Type: image/png");

//Variavel recurso
$image = imagecreate(256, 256); // Altura, largura

// primeira cor é de funod
$black = imagecolorallocate($image, 0, 0, 0);
$red = imagecolorallocate($image, 255, 0, 0);

imagestring($image, 5, 60, 120, "Curso PHP", $red);

// nesse momento o php renderiza
imagepng($image);

// destroi
imagedestroy($image);



?>