const btnFisica = document.querySelector(".btn_fisica");
const btnLojista = document.querySelector(".btn_lojista");
const formFisica = document.querySelector(".form_fisica");
const formLojista = document.querySelector(".form_lojista");

document.addEventListener('DOMContentLoaded', function() {
    const lastForm = localStorage.getItem('lastForm');
    if (lastForm === 'fisica') {
        formFisica.classList.add('active');
    } else {
        formLojista.classList.add('active');
    }

    btnFisica.addEventListener('click', function() {
        formFisica.classList.add('active');
        formLojista.classList.remove('active');
        localStorage.setItem('lastForm', 'fisica');
    });

    btnLojista.addEventListener('click', function() {
        formLojista.classList.add('active');
        formFisica.classList.remove('active');
        localStorage.setItem('lastForm', 'lojista');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const lastForm = localStorage.getItem('lastForm');
    if (lastForm === 'fisica') {
        formFisica.classList.add('active');
    } else {
        formLojista.classList.add('active');
    }

    btnFisica.addEventListener('click', function() {
        formFisica.classList.add('active');
        formLojista.classList.remove('active');
        localStorage.setItem('lastForm', 'fisica');
    });

    btnLojista.addEventListener('click', function() {
        formLojista.classList.add('active');
        formFisica.classList.remove('active');
        localStorage.setItem('lastForm', 'lojista');
    });
});


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

function enviarDados(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert('Cadastro realizado com sucesso!');
        console.log(result);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

//teste