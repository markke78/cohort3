from openpyxl import load_workbook, Workbook

# # read excel sheet into memory
wb = load_workbook(filename="test.xlsx")
sheet_ranges = wb["customers"]
print(sheet_ranges["B2"].value)

# # create dict to store worksheet

d = {}
ws1 = wb.create_sheet("creat_dict", 0)
for i in range(138):
    cell_value_class = ws1.cell(i, 2).value
    cell_value_id = ws1.cell(i, 0).value

print(d)

