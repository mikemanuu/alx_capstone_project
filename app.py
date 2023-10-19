from flask import Flask, request, render_template, send_from_directory
import smtplib
from decouple import Config, Csv

config = Config('.env')


app = Flask(__name__)

# Load email credentials from environment variables
email_username = config('EMAIL_USERNAME', default='username')
email_password = config('EMAIL_PASSWORD', default='password')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/contact-form', methods=['POST'])
def send_email():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        message = request.form['message']

        smtp_server = 'smtp.gmail.com'
        smtp_port = 587

        msg = f"From: {email}\nSubject: {subject}\nName: {name}\nMessage:\n{message}"

        try:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
            server.login(email_username, email_password)
            server.sendmail(email_username, 'mikemanuu273@gmail.com', msg)
            server.quit()
            return 'Email sent successfully!'
        except Exception as e:
            return 'Email could not be sent. Please try again later.'


if __name__ == '__main__':
    app.run(debug=True)
