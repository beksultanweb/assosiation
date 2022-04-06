<?php 

$organization = $_POST['orgname'];
$region = $_POST['region'];
$name = $_POST['name'];
$bin = $_POST['bin'];
$students = $_POST['students'];
$phone = $_POST['phone'];
$sport = $_POST['sport'];
$art = $_POST['art']; 
$email = $_POST['email'];
$instagram = $_POST['instagram'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'artsporteduas@gmail.com';                 // Наш логин
$mail->Password = 'lxwzpuxiapjpatof';                           // Наш пароль от ящика		#A6DZ*36
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('kunanbai-58@mail.ru', 'Ассоциация поставщиков Artsportedu');   // От кого письмо 
$mail->addAddress('a.artsportedurk@mail.ru');
$mail->addAddress('beksultan.sagnaev@gmail.com');     
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта ассоциации';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Организация: ' . $organization . ' <br>
	БИН: ' . $bin . ' <br>
	Регион: ' . $region . ' <br>
	Руководитель: ' . $name . ' <br>
	Количество студентов: ' . $students . ' <br>
	Спорт: ' . $sport . ' <br>
	Творчество: ' . $art . ' <br>
	Номер телефона: ' . $phone . '<br>
	Email: ' . $email . '<br>
	Instagram: ' . $instagram . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>