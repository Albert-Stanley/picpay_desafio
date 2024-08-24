const radios = document.querySelectorAll('input[name="tipoPessoa"]');
        
radios.forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('formPessoaFisica').style.display = 'none';
        document.getElementById('formPessoaLojista').style.display = 'none';
        
        const selectedForm = document.getElementById(`formPessoa${this.value.charAt(0).toUpperCase() + this.value.slice(1)}`);
        selectedForm.style.display = 'block';
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
