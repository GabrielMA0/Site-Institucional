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

window.sr = ScrollReveal({ reset: true });

sr.reveal(".contact", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal("#carouselExampleControls", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal(".presentation-principal", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal("#about-company", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal("#address", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal(".Budget-texts", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal(".budgets-img-btns", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal("#carouselExampleControls2", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal(".services-conteudo", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal("#delivery", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal(".budget2-texto", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal(".btns", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal(".budget2-form-img", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
sr.reveal(".footer-fundo", {
    duration: 1000,
    distance: "50px",
    delay: 100,
    mobile: false,
});
