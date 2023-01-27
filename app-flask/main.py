from flask import Flask, make_response, jsonify, request
from data import Users

app = Flask(__name__)
app.config['JSON_SORT_KEY'] = False


@app.route('/')
def get_main():
    return


@app.route('/users', methods=['GET'])
def get_users():
    return make_response(
        jsonify(
            message='User List.',
            data=Users
        )
    )


@app.route('/users', methods=['POST'])
def create_user():
    user = request.json
    Users.append(user)
    return make_response(
        jsonify(
            message='Users successfully added.',
            data=user
        )
    )


app.run()
