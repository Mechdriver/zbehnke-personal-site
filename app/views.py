from flask import render_template
from app import app

@app.route('/')
@app.route('/home/')
def index():
    return render_template('home.html')

@app.route('/about/')
def interests():
    return "Interests"

@app.route('/resume/')
def resume():
    return "Resume"
