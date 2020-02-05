import os
from os.path import join, getsize

def getdirsize(dir):
    size = 0
    total=[]
    for root, dirs, files in os.walk(dir):
        size = sum([ getsize ( join (root, name)) for name in files])
        total.append(size)
    return sum(total)


# import os

# def get_size(start_path = '.'):
#     total_size = 0
#     for dirpath, dirnames, filenames in os.walk(start_path):
#         for f in filenames:
#             fp = os.path.join(dirpath, f)
#             # skip if it is symbolic link
#             if not os.path.islink(fp):
#                 total_size += os.path.getsize(fp)

#     return total_size

# print(get_size(), 'bytes')