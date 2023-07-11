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

// Função para criar um cookie
function setCookies() {
    let date = new Date();
    let year = date.getFullYear() + 1;
    date.setFullYear(year);
    let expires = date.toUTCString();

    console.log(expires);

    // Cria o cookie
    document.cookie = `DivCookieshidden=true; expires=${expires}; path=/`;

    checkCookieVisibility();
}

// Função para verificar se o cookie expirou e ajustar a visibilidade da div
function checkCookieVisibility() {
    const containerCookies = document.querySelector(".cookies");
    const cookie = document.cookie;
    const hiddenCookie = cookie.includes("DivCookieshidden=true");

    if (hiddenCookie) {
        // O cookie ainda não expirou, a div permanece escondida
        containerCookies.classList.add("hide");
    } else {
        // O cookie expirou ou não existe, a div fica visível
        containerCookies.classList.remove("hide");
    }
}

// Chame a função quando a página for carregada
checkCookieVisibility();

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
ScrollReveal().reveal(".cookies", {
    duration: 1000,
    delay: 200,
    mobile: false,
});
