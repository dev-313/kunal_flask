# Create all the views for website

from app import app
from flask_cors import cross_origin
from flask import render_template, request, flash, redirect, url_for

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
@cross_origin()
def contact():
    return render_template("contact_us.html")
