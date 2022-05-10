<?php
define('DB_SERVER', '127.0.0.1');
define('DB_USERNAME', 'voteTrackerServer');
define('DB_PASSWORD', 'w8rjVidM#!5wLoU59tivkKq%dw5154HoEC');
define('DB_NAME', 'votetracker');
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>