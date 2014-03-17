from flask import Flask, request, session, g, redirect, url_for, \
    abort, render_template, flash

import flask.ext.restless
from flask.helpers import send_file

from palisade.db.schema import IPT_Rule
from palisade.db.conn import Session

app = Flask(__name__)
app.config['SECRET_KEY'] = 'jopa'

db = Session()
manager = flask.ext.restless.APIManager(app, db)
manager.create_api(IPT_Rule, methods=['GET', 'POST', 'DELETE'])
@app.route('/', methods=['GET', 'POST', 'DELETE'])
def index():
    return send_file('templates/index.html')
if __name__ == "__main__":
	app.run('0.0.0.0', debug=True)
