<?php
session_start();
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){header("location: login.php");exit;}
include('html/header.html');
include('config.php');
// Check connection
if (mysqli_connect_errno()){echo "Failed to connect to MySQL: " . mysqli_connect_error();}
if(isset($_SESSION['admin'])&& $_SESSION['admin']== 1){
    include('adminHome.html');

} else {
    include('html/userHome.html');

}   
echo("<script>document.getElementById('userWelcome').innerHTML = 'Bienvenue <a id=\"userName\">" .  $_SESSION['username'] . "</a>'</script>");
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    echo("<script>document.getElementById('login').innerHTML = '<i data-feather=\"user\"></i> Mon compte'</script>") ;    
    echo("<script>document.getElementById('login').className ='nav-link active';</script>");
    echo("<script>feather.replace() </script>");

}


?>