<?php
require_once("../utils/HttpStatus.php");

function validate($data, $db){
    if(empty(trim($data['name'])) || trim($data['name']) == ''){
        throw new Exception("Campo nome é obrigatório.", HttpStatus::BAD_REQUEST);
    }

    if(empty(trim($data['email'])) || trim($data['email']) == '' || !strpos($data['email'], '@') || !isValidEmail(addslashes($data['email'], $db))){
        throw new Exception("Campo e-mail é obrigatório e deve ser inserido um e-mail válido.", HttpStatus::BAD_REQUEST);
    }

    if(empty(trim($data['password'])) || trim($data['password']) == '' || strlen($data['password']) < 4){
        throw new Exception("Campo senha é obrigatório e deve ter no mínimo 4 caracteres.", HttpStatus::BAD_REQUEST);
    }

    if(empty(trim($data['profession'])) || trim($data['profession']) == ''){
        throw new Exception("Campo profissão é obrigatório.", HttpStatus::BAD_REQUEST);
    }
}

function isValidEmail($mail, $db){
    $sql = "SELECT * FROM user WHERE email like '{$mail}';";

    $result = $db->query($sql);

    if($result !== FALSE && $result->num_rows >= 1) throw new Exception("E-mail já está sendo usado.", HttpStatus::BAD_REQUEST);

    return true;
}