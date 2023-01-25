from flask import Flask, make_response, jsonify
from data import Users

app = Flask(__name__)


@app.route('/')
def get_main():
    return


@app.route('/users', methods=['GET'])
def get_users():
    return make_response(jsonify(Users))


app.run()
