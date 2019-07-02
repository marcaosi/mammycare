<?php

abstract class JWT{
    public static function decodeToken($token, $secret = 'mammycare'){

        $token = explode(".", $token);
        if($token == false) throw new Exception("Token inválido.", 403);

        $header = $token[0];
        $payload = $token[1];
        $signature = $token[2];

        $signature2 = JWT::getSignature($header, $payload, $secret);

        if($signature !== $signature2) throw new Exception("Token inválido.", 403);

        $payload = base64_decode($payload);
        $payload = json_decode($payload, true);
        
        return $payload;
    }

    public static function getToken($payload, $secret = 'mammycare'){
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);

        $payload = json_encode($payload);

        // Encode Header to Base64Url String
        $base64UrlHeader = base64_encode($header);

        // Encode Payload to Base64Url String
        $base64UrlPayload = base64_encode($payload);

        // Create Signature Hash
        // $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
        $signature = JWT::getSignature($base64UrlHeader, $base64UrlPayload, $secret);

        // Encode Signature to Base64Url String
        $base64UrlSignature = $signature;

        // Create JWT
        $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

        return $jwt;
    }

    private static function getSignature($header, $payload, $secret){
        return base64_encode($header.".".$payload.".".base64_encode($secret));
    }
}