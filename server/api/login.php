<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");

require_once(dirname(__FILE__)."/../utils/Database.php");
require_once(dirname(__FILE__)."/../utils/HttpStatus.php");
require_once(dirname(__FILE__)."/../utils/Response.php");
require_once(dirname(__FILE__)."/../utils/JWT.php");
require_once(dirname(__FILE__)."/../Validations/User.php");

try{
    $db = new Database();

    $input = file_get_contents("php://input");
    $input = json_decode($input, true);
    switch($_SERVER["REQUEST_METHOD"]){
        case 'POST':
            post($input, $db);
        break;
        case 'GET':
            get($_GET, $db);
        break;
    }
}catch(Exception $e){
    $res = new Response($e->getMessage(), $e->getCode());
    $res->res();
}

function get($input, $db){
    $user = JWT::decodeToken($_GET['jwt']);

    $sql = "SELECT * FROM user WHERE email = '{$user["email"]}' AND password = '{$user["password"]}';";

    $mysqli_result = $db->query($sql);

    if($mysqli_result->num_rows !== 1) throw new Exception("Token inválido.", HttpStatus::$FORBIDDEN);
    else{
        $res = new Response(array(
            "token" => $input['jwt'],
            "auth" => true,
            "redirect" => "/"
        ), 200);
        $res->res();
    }
}

function post($input, $db){
    $email = (isset($input['email']) && !empty($input['email'])) ? addslashes($input['email']): null;
    $password = (isset($input['password']) && !empty($input['password'])) ? md5($input['password']): null;

    if($email == null || $password == null) throw new Exception("Campos e-mail e senha obrigatórios.", HttpStatus::$BAD_REQUEST);

    $sql = "SELECT * FROM user WHERE email = '{$email}' AND password = '{$password}'";

    $mysqli_result = $db->query($sql);

    if($mysqli_result->num_rows !== 1) throw new Exception("Dados inválidos", HttpStatus::$FORBIDDEN);
    else{
        $user = $mysqli_result->fetch_assoc();
        $token = JWT::getToken($user);
        $res = new Response(array(
            "token" => $token,
            "auth" => true,
            "redirect" => "/"
        ), 200);
        $res->res();
    }
}