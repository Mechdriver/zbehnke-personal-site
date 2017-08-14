from flask import render_template, request
from app import app
import json
import requests

@app.route('/')
@app.route('/home/')
def index():
    return render_template('home.html')

@app.route('/submit/', methods=['POST'])
def handle_email():
    payload_dict = json.loads(request.form['json'])

    name = payload_dict['name']
    email = payload_dict['email']
    message = payload_dict['message']

    if (not name or not is_name_vaild(name)):
        return json.dumps({'error':'Name is not valid'}), 418, {'ContentType':'application/json'}

    if (not email or not is_email_valid):
        return json.dumps({'error':'Email is not valid'}), 418, {'ContentType':'application/json'}

    if (not message):
        return json.dumps({'error':'Please enter a message'}), 418, {'ContentType':'application/json'}

    send_email(name, email, message)

    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}

def is_name_vaild(name):
    return True

def is_email_valid(email):
    return True

def send_email(name, email, message):
    pass
