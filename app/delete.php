<?php
// begin the session
session_start();
require("html/header.html");
require_once("config.php");


if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
// Get the parameter "file" from the URL
$file = $_GET['file'];
// Check if the user have the file
$sql = "SELECT * FROM exports WHERE exportname = ? AND user_id = ?";
$stmt = mysqli_prepare($link, $sql);
mysqli_stmt_bind_param($stmt, "si", $param_file, $param_id);
$param_file = $file;
$param_id = $_SESSION['id'];
mysqli_stmt_execute($stmt);
mysqli_stmt_store_result($stmt);
$count = mysqli_stmt_num_rows($stmt);
mysqli_stmt_close($stmt);
// If the user doesn't have the file, redirect him to the home page
if($count == 0){
    header("HTTP/1.1 401 Unauthorized");
    
    echo "<script>alert(\"Ce fichier ne vous appartient pas !\")</script>";
}
else {
    // Delete the file
    $sql = "DELETE FROM exports WHERE exportname = ? AND user_id = ?";
    $stmt = mysqli_prepare($link, $sql);
    mysqli_stmt_bind_param($stmt, "si", $param_file, $param_id);
    $param_file = $file;
    $param_id = $_SESSION['id'];
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    // Redirect the user to the home page
    header("location: home.php");
    exit;
}

?>