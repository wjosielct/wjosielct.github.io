document.getElementById("hamburguer").addEventListener("click", function(){
    document.getElementById("navigation").classList.toggle("visible");
    
    if (document.getElementById("navigation").classList.contains("visible")) {
        document.querySelector(".hamburguer-container").style.backgroundColor = "blueviolet";
    }
    else {
        document.querySelector(".hamburguer-container").style.backgroundColor = "";
    }
})