let filename = window.location.pathname.split("/").pop().split(".")[0];
document.getElementById(filename).className ="nav-link active";