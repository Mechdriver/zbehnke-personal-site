from flask import render_template, request
from app import app
import json

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
    error_dict = {}

    if (not name or not is_name_vaild(name)):
        error_dict['name'] = 'Please enter a valid name'

    if (not email or not is_email_valid):
        error_dict['email'] = 'Please enter a valid email address'

    if (not message):
        error_dict['message'] = 'Please enter a message'

    if (error_dict):
        return json.dumps(error_dict), 418, {'ContentType':'application/json'}

    send_email(name, email, message)

    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}

def is_name_vaild(name):
    return True

def is_email_valid(email):
    return True

def send_email(name, email, message):
    pass
