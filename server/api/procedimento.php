<?php
require_once("../utils/connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");

$input = file_get_contents("php://input");

$connection = getConnection();
switch($_SERVER["REQUEST_METHOD"]){
    case 'POST':
        post(json_decode($input, true), $connection);
    break;
    case 'GET':
        get($_GET, $connection);
    break;
    case 'PUT':
        put(json_decode($input, true), $connection);
    break;
    case 'DELETE':
        delete(json_decode($input, true), $connection);
    break;
}
closeConnection($connection);

function delete($data, $conn){
    try{
        $id = addslashes($data['id']);
        $sql = "DELETE FROM procedimento WHERE id = {$id};";
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

function put($data, $conn){
    try{
        
        validate($data);

        foreach ($data as $key => $value) {
            $data[$key] = addslashes($value);
        }

        $array_fields = array('user_fk', 'nommae', 'nombebe', 'dtnascbebe', 'condnasc', 'idgest', 'idmae', 'fumo', 'alcool', 'cafe', 'medicamentos', 'drogas', 'prenatal', 'parto', 'primMamada', 'leiteVaca', 'leitePo', 'agua', 'cha', 'soro', 'alojamentoConjunto', 'expAmamentacao', 'lesaoAnterior', 'apoioPosParto', 'pretendeAmamentar', 'cansadaDeprimida', 'solucaoContinuidade', 'localizacao', 'descricao', 'secrecao', 'tecido', 'dor', 'candidiase', 'reynaud');

        $array_data = array();

        foreach ($array_fields as $key) {
            if(isset($data[$key]) && !empty($data[$key])){
                $value = $data[$key];
                array_push($array_data, "{$key} = '{$value}'");
            }
        }

        $values = implode(",", $array_data);

        $sql = "UPDATE procedimento SET {$values} WHERE id = {$data['id']};";

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
            $data[$key] = addslashes($value);
        }

        $array_fields = array('user_fk', 'nommae', 'nombebe', 'dtnascbebe', 'condnasc', 'idgest', 'idmae', 'fumo', 'alcool', 'cafe', 'medicamentos', 'drogas', 'prenatal', 'parto', 'primMamada', 'leiteVaca', 'leitePo', 'agua', 'cha', 'soro', 'alojamentoConjunto', 'expAmamentacao', 'lesaoAnterior', 'apoioPosParto', 'pretendeAmamentar', 'cansadaDeprimida', 'solucaoContinuidade', 'localizacao', 'descricao', 'secrecao', 'tecido', 'dor', 'candidiase', 'reynaud');

        $array_data = array();

        foreach ($array_fields as $key) {
            if(isset($data[$key]))
                array_push($array_data, $data[$key]);
            else
                array_push($array_data, '');
        }
        $values = implode(",", $array_data);
        $values = str_replace(",", "', '", $values);
        $values = "'".$values."'";

        $fields = implode(",", $array_fields);

        $sql = "INSERT INTO procedimento($fields)VALUES ($values)";

        query($sql, $conn);

        res(200, json_encode($data, true));
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
        foreach ($data as $key => $value) {
            $data[$key] = addslashes($value);
        }

        $sql = "SELECT * FROM procedimento WHERE 1=1 ";

        if(isset($data['id']) && !empty($data['id'])){
            $sql .= " AND id = {$data['id']}";
        }

        if(isset($data['user']) && !empty($data['user'])){
            $sql .= " AND user_fk = '{$data['user']}'";
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
    if(empty(trim($data['user_fk'])) || trim($data['user_fk']) == ''){
        throw new Exception("Campo user_fk é obrigatório.", 400);
    }
}