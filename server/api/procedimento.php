<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");

require_once(dirname(__FILE__)."/../utils/Database.php");
require_once(dirname(__FILE__)."/../utils/HttpStatus.php");
require_once(dirname(__FILE__)."/../utils/Response.php");
require_once(dirname(__FILE__)."/../Validations/Procedimento.php");

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
            delete($input, $db);
        break;
    }
}catch(Exception $e){
    $res = new Response($e->getMessage(), $e->getCode());
    $res->res();
}

function put($input, $db){
    $procedimento = validate($input, true);

    $sql = "UPDATE procedimento SET
    user_fk = ".getValue($procedimento, "user_fk").",
    nommae = ".getValue($procedimento, "nommae").",
    nombebe = ".getValue($procedimento, "nombebe").",
    dtnascbebe = ".getValue($procedimento, "dtnascbebe").",
    condnasc = ".getValue($procedimento, "condnasc").",
    idgest = ".getValue($procedimento, "idgest").",
    idmae = ".getValue($procedimento, "idmae").",
    fumo = ".getValue($procedimento, "fumo").",
    alcool = ".getValue($procedimento, "alcool").",
    cafe = ".getValue($procedimento, "cafe").",
    medicamentos = ".getValue($procedimento, "medicamentos").",
    drogas = ".getValue($procedimento, "drogas").",
    prenatal = ".getValue($procedimento, "prenatal").",
    parto = ".getValue($procedimento, "parto").",
    primMamada = ".getValue($procedimento, "primMamada").",
    leiteVaca = ".getValue($procedimento, "leiteVaca").",
    leitePo = ".getValue($procedimento, "leitePo").",
    agua = ".getValue($procedimento, "agua").",
    cha = ".getValue($procedimento, "cha").",
    soro = ".getValue($procedimento, "soro").",
    alojamentoConjunto = ".getValue($procedimento, "alojamentoConjunto").",
    expAmamentacao = ".getValue($procedimento, "expAmamentacao").",
    lesaoAnterior = ".getValue($procedimento, "lesaoAnterior").",
    apoioPosParto = ".getValue($procedimento, "apoioPosParto").",
    pretendeAmamentar = ".getValue($procedimento, "pretendeAmamentar").",
    cansadaDeprimida = ".getValue($procedimento, "cansadaDeprimida").",
    solucaoContinuidade = ".getValue($procedimento, "solucaoContinuidade").",
    localizacao = ".getValue($procedimento, "localizacao").",
    descricao = ".getValue($procedimento, "descricao").",
    secrecao = ".getValue($procedimento, "secrecao").",
    tecido = ".getValue($procedimento, "tecido").",
    dor = ".getValue($procedimento, "dor").",
    candidiase = ".getValue($procedimento, "candidiase").",
    reynaud = ".getValue($procedimento, "reynaud")."
    WHERE id = {$procedimento["id"]} LIMIT 1;";

    $mysqli_result = $db->query($sql);

    if(!$mysqli_result) throw new Exception("Impossível salvar alterações.", HttpStatus::$BAD_SERVER);
    else{
        $res = new Response(array(
            "msg" => "Alteração realizada com sucesso.",
            "data" => $procedimento,
            "uri" => "/procedimento.php?id=".$procedimento['id']
        ), HttpStatus::$SUCCESS);

        $res->res();
    }
}

function getValue($procedimento, $field){
    $boolFields = array(
        "fumo","alcool","cafe","leiteVaca","leitePo","agua","cha","soro","alojamentoConjunto","expAmamentacao","lesaoAnterior","apoioPosParto","pretendeAmamentar","cansadaDeprimida","candidiase","reynaud"
    );

    if(in_array($field, $boolFields)){
        if($procedimento[$field] == "false" || $procedimento[$field] == 0){
            return 0;
        }else{
            return 1;
        }
    }

    return "'{$procedimento[$field]}'";
}

function post($input, $db){
    $procedimento = validate($input);

    $sql = "INSERT INTO procedimento(user_fk, nommae, nombebe, dtnascbebe, condnasc, idgest, idmae, fumo, alcool, cafe, medicamentos, drogas, prenatal, parto, primMamada, leiteVaca, leitePo, agua, cha, soro, alojamentoConjunto, expAmamentacao, lesaoAnterior, apoioPosParto, pretendeAmamentar, cansadaDeprimida, solucaoContinuidade, localizacao, descricao, secrecao, tecido, dor, candidiase, reynaud)
    VALUES (
    ".getValue($procedimento, 'user_fk').",
    ".getValue($procedimento, 'nommae').",
    ".getValue($procedimento, 'nombebe').",
    ".getValue($procedimento, 'dtnascbebe').",
    ".getValue($procedimento, 'condnasc').",
    ".getValue($procedimento, 'idgest').",
    ".getValue($procedimento, 'idmae').",
    ".getValue($procedimento, 'fumo').",
    ".getValue($procedimento, 'alcool').",
    ".getValue($procedimento, 'cafe').",
    ".getValue($procedimento, 'medicamentos').",
    ".getValue($procedimento, 'drogas').",
    ".getValue($procedimento, 'prenatal').",
    ".getValue($procedimento, 'parto').",
    ".getValue($procedimento, 'primMamada').",
    ".getValue($procedimento, 'leiteVaca').",
    ".getValue($procedimento, 'leitePo').",
    ".getValue($procedimento, 'agua').",
    ".getValue($procedimento, 'cha').",
    ".getValue($procedimento, 'soro').",
    ".getValue($procedimento, 'alojamentoConjunto').",
    ".getValue($procedimento, 'expAmamentacao').",
    ".getValue($procedimento, 'lesaoAnterior').",
    ".getValue($procedimento, 'apoioPosParto').",
    ".getValue($procedimento, 'pretendeAmamentar').",
    ".getValue($procedimento, 'cansadaDeprimida').",
    ".getValue($procedimento, 'solucaoContinuidade').",
    ".getValue($procedimento, 'localizacao').",
    ".getValue($procedimento, 'descricao').",
    ".getValue($procedimento, 'secrecao').",
    ".getValue($procedimento, 'tecido').",
    ".getValue($procedimento, 'dor').",
    ".getValue($procedimento, 'candidiase').",
    ".getValue($procedimento, 'reynaud').");
    ";

    $mysqli_result = $db->query($sql);

    if(!$mysqli_result) throw new Exception("Impossível gravar registro.", HttpStatus::$BAD_SERVER);
    else{
        $procedimento['id'] = $db->insert_id;
        $res = new Response(array(
            "msg" => "Registro criado com sucesso.",
            "data" => $procedimento,
            "uri" => "/procedimento.php?id=".$procedimento['id']
        ), HttpStatus::$CREATED);

        $res->res();
    }
}

function delete($input, $db){
    if(!isset($input['id']) || empty($input['id']))
        throw new Exception("Campo id obrigatório.", HttpStatus::$BAD_REQUEST);

    $id = addslashes($input['id']);

    $sql = "DELETE FROM procedimento WHERE id = {$id} LIMIT 1;";

    $mysqli_result = $db->query($sql);

    if($mysqli_result){
        $res = new Response(array(
            "msg" => "Registro excluído com sucesso.",
            "data" => null
        ), HttpStatus::$NO_CONTENT);
        
        $res->res();
    }else
        throw new Exception("Falha ao excluir. Tente novamente.", HttpStatus::$BAD_SERVER);
}

function get($input, $db){
    $sql = "SELECT A.*, B.name, B.email, B.profession FROM procedimento A INNER JOIN user B ON (B.id = A.user_fk) WHERE 1=1 ";

    if(isset($input['nommae']) && !empty($input['nommae'])){
        $nommae = addslashes($input['nommae']);
        $sql .= "AND A.nommae LIKE '%{$nommae}%' ";
    }

    if(isset($input['nombebe']) && !empty($input['nombebe'])){
        $nombebe = addslashes($input['nombebe']);
        $sql .= "AND A.nombebe LIKE '%{$nombebe}%' ";
    }

    if(isset($input['user']) && !empty($input['user'])){
        $user = addslashes($input['user']);
        $sql .= "AND A.user_fk = {$user} ";
    }

    if(isset($input['id']) && !empty($input['id'])){
        $id = addslashes($input['id']);
        $sql .= "AND A.id = {$id} ";
    }

    $sql .= "ORDER BY A.nommae ASC , A.nombebe ASC ";

    (isset($input['limit']) && !empty($input['limit'])) ? 
        $limit = addslashes($input['limit']) : $limit = 5;

    (isset($input['offset']) && !empty($input['offset'])) ? 
        $offset = addslashes($input['offset']) : $offset = 0;

    $sql .= "LIMIT {$limit} OFFSET {$offset};";
    
    $mysqli_result = $db->query($sql);

    if($mysqli_result == false || $mysqli_result->num_rows === 0){
        $res = new Response(array(
            "msg" => "Nenhum dado encontrado.",
            "num_rows" => 0,
            "data" => null
        ), HttpStatus::$NO_CONTENT);

        $res->res();
    }else{
        $procedimentos = array();
        while($row = $mysqli_result->fetch_assoc()){
            $user = array(
                "id" => $row['user_fk'],
                "name" => $row['name'],
                "email" => $row['email'],
                "profession" => $row['profession']
            );

            unset($row['user_fk']);
            unset($row['name']);
            unset($row['email']);
            unset($row['profession']);

            $row['user'] = $user;
            array_push($procedimentos, $row);
        }

        $nextOffset = $limit + $offset + 1;
        $previousOffset = $offset - $limit - 1;

        $res = new Response(array(
            "msg" => "Dados encontrados.",
            "data" => $procedimentos,
            "num_rows" => sizeof($procedimentos),
            "limit" => $limit,
            "offset" => $offset,
            "nextPage" => (sizeof($procedimentos) == $limit) ? "/procedimento.php?limit=$limit&offset=$nextOffset" : null,
            "previousPage" => ($offset !== 0) ? "/procedimento.php?limit=$limit&offset=$previousOffset" : null
        ), HttpStatus::$SUCCESS);

        $res->res();
    }
}