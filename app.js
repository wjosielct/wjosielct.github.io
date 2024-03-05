let menuButton = document.querySelector(".menu-btn");

let navigation = document.querySelector(".navigation");

let arrowUp = document.querySelector(".arrow-up");

let arrowDown = document.querySelector(".arrow-down");

let isNavigationVisible = false;

menuButton.onclick = function(){
    if (isNavigationVisible) {
        navigation.style.display = "none";
        arrowDown.style.display = "inline-block";
        arrowUp.style.display = "none";
        isNavigationVisible = false;
    }
    else {
        navigation.style.display = "block";
        arrowDown.style.display = "none";
        arrowUp.style.display = "inline-block";
        isNavigationVisible = true;
    }
};