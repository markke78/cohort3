from flask import Flask
from flask_restful import Api
from flask_jwt import JWT

from flask_cors import CORS

from security import authenticate, identity
from user import UserRegister, UserList
from item import Item, ItemList


app = Flask(__name__)
app.secret_key = "jose"
api = Api(app)
CORS(app, supports_credentials=True)

jwt = JWT(app, authenticate, identity)  # /auth

api.add_resource(Item, "/item/<string:name>", "/item")
api.add_resource(ItemList, "/items")
api.add_resource(UserRegister, "/register")
api.add_resource(UserList, "/users")

if __name__ == "__main__":
    app.run(port=5000, debug=True)
