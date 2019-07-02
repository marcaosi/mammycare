<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");

require_once("C:/wampp//utils/Database.php");
// require_once("../utils/HttpStatus.php");
// require_once("../utils/Response.php");
try{
    // $db = new Database();

    $input = [];
    parse_str(file_get_contents("php://input"),$input);
    
    switch($_SERVER["REQUEST_METHOD"]){
        case 'POST':
            post($input, $db);
        break;
        case 'GET':
            // get($_GET, $db);
        break;
        case 'PUT':
            put($input, $db);
        break;
        case 'PATCH':
            patch($input, $db);
        break;
        case 'DELETE':
            delete($input['id'], $db);
        break;
    }

    
}catch(Exception $e){
    $res = new Response($e->getMessage(), $e->getCode());
    $res->res();
}