const axios = require("axios")

const uri = "http://localhost/mammycare/api/procedimento.php"
const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjUiLCJuYW1lIjoiTWFyY29zIEFudG9uaW8iLCJlbWFpbCI6Im1hcmNhb3NpMjAxNEBob3RtYWlsLmNvbSIsInBhc3N3b3JkIjoiMjZmYjU2MjE3NDU0YjZjNWVjMmJmNTJjOGU4MmMxMTQiLCJwcm9mZXNzaW9uIjoicHJvZ3JhbWFkb3IifQ==.ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBaQ0k2SWpVaUxDSnVZVzFsSWpvaVRXRnlZMjl6SUVGdWRHOXVhVzhpTENKbGJXRnBiQ0k2SW0xaGNtTmhiM05wTWpBeE5FQm9iM1J0WVdsc0xtTnZiU0lzSW5CaGMzTjNiM0prSWpvaU1qWm1ZalUyTWpFM05EVTBZalpqTldWak1tSm1OVEpqT0dVNE1tTXhNVFFpTENKd2NtOW1aWE56YVc5dUlqb2ljSEp2WjNKaGJXRmtiM0lpZlE9PS5iV0Z0YlhsallYSmw="
const instance = axios.create({
    baseURL: 'http://localhost/mammycare/api/',
    timeout: 1000,
    headers: {'Authorization': jwt}
});

instance.get('procedimento.php').then(res => {
    console.log(res.data)
})

fetch(uri, {
    headers: {
        "Authorization": 'Bearer '+ jwt
    },
    method: "get"
}).then(res => {
    console.log(res)
})