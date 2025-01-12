document.getElementById('responseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    const response = document.getElementById('response').value;

    fetch('/send_email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ response: response })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.getElementById('feedback').innerHTML = 'Tu respuesta ha sido enviada. Redirigiendo...';
            setTimeout(() => {
                window.location.href = 'https://www.google.com';
            }, 3000); // 3 segundos
        } else {
            document.getElementById('feedback').innerHTML = 'Hubo un error al enviar la respuesta.';
        }
    })
    .catch(error => {
        document.getElementById('feedback').innerHTML = 'Hubo un error inesperado.';
        console.error('Error:', error);
    });
});
