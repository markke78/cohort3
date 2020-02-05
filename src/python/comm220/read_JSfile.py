
def count_files(f):
    thefile= f.read()
    num_lines = thefile.count('\n')
    num_elses = thefile.count('else')
    num_characters = len(thefile)
    return {'lines': num_lines, 'else': num_elses, 'characters': num_characters}
    



