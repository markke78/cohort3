def get_header_idx(items):
    # { "CLASS": 0, "CLASS_CODE": 1, ..., "SECTOR": 4, ... }
    result = {}
    for ind, item in enumerate(items):
        result[item] = ind
    return result


def get_header_idx_comprehension(items):
    return {item: idx for idx, item in enumerate(items)}


target_sum = {}
with open("Census_by_Community_2018.csv", "r") as csv:
    for idx, line in enumerate(csv):
        # print("line:",line)
        items = line.rstrip().split(",")
        # print("items:",items)
        if idx == 0:
            # { "CLASS": 0, "CLASS_CODE": 1, ..., "SECTOR": 4, ... }
            header_idx = get_header_idx(items)
            target_idx1 = header_idx["CLASS"]
            target_idx2 = header_idx["SECTOR"]
            target_idx3 = header_idx["RES_CNT"]
            target_sum["CLASS"] = {}
            target_sum["SECTOR"] = {}
            # print(target_idx1,target_idx2,target_idx3)
        else:
            target_sum["CLASS"][items[target_idx1]] = target_sum["CLASS"].get(
                items[target_idx1], 0
            ) + int(items[target_idx3])
            target_sum["SECTOR"][items[target_idx2]] = target_sum["SECTOR"].get(
                items[target_idx2], 0
            ) + int(items[target_idx3])

with open("report.txt", "w") as report:
    string = ""
    for key, value in target_sum.items():
        string += f" Calculation by {key} ".center(70, "-") + "\n\n"
        string += "Sub Category".ljust(40) + "Population".ljust(40) + "\n"
        for inner_key, inner_val in value.items():
            string += f"{inner_key}".ljust(40) + f"{inner_val}".ljust(40) + "\n"
        string += "\n\n"
    report.write(string)

    # {
    #     "CLASS": {
    #         "Residential": 1263734,
    #         "Industrial": 922,
    #         "Major Park": 0,
    #         "Residual Sub Area": 0,
    #     },
    #     "SECTOR": {
    #         "CENTRE": 199977,
    #         "SOUTH": 227345,
    #         "NORTHEAST": 185534,
    #         "NORTHWEST": 174126,
    #         "NORTH": 160502,
    #         "SOUTHEAST": 135009,
    #         "EAST": 57666,
    #         "WEST": 124497,
    #     },
    # }

