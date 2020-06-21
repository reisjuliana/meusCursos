<?php

require_once("config.php");

// Carrega um usuário
//$root = new Usuarios();
//$root->loadById(3);
//echo $root;

//Carrega uma lista de usuários
//$lista = Usuarios::getlist();
//echo json_encode($lista);

//Carrega uma lista de usuários buscando pelo login
//$search = Usuarios::search("Chris");
//echo json_encode($search);

//Carrega um usuário usando o login e senha
//$usuario = new Usuarios();
//$usuario->login("teste13", "123"); 
//echo $usuario;

//Inserir registro:
//$aluno = new Usuarios("reisjuliana", "201169123Juh");
//$aluno->insert();
//echo $aluno;

// Alterando dados
//$usuario = new Usuarios;
//$usuario->loadById(30);
//$usuario->update("professor", "oiaquimerda");

//Excluindo usuário:
$usuario = new Usuarios;
$usuario->loadById(21);
$usuario->delete();
echo $usuario;




?>