from flask import Flask, request, session, g, redirect, url_for, \
    abort, render_template, flash

from palisade.db.schema import IPT_Rule
from palisade.db.conn import Session

app = Flask(__name__)
app.config['SECRET_KEY'] = 'jopa'

if __name__ == "__main__":
	app.run('0.0.0.0')
