<?php
require_once("./HttpStatus.php");

class Response{
    public function __construct($data = array("msg" => "Requisição executada com sucesso."), $code = HttpStatus::SUCCESS){
        header('Content-type: application/json', true, $dode);
        echo json_encode($data);
    }
}