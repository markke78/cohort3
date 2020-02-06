import read_dir

def test_getdirsize():
    assert read_dir.getdirsize('C:/code/cohort3/src/python/comm200') == 'There are 8 files and 16554 bytes in comm200.'