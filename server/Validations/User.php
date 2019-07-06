<?php
require_once("../utils/HttpStatus.php");

abstract class User{

    public static function validate($data, $db, $validateId = false){
        if(!isset($data['name']) || empty($data['name'])){
            throw new Exception("Campo nome é obrigatório.", HttpStatus::$BAD_REQUEST);
        }
        
        if(!isset($data['email']) || empty($data['email']) || !strpos($data['email'], "@")){
            throw new Exception("Campo e-mail é obrigatório e deve ser inserido um e-mail válido.", HttpStatus::$BAD_REQUEST);
        }
    
        if(empty(trim($data['password'])) || trim($data['password']) == '' || strlen($data['password']) < 4){
            throw new Exception("Campo senha é obrigatório e deve ter no mínimo 4 caracteres.", HttpStatus::$BAD_REQUEST);
        }
    
        if(empty(trim($data['profession'])) || trim($data['profession']) == ''){
            throw new Exception("Campo profissão é obrigatório.", HttpStatus::$BAD_REQUEST);
        }
    
        if($validateId === true){
            if(!isset($data['id']) || empty($data['id']))
                throw new Exception("Campo ID obrigatório.", HttpStatus::$BAD_REQUEST);
        }else{
            if(!isValidEmail($data['email'], $db))
                throw new Exception("Campo e-mail é obrigatório e deve ser inserido um e-mail válido.", HttpStatus::$BAD_REQUEST);
        }
    
        return array(
            "name" => addslashes($data['name']),
            "email" => addslashes($data['email']),
            "password" => md5($data['password']),
            "profession" => addslashes($data['profession']),
            "id" => $validateId? addslashes($data['id']):null
        );
    }
    
    public static function isValidEmail($mail, $db){
        $sql = "SELECT * FROM user WHERE email like '{$mail}';";
    
        $result = $db->query($sql);
    
        if($result !== FALSE && $result->num_rows >= 1) throw new Exception("E-mail já está sendo usado.", HttpStatus::$BAD_REQUEST);
    
        return true;
    }
    
    public static function auth($user, $db){
        $sql = "SELECT * FROM user WHERE email='{$user["email"]}' AND password='{$user["password"]}';";
    
        $mysqli_result = $db->query($sql);
    
        if(!$mysqli_result || $mysqli_result->num_rows !== 1)
            throw new Exception("Token inválido.", HttpStatus::$FORBIDDEN);
    
        return true;
    }
}