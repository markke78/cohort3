from openpyxl import load_workbook, Workbook

# # read excel sheet into memory
wb = load_workbook(filename="test.xlsx")
for index, sheets in enumerate(wb):
    new_obj = {}
    new_list = []
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

    print(new_list)

