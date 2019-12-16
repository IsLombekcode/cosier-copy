document.addEventListener("DOMContentLoaded", () => {
    const panel = document.querySelector(".panel__box");
    const line = document.querySelector("div .navigation__button-inner");
    const close = document.querySelector("div .panel__button-text");
    line.addEventListener("click", () => { open() });
    close.addEventListener("click", () => { closed() });
    const open = () => {
        panel.style.transform = "translateX(0px)";
        panel.style.color = ("white");
    }
    const closed = () => {
        panel.style.transform = "translateX(320px)";
    }
})