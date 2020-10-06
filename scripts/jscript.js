// Dropdrown-meny
function menudropdown() {
    let menu = document.getElementById("dropDownMenu");

    if (menu.className === "nav-wrapper__list-hidden") {
        menu.className += " dropdown__show";
    }
    else {
        menu.className = "nav-wrapper__list-hidden";
        }
}


// Visa adresskortet på kontakt
function adrCard() {
    let adr = document.getElementById("adrcard");

    if (adr.style.display === "none") {
        adr.style.display = "block";
    }
    else {
        adr.style.display = "none";
    }

}
