<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");

require_once(dirname(__FILE__)."/../utils/Database.php");
require_once(dirname(__FILE__)."/../utils/HttpStatus.php");
require_once(dirname(__FILE__)."/../utils/Response.php");
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
        case 'PUT':
            put($input, $db);
        break;
        case 'DELETE':
            delete($input['id'], $db);
        break;
    }
}catch(Exception $e){
    $res = new Response($e->getMessage(), $e->getCode());
    $res->res();
}

function put($input, $db){
    $user = User::validate($input, $db, true);

    $sql = "UPDATE user SET name='{$user["name"]}', password='{$user["password"]}', profession='{$user["profession"]}' WHERE id={$user["id"]}";

    $mysqli_result = $db->query($sql);

    if(!$mysqli_result) throw new Exception("Impossível atualizar registro.", HttpStatus::$BAD_SERVER);
    else{
        $res = new Response(array(
            "msg" => "Registro atualizado com sucesso.",
            "data" => $user,
            "uri" => "/user.php?id=".$user['id']
        ), HttpStatus::$SUCCESS);

        $res->res();
    }
}

function delete($id, $db){
    if(!isset($id) || empty($id)) throw new Exception("Necessário enviar ID para excluir registro.", HttpStatus::$BAD_REQUEST);

    $sql = "DELETE FROM user WHERE id = ".addslashes($id)." LIMIT 1;";

    $mysqli_result = $db->query($sql);

    if(!$mysqli_result) throw new Exception("Impossível excluir usuário no momento.", HttpStatus::$BAD_SERVER);
    else{
        $res = new Response(array(
            "msg" => "Usuário excluído com sucesso."
        ), HttpStatus::$NO_CONTENT);

        $res->res();
    }
}

function post($input, $db){
    $user = User::validate($input, $db);

    $sql = "INSERT INTO user (name, email, password, profession) VALUES ('{$user["name"]}', '{$user["email"]}', '{$user["password"]}', '{$user["profession"]}');";

    $mysqli_result = $db->query($sql);

    if(!$mysqli_result)
        throw new Exception("Impossível salvar usuário no momento.", HttpStatus::$BAD_SERVER);
    else{
        $user['id'] = $db->insert_id;
        $res = new Response(array(
            "msg" => "Usuário foi criado com sucesso.",
            "data" => $user,
            "uri" => "/user.php?id=".$user['id']
        ), HttpStatus::$CREATED);

        $res->res();
    }
}

function get($input, $db){
    
    $sql = "SELECT * FROM user WHERE 1=1 ";
    
    if(isset($input['id']) && !empty($input['id'])){
        $id = addslashes($input['id']);
        $sql .= "AND id = {$id} ";
    }
    
    if(isset($input['name']) && !empty($input['name'])){
        $name = addslashes($input['name']);
        $sql .= "AND name LIKE '%{$name}%' ";
    }
    
    if(isset($input['email']) && !empty($input['email'])){
        $email = addslashes($input['email']);
        $sql .= "AND email LIKE '%{$email}%' ";
    }
    
    if(isset($input['password']) && !empty($input['password'])){
        $password = md5($input['password']);
        $sql .= "AND password LIKE '{$password}' ";
    }

    $sql .= "ORDER BY name ASC ";

    (isset($input['limit']) && !empty($input['limit'])) ? 
        $limit = addslashes($input['limit']) : $limit = 5;

    (isset($input['offset']) && !empty($input['offset'])) ? 
        $offset = addslashes($input['offset']) : $offset = 0;

    $sql .= "LIMIT {$limit} OFFSET {$offset};";

    $mysqli_result = $db->query($sql);

    if($mysqli_result->num_rows === 0){
        $res = new Response(array(
            "msg" => "Nenhum dado encontrado.",
            "num_rows" => 0,
            "data" => null
        ), HttpStatus::$NO_CONTENT);

        $res->res();
    }else{
        $users = array();
        while($row = $mysqli_result->fetch_assoc()){
            array_push($users, $row);
        }

        $nextOffset = $limit + $offset + 1;
        $previousOffset = $offset - $limit - 1;

        $res = new Response(array(
            "msg" => "Dados encontrados.",
            "data" => $users,
            "num_rows" => sizeof($users),
            "limit" => $limit,
            "offset" => $offset,
            "nextPage" => (sizeof($users) == $limit) ? "/user.php?limit=$limit&offset=$nextOffset" : null,
            "previousPage" => ($offset !== 0) ? "/user.php?limit=$limit&offset=$previousOffset" : null
        ), HttpStatus::$SUCCESS);

        $res->res();
    }
}