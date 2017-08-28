FROM node:boron

# Copy app directory
COPY . /

#Update before getting
RUN apt-get update

#Get pip for Flask
RUN apt-get -y install python-pip
RUN pip install --upgrade pip

#Install the python server library
RUN pip install Flask
RUN pip install Flask-WTF

RUN pip freeze > requirements.txt

#Install and bundle the frontend
RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["python", "run.py" ]
