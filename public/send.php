<?php
// Файлы phpmailer
require __DIR__.'/phpmailer/PHPMailer.php';
require __DIR__.'/phpmailer/SMTP.php';
require __DIR__.'/phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$request = file_get_contents('php://input');
$_POST = json_decode($request, JSON_UNESCAPED_SLASHES);
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];


// Формирование самого письма
$title = "Новое обращение CPK Partner";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message<br>
<b>Почта:</b> $email
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'ilove13@internet.ru'; // Логин на почте
    $mail->Password   = 'A6We4hnJ6KCjeyTjhyxh'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('ilove13@internet.ru', 'АНО ДПО ЦПК Партнёр'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('info@promnado.ru');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    
// Проверяем отравленность сообщения

if ($mail->send()) {$result = "success"; $status = 'ok';} 
else {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
header('content-type: application/json');

echo json_encode([
    'result' => $result,
    'status' => $status,
]);
// Отображение результата