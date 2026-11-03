
const btnMore = document.getElementById("btnMore");
const dropdownMenu = document.getElementById("dropdownMenu");

btnMore.addEventListener("click", () => {

    const isOpen = btnMore.getAttribute("aria-expanded") === "true";

    btnMore.setAttribute("aria-expanded", !isOpen);

    dropdownMenu.classList.toggle("active");

});

    