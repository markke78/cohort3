# from openpyxl import load_workbook

# sheet_ranges = wb["customers"]
# print(sheet_ranges["B2"].value)

# # create dict to store worksheet

# ws1 = wb["customers"]
# ws2 = wb["invoice"]
# new_obj = {}
# new_obj = []
# headers = {}
# print(ws1)

# for rowidx, row in enumerate(ws1):
#     item = {}
#     for cellidx, cell in enumerate(row):
#         if rowidx == 0:
#             headers[cellidx] = cell.value
#         else:
#             item[headers[cellidx]] = cell.value
#     if rowidx > 0:
#         new_obj["customers"].append(item)


# w2 = wb["invoice"]
# new_obj1 = {}
# new_obj1["invoice"] = []
# headers = {}

# for rowidx, row in enumerate(w2):
#     item = {}
#     for cellidx, cell in enumerate(row):
#         if rowidx == 0:
#             headers[cellidx] = cell.value
#         else:
#             item[headers[cellidx]] = cell.value
#     if rowidx > 0:
#         new_obj1["invoice"].append(item)
# print(new_obj1)

{
    "customers": [
        {
            "customerID": 1,
            "firstName": "Mark",
            "lastName": "Ke",
            "email": "mk@gmail.com",
        },
        {
            "customerID": 2,
            "firstName": "Jane",
            "lastName": "Will",
            "email": "jw@gmail.com",
        },
        {
            "customerID": 3,
            "firstName": "Daniel",
            "lastName": "Berry",
            "email": "db@gmail.com",
        },
        {
            "customerID": 4,
            "firstName": "Lucy",
            "lastName": "Scott",
            "email": "ls@gmail.com",
        },
        {
            "customerID": 5,
            "firstName": "Kelly",
            "lastName": "Horan",
            "email": "kh@gmail.com",
        },
        {
            "customerID": 6,
            "firstName": "Jimmy",
            "lastName": "Choo",
            "email": "jc@gmail.com",
        },
    ]
}

# sample format for dict
# {
#     "customers": [
#         {
#             "customerID": 1,
#             "firstName": "Mark",
#             "lastName": 'Ke',
#             "email": "mk@gmail.com",
#         },
#         ...
#     ]
# }

