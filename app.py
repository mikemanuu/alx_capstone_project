from flask import Flask, request, render_template, send_from_directory
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from decouple import Config, Csv

config = Config('.env')
#config.read('.env')

app = Flask(__name__, static_folder='static')

@app.route('/', methods=['GET'])
def index():
    return send_from_directory('static', 'index.html')

# Load email credentials from environment variables
email_username = config('EMAIL_USERNAME', default='username')
email_password = config('EMAIL_PASSWORD', default='password')
recipient_email = config('RECIPIENT_EMAIL', default='recipient')

@app.route('/send_email', methods=['POST'])
def send_email():
    if request.method == 'POST':
        try:
            name = request.form['name']
            email = request.form['email']
            subject = request.form['subject']
            message = request.form['message']

            sender_email = email_username
            sender_password = email_password
            recipient = recipient_email

            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = recipient
            msg['Subject'] = 'New Contact Form Submission'

            body = f"From: {email}\nSubject: {subject}\nName: {name}\nMessage:\n{message}"

            msg.attach(MIMEText(body, 'plain'))

            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(sender_email, sender_password, )
            server.sendmail(send_email, recipient, msg.as_string())
            server.quit()

            return 'Email sent successfully'

        except Exception as e:
            return f'An error occured: {str(e)}'
    else:
        return 'Method not allowed'

if __name__ == '__main__':
    app.run(debug=True)
