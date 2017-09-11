#!flask/bin/python
from app import app
#prod
app.run(host='0.0.0.0', port=8080, debug=False)
#dev
#app.run(host='127.0.0.1', port=1337, debug=True)
