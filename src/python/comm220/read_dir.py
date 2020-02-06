import os
from os.path import join, getsize

def getdirsize(path):
    num_files = len(os.listdir(path))
    folder_name =os.path.basename(path)
    size = 0
    list_size=[]
    total_size=0
    for root, dirs, files in os.walk(path):
        size = sum([ getsize ( join (root, name)) for name in files])
        list_size.append(size)
        total_size = sum(list_size)
    return f'There are {num_files} files and {total_size} bytes in {folder_name}.'





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