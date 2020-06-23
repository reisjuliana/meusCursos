<?
$name = "image";
if(!is_dir($name)){
    mkdir($name);
    echo "Diretório criado com sucesso: ".$name;
} else {
    rmdir($name);
    echo "Já existe o diretório: ".$name." foi removido";
}
?>