document.addEventListener("DOMContentLoaded", function() {
    const btnEnviar = document.getElementById("btnEnviarCita");
    const alerta = document.getElementById("alertaExito");
    const form = document.getElementById("formCitaModal");

    if (btnEnviar) {
        btnEnviar.addEventListener("click", function() {
            // Validar que el form sea válido (HTML5)
            if (form.checkValidity()) {
                // 1. Mostrar alerta
                alerta.classList.remove("d-none");

                // 2. Evitar doble envío
                btnEnviar.disabled = true;
                btnEnviar.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Enviando...';

                // 3. Simulación de envío
                setTimeout(function() {
                    btnEnviar.innerHTML = 'Enviado <i class="fa-solid fa-check ms-2"></i>';

                    // 4. Cerrar el modal automáticamente
                    const modalElement = document.getElementById('modalCita');
                    const modalInstance = bootstrap.Modal.getInstance(modalElement);
                    if (modalInstance) {
                        modalInstance.hide();
                    }

                    // 5. Resetear formulario y estado
                    form.reset();
                    alerta.classList.add("d-none");
                    btnEnviar.disabled = false;
                    btnEnviar.innerHTML = 'Confirmar Solicitud <i class="fa-solid fa-paper-plane ms-2"></i>';
                }, 5000);
            } else {
                // Mostrar errores nativos si el form no es válido
                form.reportValidity();
            }
        });
    }
});
