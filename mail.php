<?php
//get data from form  
$name = $_POST['name'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$email= $_POST['email'];
$subject= $_POST['subject'];
$message= $_POST['message'];
$to = "heenwesam@gmail.com";
$txt ="Name : ". $name . "\r\nAddress : " . $address . "\r\nPhone : " . $phone . "\r\nSubject : " . $subject . "\r\nEmail : " . $email ."\r\nMessage :" . $message;
$headers = "From: Idress@website.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
?>