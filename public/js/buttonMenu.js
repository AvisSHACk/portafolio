const buttonMenu = () => {
    let button = document.querySelector(".Header__buttonmenu"),
        menu = document.querySelector(".Nav");

    button.addEventListener("click", () => {
        menu.classList.toggle("active");
        document.body.classList.toggle("menuActive");
    })

    window.addEventListener("click", (e) => {
        if(menu.classList.contains('active') && e.target !== menu && e.target !== button) {
            menu.classList.toggle("active");
            document.body.classList.toggle("menuActive");
        }
    })
}

export default buttonMenu;