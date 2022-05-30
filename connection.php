<?php
    try{
        $pdo=new PDO("mysql:host=localhost;dbname=Iplans", "root","");
        }catch(Exception $e){
            die('Connection error :' .$e->getMessage());
    }
?>