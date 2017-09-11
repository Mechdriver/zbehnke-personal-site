from app import app
from flask import render_template, request
from email.mime.text import MIMEText
import base64
import json
import re
import smtplib
import os

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

    if (not email or not is_email_valid(email)):
        error_dict['email'] = 'Please enter a valid email address'

    if (not message):
        error_dict['message'] = 'Please enter a message'

    if (error_dict):
        return json.dumps(error_dict), 400, {'ContentType':'application/json'}

    send_email(name, email, message)

    return json.dumps({'success':True}), 200, {'ContentType':'application/json'}

def is_name_vaild(name):
    if (not name):
        return False

    #Names typicall don't have numbers in them
    if (re.search(r"[0-9]", name)):
        return False

    return True

def is_email_valid(email):
    #Source: http://emailregex.com/
    if (re.search(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", email)):
        return True

    return False

#Using SMTP for now
def send_email(name, email, message):
    my_email = os.environ.get('GMAIL_ADDRESS')
    my_password = os.environ.get('GMAIL_PASS')
    email = email.strip()

    email_message = MIMEText(message + "\nFrom Email: " + email)

    email_message['Subject'] = 'Message from ' + name.strip() + ' via the zbehnke website.'
    email_message['From'] = email
    email_message['To'] = my_email
    sender = smtplib.SMTP('smtp.gmail.com', 587)
    sender.ehlo()
    sender.starttls()
    sender.login(my_email, my_password)
    sender.sendmail(email, [my_email], email_message.as_string())
    sender.quit()
