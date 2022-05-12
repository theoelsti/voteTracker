<?php
session_start();


include('html/header.html');
require_once "config.php";

$file = substr(str_shuffle(md5(time())), 0, 15);
$file = $file . ".csv";
$date = date("Y-m-d", time());
$exportState = 0;
// Créer une entrée dans la base de données
$sql = "INSERT INTO exports (user_id,date,exportname,state) VALUES (?, ?, ?, ?);";
$stmt = mysqli_prepare($link, $sql);
mysqli_stmt_bind_param($stmt, 'issi',$_SESSION['id'], $date,$file, $exportState);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);

if($_POST["departmentSelect"] == "2"){ // Mode range
    print("bash ../data/dptExport.sh 2 \"".$_POST['dpt-lower'] . ";" . $_POST['dpt-upper']. "\" ". $_POST['resultChoice'] . " " . $file . " 2>&1");
    shell_exec("bash ../data/dptExport.sh 2 \"".$_POST['dpt-lower'] . ";" . $_POST['dpt-upper']. "\" ". $_POST['resultChoice'] . " " . $file . "&");
}
if ($_POST["departmentSelect"] == "1"){ // Mode tous les dpts
    print("./script.sh 1 ".$_POST['resultChoice'] . " " . $file . " 2>&1");
    shell_exec("bash ../data/dptExport.sh 1 ".$_POST['resultChoice'] . " " . $file . " &");
}


?>