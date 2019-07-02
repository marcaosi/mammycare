<?php
require_once("./HttpStatus.php");

class Response{
    private $code;
    private $data;

    public function __construct($data = array("msg" => "Requisição executada com sucesso."), $code = HttpStatus::SUCCESS){
        $this->code = $code;
        $this->data = utf8_encode($data);
    }

    public function res(){
        header('Content-type: application/json', true, $dode);
        echo json_encode($data);
        exit;
    }
}