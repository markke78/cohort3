import syntax

def test_myboolean():
    assert syntax.myboolean(5, 6) == False

def test_add():
    assert syntax.add(2, 3) == 5
    assert syntax.add(0.1, 0.13) == 0.23

def test_add_to_the_front():
    assert syntax.add_to_the_front(0, [1,2,3,4]) == [0, 1, 2, 3, 4]

def test_add_to_the_end():
    assert syntax.add_to_the_end(5, [1,2,3,4]) == [1, 2, 3, 4,5]

def test_if_else():
    assert syntax.if_else(5, 6) == 'b is bigger'
