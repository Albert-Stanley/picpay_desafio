import ehUmCpf from "./modules/valida-cpf.js"
//validando o Cpf
const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo) )
})

function verificaCampo(campo) {
    if (campo.name == "cpfFisica" && campo.value.length >= 11) {
      ehUmCpf(campo)
   } 
}

//alterando os formularios na pagina de casdastro
document.addEventListener("DOMContentLoaded", function () {
    const btnFisica = document.querySelector('.btn_fisica');
    const btnLojista = document.querySelector('.btn_lojista');
    const formFisica = document.getElementById('formPessoaFisica');
    const formLojista = document.getElementById('formPessoaLojista');

    function toggleForm(formToShow, formToHide, activeButton, inactiveButton) {
        formToShow.style.display = 'block';
        formToHide.style.display = 'none';
        activeButton.classList.add('active');
        inactiveButton.classList.remove('active');
    }

    // Inicialmente, mostra o formulário Pessoa Física e oculta o de Lojista
    toggleForm(formFisica, formLojista, btnFisica, btnLojista);

    // Eventos de clique nos botões
    btnFisica.addEventListener('click', function () {
        toggleForm(formFisica, formLojista, btnFisica, btnLojista);
    });

    btnLojista.addEventListener('click', function () {
        toggleForm(formLojista, formFisica, btnLojista, btnFisica);
    });
});

// //enviando os dados para o backend
// document.getElementById('formPessoaFisica').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const data = {
//         nome: document.getElementById('nomeFisica').value,
//         email: document.getElementById('emailFisica').value,
//         cpf: document.getElementById('cpfFisica').value,
//         senha: document.getElementById('senhaFisica').value
//     };
//     enviarDados('/cadastrar/pessoa-fisica', data);
// });

// document.getElementById('formPessoaLojista').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const data = {
//         nome: document.getElementById('nomeLojista').value,
//         email: document.getElementById('emailLojista').value,
//         cnpj: document.getElementById('cnpjLojista').value,
//         senha: document.getElementById('senhaLojista').value
//     };
//     enviarDados('/cadastrar/pessoa-lojista', data);
// });

// function enviarDados(url, data) {
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(result => {
//         alert('Cadastro realizado com sucesso!');
//         console.log(result);
//     })
//     .catch(error => {
//         console.error('Erro:', error);
//     });
// }

