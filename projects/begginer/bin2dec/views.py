from bin2dec import app
from flask import render_template

@app.route('/')
def home():
    return render_template('bin2dec.html')