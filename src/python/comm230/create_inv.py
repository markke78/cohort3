import re
from read_xls import read_data
from openpyxl import load_workbook, Workbook

wb = load_workbook(filename="sampledata.xlsx")
wb_obj = read_data(wb)


def get_product_name(prod_id):
    for item in wb_obj["product"]:
        if item["prod_id"] == prod_id:
            get_poroduct = f"{item['prod_name']}\t\t{item['prod_price']}"
            return get_poroduct


def get_customer_name(custid):
    for item in wb_obj["customer"]:
        if item["customer_id"] == custid:
            customer_infor = f"Customer Name: {item['first_name']} {item['last_name']}"
            return customer_infor


def my_invoice(e):
    id_input = ""
    cust_id = 0
    custName = ""
    ifor = ""
    amount = 0
    purchase_info = []
    invoiceInfo = ""
    if e == None:
        id_input = input("please enter an invoice #: ")
    else:
        id_input = e
    valid = False
    for check_id in wb_obj["invoice"]:
        if check_id["invoice_id"] == int(id_input):
            valid = True
    if valid == False:
        return "The # was not found."
    else:
        for iid in wb_obj["invoice"]:
            if iid["invoice_id"] == int(id_input):
                cust_id = iid["customer_id"]
                custName = get_customer_name(cust_id)
                infor = f"Invoice No. {iid['invoice_id']}. Invoice Date: {iid['invoice_date']}\n{custName}\n"
                str1 = "Sales_Amt:".ljust(22, " ")
                str2 = "GST:".ljust(23, " ")
                str3 = "Total Sales:".ljust(22, " ")
                amount = f"{str1} {format(iid['sales_amount'],'.2f')}\n{str2} {format(iid['GST(5%)'],'.2f')}\n{str3} {float(format(iid['total_amount'],'.2f'))}\n"
        for item in wb_obj["invoice_detail"]:
            if item["invoice_id"] == int(id_input):
                purchase_info.append(item)
        for prod_item in purchase_info:
            invoiceInfo += f"{get_product_name(prod_item['prod_id']).rjust(25,' ')}\t\t{str(prod_item['quantity']).rjust(2,' ')}\n"
        title = f"PRODUCT NAME:\t\tUNIT PRICE:\t\tQTY:"
        f = open("/code/cohort3/src/python/comm230/invoice.txt", "w")
        f.write(f"{infor}\n{title}\n{invoiceInfo}\n{amount}")
        return "Invoice generated"

