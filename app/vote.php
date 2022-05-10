<?php   
    session_start();
    include("html/header.html");
    include("html/vote.html");
    if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
        echo("<script>document.getElementById('login').innerHTML = '<i data-feather=\"user\"></i> Mon compte'</script>") ;     
        echo("<script>feather.replace() </script>");
    }
?>
