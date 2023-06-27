<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$rates = $_POST['rates'];
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $to      = 'fitlent@fitlent.ru';
    $subject = 'Новый заказ!';
    $message = 'Заказ от: '.$name.' Номер телефона: '.$phone.' По тарифу: '.$rates;

    $subject = '=?utf-8?b?'. base64_encode('Новый заказ!') .'?=';
    $fromMail = 'info@fitlent.ru';
    $fromName = 'Fitlent';
    $date = date(DATE_RFC2822);
    $messageId='<'.time().'-'.md5($fromMail.$to).'@'.$_SERVER['SERVER_NAME'].'>';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8". "\r\n";
    $headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";
    $headers .= "Reply-To: info@fitlent.ru\r\n";
    $headers .= "X-Mailer: PHP/".phpversion()."\r\n";
    $headers .= "Date: ". $date ." \r\n";
    $headers .= "Message-ID: ". $messageId ." \r\n";

    mail($to, $subject, $message, $headers);
}
echo 1;







?>