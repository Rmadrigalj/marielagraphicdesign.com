from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

# Configuración de Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.tudominio.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'tu_correo@tudominio.com'
app.config['MAIL_PASSWORD'] = 'tu_contraseña'

mail = Mail(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        nombre = request.form['nombre']
        email = request.form['email']
        mensaje = request.form['mensaje']
        
        # Crear el mensaje de correo
        msg = Message('Nuevo mensaje de contacto', sender='tu_correo@tudominio.com', recipients=['destinatario@ejemplo.com'])
        msg.body = f'Nombre: {nombre}\nCorreo Electrónico: {email}\nMensaje: {mensaje}'
        
        # Enviar el correo electrónico
        mail.send(msg)
        
        return "Mensaje enviado correctamente. ¡Gracias por ponerte en contacto!"
    return render_template('index.html')

# Definir la ruta para la página de proyectos
@app.route('/proyectos')
def proyectos():
    return render_template('proyectos.html')

@app.route('/papeleria')
def papeleria():
    return render_template('papeleria.html')

@app.route('/identidad')
def identidad():
    return render_template('identidad.html')

@app.route('/fotografia')
def fotografia():
    return render_template('fotografia.html')

@app.route('/redes')
def redes_sociales():
    return render_template('redes.html')

@app.route('/ilustracion')
def ilustracion():
    return render_template('ilustracion.html')

@app.route('/packaging')
def packaging():
    return render_template('packaging.html')

@app.route('/sobremi')
def sobremi():
    return render_template('sobremi.html')

if __name__ == '__main__':
    app.run(debug=True)
