<?php
// Ataque que o usuário mal intensionado pode injetar comandos entre o usuário e o servidor

if($_SERVER["REQUEST_METHOD"] === 'POST'){
    
    $cmd = escapeshellcmd($_POST["cmd"]); // esse metodo coloca ^ para quebrar o comando 
    var_dump($cmd);

    echo "<pre>";

    $comando = system($cmd, $retorno);

    echo "</pre>";
}


?>
<form method="post">

    <input type="text" name="cmd">
    <button type="submit"> Enviar </button>

</form>