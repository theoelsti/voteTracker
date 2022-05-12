<?php
session_start();
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){header("location: login.php");exit;}
include('html/header.html');
include('config.php');
// Check connection
if (mysqli_connect_errno()){echo "Failed to connect to MySQL: " . mysqli_connect_error();}
if(isset($_SESSION['admin'])&& $_SESSION['admin']== 1){
    include('html/adminHome.html');

} else {
    include('html/userHome.html');
    // Crée une requete sql
    $sql = "SELECT * FROM exports WHERE user_id = ?";
    $stmt = mysqli_prepare($link, $sql);
    mysqli_stmt_bind_param($stmt, "i", $param_id);
    $param_id = $_SESSION['id'];
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    mysqli_stmt_close($stmt);
    mysqli_close($link);
?>

<table class='table table-hover'>
<thead>
<tr>
<th scope='col'>#</th>
<th scope='col'>Nom du fichier</th>
<th scope='col'>Date de création</th>
<th scope='col'>Actions</th>
</tr>
</thead>
<tbody>
        <?php
    while ($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        echo "<th scope='row'>" . $row['id'] . "</th>";
        if($row['state'] == 0){
            echo "<td><i>Génération en cours...</i></td>";
        }
        else {
        echo "<td>" . $row['exportname'] . "</td>";
        }
        echo "<td>" . $row['date'] . "</td>";
        if($row['state'] == 0){
            echo "
            <td>
            <button type=\"button\" class=\"btn btn-primary disabled\" title=\"Télécharger au format .csv\"><i class=\"bi bi-filetype-csv\"></i></button>
            <a><button  type=\"button\" class=\"btn btn-danger disabled\" title=\"Supprimer\" \"><i class=\"bi bi-trash\"></i></button></a>
            </td>";
        }
        else {
            echo "
        <td>
        <a href=\"download.php?file=". $row['exportname']."\" ><button type=\"button\" class=\"btn btn-primary\" title=\"Télécharger au format .csv\"><i class=\"bi bi-filetype-csv\"></i></button></a>
        <a href=\"delete.php?file=".$row['exportname']."\"><button  type=\"button\" class=\"btn btn-danger\" title=\"Supprimer\" \"><i class=\"bi bi-trash\"></i></button></a>
        </td>";
        }

    }
    echo "</tbody>";
    echo "</table>";

    }   
    echo("<script>document.getElementById('userWelcome').innerHTML = 'Bienvenue, <a id=\"userName\">" .  $_SESSION['username'] . "</a>'</script>");
    if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
        echo("<script>document.getElementById('login').innerHTML = '<i data-feather=\"user\"></i> Mon compte'</script>") ;    
        echo("<script>document.getElementById('login').className ='nav-link active';</script>");
        echo("<script>feather.replace() </script>");

    }


?>