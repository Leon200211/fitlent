<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$rates = $_POST['rates'];
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $to      = 'jokeycoffe@gmail.com';
    $subject = 'Новый заказ!';
    $message = 'Заказ от: '.$name.' Номер телефона: '.$phone.' По тарифу: '.$rates;

    mail($to, $subject, $message);
}
echo 1;







?>