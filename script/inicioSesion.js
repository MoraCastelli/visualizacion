// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Form validation and redirection
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    if (email === "cliente" && password === "123") {
        window.location.href = "cliente-home.html"; // Redirect to the client's home page
    } else if (email === "profesional" && password === "123") {
        window.location.href = "profesional-home.html"; // Redirect to the client's home page
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
