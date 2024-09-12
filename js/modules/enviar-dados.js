export function enviarDados(url, data) {
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
