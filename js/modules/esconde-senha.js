export function toggleSenha(inputId, toggleId) {
    const senhaInput = document.getElementById(inputId);
    const toggleButton = document.getElementById(toggleId);

    toggleButton.addEventListener('click', function() {
        if (senhaInput.type === 'password') {
            senhaInput.type = 'text';
            toggleButton.textContent = 'Esconder';
        } else {
            senhaInput.type = 'password';
            toggleButton.textContent = 'Mostrar';
        }
    });
}
