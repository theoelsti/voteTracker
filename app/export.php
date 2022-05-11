<?php
session_start();


include('html/header.html');
require_once "config.php";

print_r($_POST);
print("\n");

if($_POST["departmentSelect"] == "2"){ // Mode range
    print("./script.sh 2 ".$_POST['dpt-lower'] . ";" . $_POST['dpt-upper']. " ". $_POST['resultChoice']);
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