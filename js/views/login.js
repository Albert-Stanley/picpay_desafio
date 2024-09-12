import { enviarDados } from "../modules/enviar-dados.js";
import { toggleSenha } from "../modules/esconde-senha.js";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
        email: document.getElementById('email_login').value,
        senha: document.getElementById('senha').value
    };
    enviarDados('/login', data);
});

// Ativando o toggle de mostrar/esconder senha
toggleSenha('senha', 'toggleSenha');
