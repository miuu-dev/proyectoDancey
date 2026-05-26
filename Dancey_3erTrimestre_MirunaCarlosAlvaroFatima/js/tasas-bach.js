document.addEventListener('DOMContentLoaded', () => {
    // creamos una constante seleccionando la clase .contacto-form form
    const formulario = document.querySelector('.contacto-formulario form');

    // revisamos que el formulario exista
    if (formulario) {
        // se queda escuchando el formulario hasta que el usuario le de a "enviar solicitud"
        formulario.addEventListener('submit', function(e) {
            // evitamos que la página se recargue sola 
            e.preventDefault();

            // creamos una constante donde capturará 4 datos del formulario: nombre, email, especialidad y mensaje
            const datos = {
                nombre: formulario.querySelector('input[name="nombre"]').value,
                email: formulario.querySelector('input[type="email"]').value,
                especialidad: formulario.querySelector('input[name="especialidad"]').value,
                mensaje: formulario.querySelector('textarea').value
            };

            // comprobamos que los datos de ciertos campos estén bien, en caso de que no, se le aparecerá una alerta
            if (datos.nombre === "" || datos.email === "") {
                alert("Por favor, rellena los campos obligatorios (Nombre y Email).");
                return;
            }

            // simulamos el envío de datos al servidor
            console.log("Enviando solicitud de Bachillerato para:", datos.nombre);
            
            // localiza el botón dentro del formulario para poder modificarle las propiedades y el texto
            const boton = formulario.querySelector('button');

            // guardamos el texto que tenía el botón por si necesitamos restaurarlo después
            const textoOriginal = boton.textContent;
            
            boton.disabled = true;
            boton.textContent = "Enviando...";
            boton.style.opacity = "0.7";

            // simulamos un retraso de 1.5 segundos para dar la sensación de que se está procesando la solicitud
            setTimeout(() => {
                // 5. Respuesta visual de éxito
                // borramos todo el contenido para poder sustituirlo por un mensaje de éxito personalizado
                formulario.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <h3 style="color: var(--color-contraste-1);">¡Solicitud Recibida!</h3>
                        <p>Gracias por tu interés en nuestro programa de Artes, ${datos.nombre}.</p>
                        <p>Hemos enviado el dossier informativo a <strong>${datos.email}</strong>.</p>
                        <button onclick="location.reload()" class="boton-primario" style="margin-top: 20px; width: auto;">Volver</button>
                    </div>
                `;
            }, 1500);
        });
    }
});