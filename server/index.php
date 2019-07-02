<?php
require_once("./utils/Database.php");

try{
    $db = new Database();
}catch(Exception $e){
    echo "error";
}