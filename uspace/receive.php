<?php  

//530049680:AAHDlgWutkL5SfKNvwRLwVzsFEn5qDY5CEM
//299093453  

	$id = $_REQUEST['id'];
	$token = "530049680:AAHDlgWutkL5SfKNvwRLwVzsFEn5qDY5CEM";
	$chatID = "299093453";
	$from = $_REQUEST['name'];
	$to = $_REQUEST['tel'];

	$url = "https://api.telegram.org/bot" . $token . "/SendMessage?chat_id=" . $chatID;
    $url = $url . "&text=".urlencode($from)."----".urlencode($to)."----";
    //https://api.telegram.org/bot530049680:AAHDlgWutkL5SfKNvwRLwVzsFEn5qDY5CEM/SendMessage?chat_id=299093453&text=123
    
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
    header('Location: thanks.html');
    //header('Location: https://www.uspace.kz/');
?>