from flask import Flask, request,jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import json
import os
from dotenv import load_dotenv

 
dotenv_path = os.path.join(os.path.dirname(__file__), 'config.env')
load_dotenv(dotenv_path)

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend
app.config['FLASK_KEY'] = os.environ.get('FLASK_KEY')
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASS')
mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Option 1: print to console
    print(f"Message from {name} ({email}): {message}")

    # Option 2: save to file (uncomment if you prefer saving)
    # with open('messages.json', 'a') as f:
    #     json.dump(data, f)
    #     f.write('\\n')
    msg = Message(
        subject=f"Portfolio Contact: {name}",
        sender=app.config['MAIL_USERNAME'],
        recipients=[app.config['MAIL_USERNAME']],
        body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    )

    mail.send(msg)
    return jsonify({"status": "success", "message": "Message received!"}), 200

@app.route('/')
def home():
    return "Flask backend is running."

if __name__ == '__main__':
    app.run(debug=True)
