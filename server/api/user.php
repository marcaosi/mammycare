<?php
require_once("../utils/connection.php");

$input = [];

parse_str(file_get_contents("php://input"),$input);

$connection = getConnection();
switch($_SERVER["REQUEST_METHOD"]){
    case 'POST':
        post($_POST, $connection);
    break;
    case 'GET':
        get($_GET, $connection);
    break;
    case 'PUT':
        put($input, $connection);
    break;
    case 'PATCH':
        patch($input, $connection);
    break;
    case 'DELETE':
        delete($input['id'], $connection);
    break;
}
closeConnection($connection);

function delete($id, $conn){
    try{
        $id = addslashes($id);
        $sql = "DELETE FROM user WHERE id = {$id};";
        query($sql, $conn);
        res(200, "Registro excluído com sucesso.");
    }catch(Exception $ex){
        $code = 500;
        if($ex->getCode()){
            $code = $ex->getCode();
        }
        res($code, $ex->getMessage());
    }
}

function patch($data, $conn){
    try{
        foreach (array_keys($data) as $key => $value) {
            $data[$key] = addslashes($data[$key]);
        }

        $sql = "UPDATE FROM user SET ";

        foreach (array_keys($data) as $key => $value) {
            if($key != 'id'){
                $sql .= "{$key}='{$dta[$key]}', ";
            }
        }

        $sql .= "1=1 WHERE id = {$data['id']};";

        query($sql, $conn);
        res(200, "Registro atualizado com sucesso.");
    }catch(Exception $ex){
        $code = 500;
        if($ex->getCode()){
            $code = $ex->getCode();
        }
        res($code, $ex->getMessage());
    }
}

function put($data, $conn){
    try{
        validate($data);

        foreach (array_keys($data) as $key => $value) {
            $data[$key] = addslashes($data[$key]);
        }

        $sql = "UPDATE FROM user SET ";

        foreach (array_keys($data) as $key => $value) {
            if($key != 'id'){
                $sql .= "{$key}='{$dta[$key]}', ";
            }
        }

        $sql .= "1=1 WHERE id = {$data['id']};";

        query($sql, $conn);
        res(200, "Registro atualizado com sucesso.");
    }catch(Exception $ex){
        $code = 500;
        if($ex->getCode()){
            $code = $ex->getCode();
        }
        res($code, $ex->getMessage());
    }
}

function post($data, $conn){
    try{
        validate($data);

        foreach (array_keys($data) as $key => $value) {
            $data[$key] = addslashes($data[$key]);
        }

        $sql = "INSERT INTO user(name, email, password, profession) VALUES('{$data['name']}', '{$data['email']}', '{$data['password']}', '{$data['profession']}');";

        query($sql, $conn);

        res(200, json_encode($data));
    }catch(Exception $ex){
        $code = 500;
        if($ex->getCode()){
            $code = $ex->getCode();
        }
        res($code, $ex->getMessage());
    }
}

function get($data, $conn){
    try{
        foreach (array_keys($data) as $key => $value) {
            $data[$key] = addslashes($data[$key]);
        }

        $sql = "SELECT * FROM user WHERE 1=1 ";

        if(isset($data['id']) && !empty($data['id'])){
            $sql .= " AND id = {$data['id']}";
        }

        if(isset($data['email']) && !empty($data['email'])){
            $sql .= " AND email = '{$data['email']}'";
        }

        if(isset($data['password']) && !empty($data['password'])){
            $sql .= " AND password = '{$data['password']}'";
        }

        if(isset($data['profession']) && !empty($data['profession'])){
            $sql .= " AND profession like '%{$data['profession']}%'";
        }

        if(isset($data['name']) && !empty($data['name'])){
            $sql .= " AND name like '%{$data['name']}%'";
        }

        $result = query_string($sql, $conn);

        res(200, json_encode($result));
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

function validate($data){
    if(empty(trim($data['name'])) || trim($data['name']) == ''){
        throw new Exception("Campo nome é obrigatório.", 400);
    }

    if(empty(trim($data['email'])) || trim($data['email']) == '' || !strpos($data['email'], '@') || !isValidEmail(addslashes($data['email']))){
        throw new Exception("Campo e-mail é obrigatório e deve ser inserido um e-mail válido.", 400);
    }

    if(empty(trim($data['password'])) || trim($data['password']) == '' || strlen($data['password']) < 4){
        throw new Exception("Campo senha é obrigatório e deve ter no mínimo 4 caracteres.", 400);
    }

    if(empty(trim($data['profession'])) || trim($data['profession']) == ''){
        throw new Exception("Campo profissão é obrigatório.", 400);
    }
}

function isValidEmail($mail){
    $sql = "SELECT * FROM user WHERE email like '%{$mail}%'";
    $conn = getConnection();

    $result = query_string($sql, $conn);

    if(!empty($result)){
        throw new Exception("E-mail já existe.", 400);
    }

    closeConnection($conn);
    return true;
}