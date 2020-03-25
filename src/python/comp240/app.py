from flask import Flask, jsonify, request, render_template
from read_xls import read_data
from openpyxl import load_workbook, Workbook

app = Flask(__name__)

wb = load_workbook(filename="sampledata1.xlsx")
wb_obj = read_data(wb)
# {"wb_obj":
# {"customer":[{"address":"123 Riverbend SE","customer_id":2,"email":"rachel@telus.ca","first_name":"Rachel","last_name":"Smith","phone":"403-324-3455"}],
# "invoice":[{"GST(5%)":124.9985,"customer_id":1,"invoice_date":"12-01-2019","invoice_id":1,"sales_amount":2499.97,"total_amount":2624.9685}],
# "product":[{"prod_id":1,"prod_name":"Dishwasher","prod_price":599.99}]}}

# @app.route('/')
# def home():
#     return render_template('index.html')


# POST mothods
@app.route("/", methods=["POST"])
def creat_wb_obj_item():
    request_data = request.get_json()
    for item in request_data:
        wb_obj[item] = request_data[item]
    return jsonify(wb_obj)


@app.route("/customer", methods=["POST"])
def create_customer():
    request_data = request.get_json()
    new_customer = {
        "customer_id": request_data["customer_id"],
        "address": request_data["address"],
        "email": request_data["email"],
        "first_name": request_data["first_name"],
        "last_name": request_data["last_name"],
        "phone": request_data["phone"],
    }
    wb_obj["customer"].append(new_customer)
    return jsonify(new_customer)


@app.route("/customer/<int:id>", methods=["POST"])
def create_item_on_customer(id):
    request_data = request.get_json()
    for customer in wb_obj["customer"]:
        if customer["customer_id"] == id:
            for item in request_data:
                customer[item] = request_data[item]
            return jsonify(customer)
    return jsonify({"message": "customer not found"})


# GET methods
@app.route("/")
def get_stores():
    return jsonify(wb_obj)


@app.route("/customer")
def get_customer():
    return jsonify({"customer": wb_obj["customer"]})


@app.route("/customer/<string:address>")  #'http://127.0.0.1:5000/store/some_name'
def get_customer_address(address):
    for indx in wb_obj["customer"]:
        if indx["address"] == address:
            return jsonify(indx)
    return jsonify({"message": "customer not found"})


# #GET/store/<string:name>/item
# @app.route('/store/<string:name>/item')
# def get_item_in_store(name):
#     for store in stores:
#         if store['name'] == name:
#             return jsonify({'items':store['items']})
#     return jsonify({'message':'store not found'})

app.run(port=5000, debug=True)
