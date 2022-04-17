const buttonMenu = () => {
    let button = document.querySelector(".Header__buttonmenu"),
        menu = document.querySelector(".Nav");

    button.addEventListener("click", () => {
        menu.classList.toggle("active");
        document.body.classList.toggle("menuActive");
    })
}

export default buttonMenu;