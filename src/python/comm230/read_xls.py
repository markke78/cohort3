from openpyxl import load_workbook, Workbook

# # read excel sheet into memory
wb = load_workbook(filename="sampledata.xlsx")
new_obj = {}
for index, sheets in enumerate(wb):
    new_list = []
    new_obj[sheets.title] = new_list
    headers = {}
    for rowidx, row in enumerate(sheets):
        item = {}
        for cellidx, cell in enumerate(row):
            if rowidx == 0:
                headers[cellidx] = cell.value
            else:
                item[headers[cellidx]] = cell.value
        if rowidx > 0:
            new_list.append(item)

print(new_obj)


{
    "customer": [
        {
            "customer_id": 1,
            "first_name": "Rachel",
            "last_name": "Smith",
            "address": "123 Riverbend SE",
            "phone": "403-324-3455",
            "email": "rachel@telus.ca",
        },
        {
            "customer_id": 2,
            "first_name": "Bobby",
            "last_name": "Smith",
            "address": "435 Crest Place NE",
            "phone": "587-321-4564",
            "email": "bobby@gmail.com",
        },
        {
            "customer_id": 3,
            "first_name": "Rebecca",
            "last_name": "Wang",
            "address": "231 Crest Place NE",
            "phone": "403-132-5798",
            "email": "rebecca@hotmail.com",
        },
        {
            "customer_id": 4,
            "first_name": "Tim",
            "last_name": "Cormier",
            "address": "435 Redstone NE",
            "phone": "403-432-4532",
            "email": "tim@gmail.com",
        },
        {
            "customer_id": 5,
            "first_name": "Phil",
            "last_name": "Murray",
            "address": "568 NoseHill",
            "phone": "587-091-0934",
            "email": "phil@shaw.ca",
        },
        {
            "customer_id": 6,
            "first_name": "Shane",
            "last_name": "James",
            "address": "987 Brightton SE",
            "phone": "587-765-7898",
            "email": "shane@gmail.com",
        },
        {
            "customer_id": 7,
            "first_name": "John",
            "last_name": "Sandhu",
            "address": "356 Willow Park",
            "phone": "587-321-2343",
            "email": "john@telus.ca",
        },
        {
            "customer_id": 8,
            "first_name": "Dave",
            "last_name": "Hynes",
            "address": "1213 Brightton SE",
            "phone": "403-554-2321",
            "email": "dave@hotmai.com",
        },
        {
            "customer_id": 9,
            "first_name": "Cristina",
            "last_name": "Davey",
            "address": "451 Kensington",
            "phone": "587-090-2931",
            "email": "cristina@gmail.com",
        },
        {
            "customer_id": 10,
            "first_name": "Dave",
            "last_name": "James",
            "address": "189 SunnySide",
            "phone": "403-432-7094",
            "email": "dave@shaw.ca",
        },
    ],
    "product": [
        {"prod_id": 1, "prod_name": "Dishwasher", "prod_price": 599.99},
        {"prod_id": 2, "prod_name": "Wine Cooler", "prod_price": 199.99},
        {"prod_id": 3, "prod_name": "Microwave", "prod_price": 159.99},
        {"prod_id": 4, "prod_name": "Mini Oven", "prod_price": 299.99},
        {"prod_id": 5, "prod_name": "Electric Stove", "prod_price": 899.99},
        {"prod_id": 6, "prod_name": "Gas Stove", "prod_price": 1119.99},
        {"prod_id": 7, "prod_name": "Blender", "prod_price": 129.99},
        {"prod_id": 8, "prod_name": "Portable Heater", "prod_price": 119.99},
        {"prod_id": 9, "prod_name": "Dining aTable Set", "prod_price": 899.99},
        {"prod_id": 10, "prod_name": "Washer", "prod_price": 999.99},
    ],
    "invoice": [
        {
            "invoice_id": 1,
            "customer_id": 1,
            "invoice_date": "12-01-2019",
            "sales_amount": 2499.97,
            "GST(5%)": 124.9985,
            "total_amount": 2624.9685,
        },
        {
            "invoice_id": 2,
            "customer_id": 2,
            "invoice_date": "12-05-2019",
            "sales_amount": 2019.97,
            "GST(5%)": 100.9985,
            "total_amount": 4745.937,
        },
        {
            "invoice_id": 3,
            "customer_id": 3,
            "invoice_date": "12-09-2019",
            "sales_amount": 1419.97,
            "GST(5%)": 70.9985,
            "total_amount": 3611.937,
        },
    ],
    "invoice_detail": [
        {"detail_id": 1, "invoice_id": 1, "prod_id": 1, "quantity": 1},
        {"detail_id": 2, "invoice_id": 1, "prod_id": 10, "quantity": 1},
        {"detail_id": 3, "invoice_id": 1, "prod_id": 9, "quantity": 1},
        {"detail_id": 4, "invoice_id": 2, "prod_id": 8, "quantity": 1},
        {"detail_id": 5, "invoice_id": 2, "prod_id": 9, "quantity": 1},
        {"detail_id": 6, "invoice_id": 2, "prod_id": 10, "quantity": 1},
        {"detail_id": 7, "invoice_id": 3, "prod_id": 4, "quantity": 1},
        {"detail_id": 8, "invoice_id": 3, "prod_id": 8, "quantity": 1},
        {"detail_id": 9, "invoice_id": 3, "prod_id": 10, "quantity": 1},
    ],
}

