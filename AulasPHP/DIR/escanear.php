<?php

$images = scandir("images");

$data;

foreach($images as $img){
    if(!in_array($img,".", "..")){
        $filename = "images".DIRECTORY_SEPARATOR.$img;
        $info = pathinfo($filename);
        $info['size'] = filesize($filename); 
        array_push($data, $info);
    }
}

echo json_encode($data);

?>