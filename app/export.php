<?php
session_start();


include('html/header.html');
require_once "config.php";

$file = substr(str_shuffle(md5(time())), 0, 15);
$file = $file . ".csv";
if($_POST["departmentSelect"] == "2"){ // Mode range
    print("./script.sh 2 ".$_POST['dpt-lower'] . ";" . $_POST['dpt-upper']. " ". $_POST['resultChoice'] . " " . $file);
}
    if ($_POST["departmentSelect"] == "1"){ // Mode tous les dpts
    print("./script.sh 1 ".$_POST['resultChoice'] . " " . $file);
}


?>

<!-- 
Script : 
Parametre 1 : 
Mode de dpt
Si mode all:
    Parametre 2 :
    Vainqueur
Si mode range: 
    Parametre 2 :
       low;high
    Parametre 3 :
        Vainqueur
Si mode multi:
    Parametre 2 :
        1;2;3......
    Parametre 3 :
        Vainqueur
    




-->