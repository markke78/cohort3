import read_JSfile

def test_count_files():
    f = open("C:/code/cohort3/src/javascript/syntax.js", "r")
    assert read_JSfile.count_files(f) == {'characters': 2213, 'else': 2, 'lines': 140} 

