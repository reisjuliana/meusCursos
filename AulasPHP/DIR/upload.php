<form method="POST" enctype="multipart/form-data"> 

    <input type="file" name="fileUpload">
    <button type="submit">Send</button>

</form>

<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $file = $_FILES["fileUpload"]; //name do input passado no html

    if($file["error"]){
        throw new Exception("Erro: ".$file["error"]);
    }

    $dirUploads = "uploads";

    if(!is_dir($dirUploads)){
        mkdir($dirUploads);
    }

    if(move_uploaded_file($file["tmp_name"], $dirUploads.DIRECTORY_SEPARATOR.$file["name"])){
        echo "upload realizado com sucess.";
    }else{
        throw new Exception("Erro: não foi possível realizar o download");
    };

}