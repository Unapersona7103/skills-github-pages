from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route('/send_email', methods=['POST'])
def send_email():
    data = request.json
    response = data.get('response')

    sender_email = "pruebas7103@hotmail.com"
    receiver_email = "unapersona7103@gmail.com"
    subject = "Nueva respuesta"
    body = f"Respuesta recibida: {response}"

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender_email
    msg['To'] = receiver_email

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, 'alemania5447103')  # Usa la contraseña o clave de aplicación correcta
            server.send_message(msg)
        return jsonify({'status': 'success'})
    except Exception as e:
        return jsonify({'status': 'error', 'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000)
