<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$rates = $_POST['rates'];
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $to      = 'leon200207@yandex.ru';
    $subject = 'the subject';
    $message = 'hello';
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
}







?>