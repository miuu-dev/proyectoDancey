// Caracteres que faltan para llegar al límite en el textarea de contacto
const ConTextarea = document.getElementById('textarea');
const caracteresRest = document.getElementById('CActuales');
const botonLimpiar = document.getElementsByClassName('btn-clean')[0];
const textaCaractLim = 2000;

const menu = document.getElementsByClassName('menu')[0];
const botonCompactar = document.getElementById('compact');


// Source - https://stackoverflow.com/a/14086435
// Posted by Andrew Hubbs, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-24, License - CC BY-SA 3.0
// Código robado de un foro, resta el valor de los cacarteres del textarea con el valor máximo del textarea
ConTextarea.oninput = function () {
    caracteresRest.innerHTML = (textaCaractLim - this.value.length) + " / " + textaCaractLim + " caracteres.";
};

// Esto resetea lo de los caracteres si clicas el botón
botonLimpiar.onclick = function () {
    caracteresRest.innerHTML = textaCaractLim + " / " + textaCaractLim + " caracteres.";
};

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

// se llama cuando se resetea la página y mira los caracteres del textarea y la visibilidad del menú
function onReset() {
    visibilityCheck()
    caracteresRest.innerHTML = (textaCaractLim - ConTextarea.value.length) + " / " + textaCaractLim + " caracteres.";
}