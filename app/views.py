from app import app

@app.route('/')
@app.route('/home/')
def index():
    return "Homepage"

@app.route('/about/')
def interests():
    return "Interests"

@app.route('/resume/')
def resume():
    return "Resume"
