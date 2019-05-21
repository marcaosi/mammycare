<?php
require_once("../utils/connection.php");
require __DIR__ . '/../vendor/autoload.php';
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

$input = file_get_contents("php://input");

$connection = getConnection();
switch($_SERVER["REQUEST_METHOD"]){
    case 'POST':
        post(json_decode($input, true), $connection);
    break;
    default:
        res(403, "Método não suportado.");
    break;
}
closeConnection($connection);

function post($data, $conn){
    try{
        $key = "Mammycare";

        if(!isset($data['email']) || empty($data['email']))
            throw new Exception("Campo e-mail obrigatório.", 400);
        if(!isset($data['password']) || empty($data['password']))
            throw new Exception("Campo senha obrigatório.", 400);

        $email = addslashes($data['email']);
        $password = md5($data['password']);

        $sql = "SELECT * FROM user WHERE email = '$email' AND password = '$password';";

        $result = query_string($sql, $conn);

        if(sizeof($result) != 1)
            throw new Exception("Usuário e senha inválidos", 401);

        $user = $result[0];

        $token = array(
            "iss" => 'http://mammycare.net.br',
            'email' => $user['email'],
            'id' => $user['id'],
            'name' => $user['name'],
            'profession' => $user['profession']
        );
        
        $jwt = JWT::encode($token, $key);

        $answer = array(
            "jwt" => $jwt
        );

        res(200, json_encode($answer, true));
    }catch(Exception $ex){
        $code = 500;
        if($ex->getCode()){
            $code = $ex->getCode();
        }
        res($code, $ex->getMessage());
    }
}

function res($statusCode, $message){
    header('Content-type: application/json', true, $statusCode);
    echo $message;
}