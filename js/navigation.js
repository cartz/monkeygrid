function navigation() {
    var x = document.getElementById("mi");
    if (x.className === "ma") {
        x.className += " show";
    } else {
        x.className = "ma";
    }
}