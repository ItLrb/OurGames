<?php
// Simule uma verificação de credenciais (substitua por lógica real)
$email_valido = "";
$senha_valida = "";

$usuario_digitado = $_POST['email'];
$senha_digitada = $_POST['password'];

if ($email_digitado === $email_valido && $senha_digitada === $senha_valida) {
    // Credenciais válidas, redirecione para o site local
    header("Location: ./discover.html");
    exit;
} else {
    // Credenciais inválidas, redirecione de volta para a página de login
    header("Location: ./login.html");
    exit;
}
?>
