// código creado por álvaro díaz
// Caracteres que faltan para llegar al límite en el textarea de contacto
const ConTextarea = document.getElementById('textarea');
const caracteresRest = document.getElementById('CActuales');
const botonLimpiar = document.getElementsByClassName('btn-clean')[0];
const textaCaractLim = 2000;


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

// se llama cuando se resetea la página y mira los caracteres del textarea y la visibilidad del menú
function onReset() {
    visibilityCheck()
    caracteresRest.innerHTML = (textaCaractLim - ConTextarea.value.length) + " / " + textaCaractLim + " caracteres.";
}