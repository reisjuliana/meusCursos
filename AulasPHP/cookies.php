<?php

$data = array(
    "empresa"=>"Hcode Treinamentos"
);

setcookie("nome_do_cookie", json_encode($data), time() + 3600);
echo "OK";

if(isset($_COOKIE["nome_do_cookie"])){
    var_dump($_COOKIE["nome_do_cookie"]);
}


?>