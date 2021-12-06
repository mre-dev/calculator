let DARK_MODE = true;
let flagMenu = true;

document.getElementById("dark-mode").addEventListener("change", function(event) {
    DARK_MODE = !DARK_MODE;
    darkMode(DARK_MODE);
});

function darkMode(mode) {
    document.body.classList.toggle("dark-mode-style");
    document.getElementById("standard-calc").classList.toggle("standard-calc-light");

    document.querySelectorAll("#standard-calc table tr td button.calc-op-button-dark").forEach(elemnt => {
        elemnt.classList.toggle("calc-op-button-light");
    });

    document.querySelectorAll("#standard-calc table tr td button:not(.calc-op-button-dark)").forEach(elemnt => {
        elemnt.classList.toggle("calc-num-light");
    });

    ["menu-light-mode-background", "menu-light-mode-border-color"].map(style => document.getElementsByClassName("menu-box")[0].classList.toggle(style));
    document.querySelector(".menu-box").querySelectorAll("*").forEach(elemnt => {
        ['menu-light-mode-textcolor', 'menu-light-mode-border-color'].map(style => elemnt.classList.toggle(style));
    });
    ["menu-light-mode-background", "menu-light-mode-border-color", "menu-light-mode-textcolor"].map(style => document.querySelector(".calc-box .header").classList.toggle(style));
    document.getElementById("toggle-menu").classList.toggle("menu-light-mode-textcolor");
}

document.getElementById("toggle-menu").addEventListener("click", function() {
    if(flagMenu){
        document.getElementsByClassName("menu-box")[0].style.display = "block";
        document.getElementsByClassName("calc-box")[0].style.filter = "blur(2rem)";
        flagMenu = !flagMenu;
    } else {
        document.getElementsByClassName("menu-box")[0].style.display = "none";
        document.getElementsByClassName("calc-box")[0].style.filter = "blur(0rem)";
        flagMenu = !flagMenu;
    }
});

document.getElementsByClassName("calc-box")[0].addEventListener("click", function() {
    document.getElementsByClassName("menu-box")[0].style.display = "none";
    document.getElementsByClassName("calc-box")[0].style.filter = "blur(0rem)";
    flagMenu = true;
});