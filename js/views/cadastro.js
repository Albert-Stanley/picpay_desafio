import { enviarDados } from "../modules/enviar-dados.js";
import ehUmCpf from "../modules/valida-cpf.js";

// Verificando CPF
const camposDoFormulario = document.querySelectorAll("[required]");
camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {
    if (campo.name === "cpfFisica" && campo.value.length >= 11) {
        ehUmCpf(campo);
    }
}

// Enviando dados do formulário Pessoa Física
document.getElementById('formPessoaFisica').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
        nome: document.getElementById('nomeFisica').value,
        email: document.getElementById('emailFisica').value,
        cpf: document.getElementById('cpfFisica').value,
        senha: document.getElementById('senhaFisica').value
    };
    enviarDados('/cadastrar/pessoa-fisica', data);
});

// Enviando dados do formulário Pessoa Lojista
document.getElementById('formPessoaLojista').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = {
        nome: document.getElementById('nomeLojista').value,
        email: document.getElementById('emailLojista').value,
        cnpj: document.getElementById('cnpjLojista').value,
        senha: document.getElementById('senhaLojista').value
    };
    enviarDados('/cadastrar/pessoa-lojista', data);
});
