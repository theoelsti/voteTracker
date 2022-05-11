let filename = window.location.pathname.split("/").pop().split(".")[0];
if(filename == "index" || filename == "votes"){
document.getElementById(filename).className ="nav-link active";
}