<?php
    $server = "172.17.0.2";
    $db = "mammycare";
    $user = "root";
    $pwd = "mammycare";

function getConnection(){
    $conn = mysqli_connect($server, $user, $pwd, $db);
    if(!$conn){
        echo "Erro ao conectar ao banco de dados.";
        die();
    }

    return $conn;
}

function closeConnection($conn){
    mysqli_close($conn);
}

function query($sql, $conn){
    if(strpos(strtoupper($sql), "SELECT") !== FALSE){
        throw new Exception("Impossível executar query 'SELECT'. Use query_string()");
    }

    $result = mysqli_query($conn, $sql);

    if($result){
        return true;
    }else{
        throw new Exception("Impossível executar a query.");
    }
}

function query_string($sql, $conn){
    if(strpos(strtoupper($sql), "SELECT") === FALSE){
        throw new Exception("Impossível executar query diferente de 'SELECT'. Use query()");
    }

    $result = mysqli_query($conn, $sql);

    $array = array();

    while($line = mysqli_fetch_assoc($result)){
        array_push($line);
    }

    return $array;
}