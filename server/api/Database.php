<?php

class Database extends mysqli {
    public function __construct($host = "localhost", $user = "mammycare", $pass = "mammycare123", $db = "mammycare"){
        parent::__construct($host, $user, $pass, $db);

        if(mysqli_connect_error()) throw new Exception("Erro ao conectar no banco de dados.");
    }
}
