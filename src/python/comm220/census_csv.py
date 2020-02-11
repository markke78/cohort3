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
        # print(len(line))

        if idx == 0:
            # { "CLASS": 0, "CLASS_CODE": 1, ..., "SECTOR": 4, ... }
            header_idx = get_header_idx(items)
            target_idx1 = header_idx["CLASS"]
            target_idx2 = header_idx["SECTOR"]
            target_idx3 = header_idx["RES_CNT"]
            target_sum["CLASS_POPULATION"] = {}
            target_sum["SECTOR_POPULATION"] = {}
            target_sum["CLASS_LINES"] = {}
            target_sum["SECTOR_LINES"] = {}
            # print(target_idx1,target_idx2,target_idx3)
        else:
            target_sum["CLASS_POPULATION"][items[target_idx1]] = target_sum[
                "CLASS_POPULATION"
            ].get(items[target_idx1], 0) + int(items[target_idx3])
            target_sum["SECTOR_POPULATION"][items[target_idx2]] = target_sum[
                "SECTOR_POPULATION"
            ].get(items[target_idx2], 0) + int(items[target_idx3])
            target_sum["CLASS_LINES"][items[target_idx1]] = (
                target_sum["CLASS_LINES"].get(items[target_idx1], 0) + 1
            )
            target_sum["SECTOR_LINES"][items[target_idx2]] = (
                target_sum["SECTOR_LINES"].get(items[target_idx2], 0) + 1
            )

    total_lines = sum(target_sum["CLASS_LINES"].values())
    total_population = sum(target_sum["CLASS_POPULATION"].values())


with open("report.txt", "w") as report:
    string = ""
    for key, value in target_sum.items():
        string += f" Calculation by {key} ".center(70, "-") + "\n\n"
        string += "Sub Category".ljust(40) + "Sub Total".ljust(40) + "\n"
        for inner_key, inner_val in value.items():
            string += f"{inner_key}".ljust(40) + f"{inner_val}".ljust(40) + "\n"
        string += "\n\n"
    string += "Total".center(70, "-") + "\n\n"
    string += f"TOTAL LINES : {total_lines}".ljust(40)
    string += f"TOTAL POPULATION : {total_population}".ljust(40)

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

#     {'Residential': 208, 'Industrial': 42, 'Major Park': 4, 'Residual Sub Area': 49}
# {'CENTRE': 62, 'SOUTH': 58, 'NORTHEAST': 44, 'NORTHWEST': 30, 'NORTH': 30, 'SOUTHEAST': 23, 'EAST': 23, 'WEST': 33}

