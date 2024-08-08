<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);

    // Destinatário e assunto do e-mail
    $to = '0xdavidmorato@gmail.com'; // Seu e-mail
    $subject = 'Contato de: ' . $name . ' - ' . $subject;
    $message = "Nome: $name\nEmail: $email\n\nMensagem:\n$subject";
    $headers = "From: $email";

    // Envia o e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Falha ao enviar e-mail.";
    }
}
?>
