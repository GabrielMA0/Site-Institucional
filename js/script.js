var staticMenu = document.querySelector("#menu-static");
var fixedMenu = document.querySelector("#menu-fixed");
var upperLimit = staticMenu.offsetTop;

// Animação de rolagem do scroll
window.addEventListener("scroll", function () {
    // Obtém a posição superior do elemento
    var scrollTop = window.scrollY || document.documentElement.scrollTop; // Obtém o valor do scroll vertical

    if (scrollTop >= upperLimit) {
        fixedMenu.classList.remove("hide");
        staticMenu.style.opacity = "0";
    } else if (scrollTop < upperLimit) {
        fixedMenu.classList.add("hide");
        staticMenu.classList.remove("hide");
        staticMenu.style.opacity = "1";
    }
});
