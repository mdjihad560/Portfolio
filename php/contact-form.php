<?php
	
	require 'config.php';

	$coder_name = $_POST['name'];
	$coder_email = $_POST['email'];
	$coder_massage = $_POST['massage'];

	$e_content = "You have been contacted by ". $coder_email . ". Their additional massage is as follow. <br><br>";

	$e_content .= $coder_massage . "<br><br>";
	$e_content .= "You can contact $coder_email via email, $coder_email";

	$headers = "From: " . $coder_email . PHP_EOL;
	$headers .= "Reply-To: $coder_email" . PHP_EOL;
	$headers .= "MIME-Version: 1.0" . PHP_EOL;
	$headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;

	$mail = mail(CODER_EMAIL, CODER_SUBJECT, $e_content, $headers);

	if ($mail) {
		echo SUCCESS_MASSAGE;
	}

?>