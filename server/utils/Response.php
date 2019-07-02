<?php
require_once("HttpStatus.php");

class Response{
    private $code;
    private $data;

    public function __construct($data = array("msg" => "Requisição executada com sucesso."), $code = 200){
        $this->code = $code;
        $this->data = $data;
    }

    public function res(){
        header('Content-type: application/json', true, $this->code);
        echo json_encode($this->data);
        exit;
    }
}