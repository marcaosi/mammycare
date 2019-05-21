<?php
require __DIR__ . '/../vendor/autoload.php';
use \Firebase\JWT\JWT;

$key = "Mammycare";

$token = array(
    "iss" => 'http://mammycare.net.br',
    'aud' => 'http://mammycare.net.br',
    'iat' => 9993920289,
    'nbf' => 9872018369
);

$jwt = JWT::encode($token, $key);

print_r($jwt);