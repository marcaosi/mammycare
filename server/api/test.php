<?php

$fields = array('user_fk', 'nommae', 'nombebe', 'dtnascbebe', 'condnasc', 'idgest', 'idmae', 'fumo', 'alcool', 'cafe', 'medicamentos', 'drogas', 'prenatal', 'parto', 'primMamada', 'leiteVaca', 'leitePo', 'agua', 'cha', 'soro', 'alojamentoConjunto', 'expAmamentacao', 'lesaoAnterior', 'apoioPosParto', 'pretendeAmamentar', 'cansadaDeprimida', 'solucaoContinuidade', 'localizacao', 'descricao', 'secrecao', 'tecido', 'dor', 'candidiase', 'reynaud');

$data = array(
    "user_fk" => 2,
    "nommae" => "Maria",
    "reynaud" => "Sim"
);


$array_fields = array('user_fk', 'nommae', 'nombebe', 'dtnascbebe', 'condnasc', 'idgest', 'idmae', 'fumo', 'alcool', 'cafe', 'medicamentos', 'drogas', 'prenatal', 'parto', 'primMamada', 'leiteVaca', 'leitePo', 'agua', 'cha', 'soro', 'alojamentoConjunto', 'expAmamentacao', 'lesaoAnterior', 'apoioPosParto', 'pretendeAmamentar', 'cansadaDeprimida', 'solucaoContinuidade', 'localizacao', 'descricao', 'secrecao', 'tecido', 'dor', 'candidiase', 'reynaud');

$array_data = array();

foreach ($array_fields as $key) {
    if(isset($data[$key]) && !empty($data[$key])){
        $value = $data[$key];
        array_push($array_data, "'{$key}' = '{$value}'");
    }
}

$values = implode(",", $array_data);

print_r($values);
exit();