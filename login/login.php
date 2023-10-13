<?php
$email_valido = "name@mydomain.com";
$senha_valida = "password";

$email_digitado = $_POST['iemail'];
$senha_digitada = $_POST['ipassword'];

if (filter_var($email_digitado, FILTER_VALIDATE_EMAIL)) {
    if ($email_digitado == $email_valido && $senha_digitada == $senha_valida) {
        header("Location: ./discover.html");
        exit;
    } else {
        header("Location: ./login.html");
        exit;
    }
}
?>
