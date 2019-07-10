<?php

class Database extends mysqli {
    public function __construct($host = "mysql.hostinger.com.br", $user = "u673376319_mammy", $pass = "jSA3yRfoo0LF", $db = "u673376319_mammy"){
        parent::__construct($host, $user, $pass, $db);

        if(mysqli_connect_error()) throw new Exception("Erro ao conectar no banco de dados.");
    }
}
