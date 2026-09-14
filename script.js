const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("open");

        }

    });

});
