function updateDptChoices(){
    // Recupere la valeur de l'input et le met dans la console
    console.log(document.getElementById("inputGroupSelect01").value);

}
function addButton(){
    // Ajoute un nouveau bouton en dessous de la liste
    var newButton = document.createElement("button");
    newButton.innerHTML = "Nouveau bouton";
    newButton.className = "btn btn-primary";
    document.getElementById("buttonList").appendChild(newButton);
    
}