# Base initialization file for flask
# Application

from flask import Flask
from flask_cors import CORS

# Create an Instance of Flask
app = Flask(__name__)

cors = CORS(app)

app.config.from_object('config')

# app.config['CORS_HEADERS'] = 'Content-Type'

from app import views
# from app import test_basic
