
function hideOnPage(){
    document.getElementById('dptMultiSelector').hidden = true;
    document.getElementById("dptRangeSelector").hidden = true;  
    //allDpt
    document.getElementById("allDpt").hidden = true;


}
window.onload = hideOnPage;


function updateDptChoices(){
    // Recupere la valeur de l'input et le met dans la console
    console.log(document.getElementById("inputGroupSelect01").value);
    switch(document.getElementById("inputGroupSelect01").value){
        case "1":
            document.getElementById("dptMultiSelector").hidden = true;
            document.getElementById("dptRangeSelector").hidden = true;    
            document.getElementById("allDpt").hidden = false;        
            break;
        case "2":
            document.getElementById("dptMultiSelector").hidden = true;
            document.getElementById("dptRangeSelector").hidden = false;
            document.getElementById("allDpt").hidden = true;            
            break;
        case "3":
            document.getElementById("dptMultiSelector").hidden = false;
            document.getElementById("dptRangeSelector").hidden = true;            
            document.getElementById("allDpt").hidden = true;            

            break;
        case "Choix...":
            document.getElementById("dptMultiSelector").hidden = true;
            document.getElementById("dptRangeSelector").hidden = true;            
            document.getElementById("allDpt").hidden = true;            

            break;

        }
}
dptMulti=1
function addButton(){
    dptMulti=dptMulti+1
    console.log("Coucou")
    // Ajoute un nouveau bouton en dessous de la liste
    var firstDiv = document.createElement("div");
    firstDiv.className = "input-group mb-3";
    // Créer une nouvelle div dans la firstDiv
    var secondDiv = document.createElement("div");
    secondDiv.className = "input-group-prepend";
    // Créer un bouton dans la deuxieme div
    var button = document.createElement("button");
    button.className = "btn btn-outline-secondary";
    button.type = "button";
    button.innerHTML = "+";
    button.onclick = addButton;
    // Ajouter le bouton dans la deuxieme div
    secondDiv.appendChild(button);
    // Ajouter la deuxieme div dans la firstDiv
    firstDiv.appendChild(secondDiv);
    // Créer un input dans la firstDiv
    var input = document.createElement("input");
    input.className = "form-control";
    input.name = "dpt-multi-" + dptMulti;
    input.type = "Nouveau Département...";
    // Ajoute l'input au firstDiv
    firstDiv.appendChild(input);
    // Ajoute la firstDiv au body
    document.getElementById('dptMultiSelector').appendChild(firstDiv);
    



}

// <div class="input-group mb-3">
// <div class="input-group-prepend">
//   <button class="btn btn-outline-secondary" type="button" onclick="addButton">Button</button>
// </div>
// <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
// </div>