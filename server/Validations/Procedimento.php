<?php
require_once("../utils/HttpStatus.php");

function validate($data, $validateId = false){
    $notNull = array(
        "user_fk",
        "nommae",
        "nombebe",
        "dtnascbebe",
        "condnasc",
        "idgest",
        "idmae",
        "fumo",
        "alcool",
        "cafe",
        "medicamentos",
        "drogas",
        "prenatal",
        "parto",
        "primMamada",
        "leiteVaca",
        "leitePo",
        "agua",
        "cha",
        "soro",
        "alojamentoConjunto",
        "expAmamentacao",
        "lesaoAnterior",
        "apoioPosParto",
        "pretendeAmamentar",
        "cansadaDeprimida",
        "solucaoContinuidade",
        "localizacao",
        "descricao",
        "secrecao",
        "tecido",
        "dor",
        "candidiase",
        "reynaud"
    );

    if($validateId == true){
        array_push($notNull, "id");
    }

    $procedimento = array();

    foreach ($notNull as $field) {
        if(!isset($data[$field]))
            throw new Exception("Preencha todos os dados obrigatórios. $field", HttpStatus::$BAD_REQUEST);

        $procedimento[$field] = addslashes($data[$field]);
    }

    return $procedimento;
}