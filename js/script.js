var staticMenu = document.querySelector("#menu-static");
var fixedMenu = document.querySelector("#menu-fixed");
var upperLimit = staticMenu.offsetTop;

// DEIXANDO O MENU FIXO
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

// ANIMAÇÃO DO SCROLL

ScrollReveal().reveal(".contact", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal("#carouselExampleControls", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal(".presentation-principal", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal("#about-company", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal("#address", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal(".Budget-texts", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal(".budgets-img-btns", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal("#carouselExampleControls2", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal(".services-conteudo", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal("#delivery", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal(".budget2-texto", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal(".btns", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal(".budget2-form-img", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal(".footer-fundo", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal("#footer-box", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
ScrollReveal().reveal(".privacy-policy-text-container", {
    duration: 1500,
    distance: "50px",
    delay: 200,
    mobile: false,
});
