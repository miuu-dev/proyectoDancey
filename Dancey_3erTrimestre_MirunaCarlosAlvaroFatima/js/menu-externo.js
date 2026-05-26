// código creado por álvaro díaz
const menu = document.getElementsByClassName('menu')[0];
const botonCompactar = document.getElementById('compact');

// Esto compata el menu cuando clicas su menú
botonCompactar.onclick = function () {
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        botonCompactar.textContent = ("↑");
    } else {
        menu.style.display = "none";
        botonCompactar.textContent = ("↓");
    }
};

// mira el tamaño de la ventana y cambia la visibilidad del botón y el menú si es necesario 
function visibilityCheck() {
    if (screen.availWidth >= 710) {
        if (menu.style.display === "none") {
            menu.style.display = "flex";
        }
        if (menu.style.display != "none") {
            botonCompactar.textContent = ("↑");
            botonCompactar.style.display = "none";
        }
    } else {
        botonCompactar.style.display = "block";
    }
}