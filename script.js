// HAMBURGER TOGGLE STARTS
function toggleDiv() {
    var div = document.getElementById("menu");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
}
// HAMBURGER TOGGLE ENDS