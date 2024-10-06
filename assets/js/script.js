document.addEventListener("DOMContentLoaded", () => {
    const buttonID = document.getElementById("timeline__submit");
    
    function showAlert() {
        alert("El resto del Changelog está en proceso");
    }

    document.addEventListener("click", showAlert);
});