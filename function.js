document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const messageDiv = document.getElementById('message');

    if (campoB > campoA) {
        messageDiv.textContent = 'Formulário válido! Campo B é maior que Campo A.';
        messageDiv.className = 'message positive';
    } else {
        messageDiv.textContent = 'Formulário inválido! Campo B deve ser maior que Campo A.';
        messageDiv.className = 'message negative';
    }
});