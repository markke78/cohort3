# def get_category_idx_pair(header):
#     return {cat.rstrip(): ind for ind, cat in enumerate(header.split(","))}


# def get_info_by_category(target, cats):
#     sum_target = {}
#     lines_num = {}

#     with open("Census_by_Community_2018.csv", "r") as csv:
#         for idx, line in enumerate(csv):
#             if idx == 0:
#                 header_idx = get_category_idx_pair(line)
#                 cat_idx = {}
#                 target_idx = header_idx[target]
#                 for cat in cats:
#                     cat_idx[cat] = header_idx[cat]
#                     sum_target[cat] = {}
#                     lines_num[cat] = {}
#             else:
#                 line_data = line.split(",")
#                 target_val = int(line_data[target_idx])
#                 sub_cats = {}
#                 for cat in cats:
#                     sub_cats[cat] = line_data[cat_idx[cat]]
#                     sum_target[cat][sub_cats[cat]] = (
#                         sum_target[cat].get(sub_cats[cat], 0) + target_val
#                     )
#                     lines_num[cat][sub_cats[cat]] = (
#                         lines_num[cat].get(sub_cats[cat], 0) + 1
#                     )
#     return sum_target, lines_num

















with open("Census_by_Community_2018.csv", "r") as csv:  
    next(csv)
    data={}
    new_data={}
    R=0
    total_lines=0
    for ind, line in enumerate(csv):
        data[ind] =data.get(ind, line)
        inside_data={}
        RC=0
        for idx, item in enumerate(data[ind].split(",")):
            inside_data[idx]=inside_data.get(idx, item)
            # population = inside_data[9]
            # RC += int(population)
        break
new_data[ind]=new_data.get(ind,inside_data)
        
print (new_data)
        
                
    # new_data[ind]=new_data.get(ind,inside_data)
                
           
        # for ind, cat in enumerate(line.split(",")):            
        #     data[ind] = data.get(ind, cat)
            
            # for item in data[0]
            # if item == 
        


        
        



# def get_category_idx_pair(header):
#     return {cat.rstrip(): ind for ind, cat in enumerate(header.split(","))}


# def get_info_by_category(target, cat):
#     sum_target = {}
#     lines_num = {}

#     with open("Census_by_Community_2018.csv", "r") as csv:
#         for idx, line in enumerate(csv):
#             if idx == 0:
#                 header_idx = get_category_idx(line)
#                 cat_idx = header_idx[cat]
#                 target_idx = header_idx[target]
#             else:
#                 line_data = line.split(",")
#                 sub_cat = line_data[cat_idx]
#                 target_val = int(line_data[target_idx])
#                 sum_target[sub_cat] = sum_target.get(sub_cat, 0) + target_val
#                 lines_num[sub_cat] = lines_num.get(sub_cat, 0) + 1
#     return {
#         sub_cat: [num_line, target_sum]
#         for sub_cat, num_line, target_sum in zip(
#             sum_target.keys(), sum_target.values(), lines_num.values()
#         )
#     }


# print(get_info_by_category("RES_CNT", "CLASS"))
# # {'Residential': [1263734, 208], 'Industrial': [922, 42], 'Major Park': [0, 4], 'Residual Sub Area': [0, 49]}



# try:
#     csv_file = open('Census_by_Community_2018.csv', 'r')
#     lines = csv_file.readlines()
# finally:
#     csv_file.close()

# print ({ind : cat.rstrip() for ind, cat in enumerate(lines[0].split(','))}[0])





# res_cnt = {"classes": {}, "sectors": {}, "total": 0}
# with open('Census_by_Community_2018.csv', 'r') as file:
#     next(file)
#     total_lines=0
#     for line in file:
#         line_data = line.split(",")
#         break
# print (line_data)
#         CLASS = ""
#         SECTOR = ""
#         population = ""
#         comma = 0  # using comma's to differentiate each column
#         total_lines += 1
#         for char in line:
#             if char == ",":
#                 comma += 1
#             if comma == 0 and char != ",":
#                 CLASS = CLASS + char
#             if comma == 4 and char != ",":
#                 SECTOR = SECTOR + char
#             if comma == 9 and char != ",":
#                 population = population + char
            
#         if CLASS in res_cnt["classes"]:
#             res_cnt["classes"][CLASS] += int(population)
#         else:
#             res_cnt["classes"][CLASS] = int(population)
        
#         if SECTOR in res_cnt["sectors"]:
#             res_cnt["sectors"][SECTOR] += int(population)
#         else:
#             res_cnt["sectors"][SECTOR] = int(population)
# res_cnt["total"] = total_lines
# print (res_cnt)


