import syntax
def test_give_nums():
    assert syntax.give_nums(5) == 5

def test_give_strs():
    assert syntax.give_strs('Mark') == 'Mark'

def test_myboolean():
    assert syntax.myboolean(5, 6) == False

def test_give_list():
    assert syntax.give_list([1,2,3,4,5]) == [1, 2, 3, 4, 5] 

def test_give_dictionary():
    assert syntax.give_dictionary({'name':'Mark', 'id':'123456'}) == {'name':'Mark', 'id':'123456'}

def test_give_none():
    assert syntax.give_none(None) == None

def test_add():
    assert syntax.add(2, 3) == 5
    assert syntax.add(0.1, 0.13) == 0.23

def test_add_to_the_front():
    assert syntax.add_to_the_front(0, [1,2,3,4]) == [0, 1, 2, 3, 4]

def test_add_to_the_end():
    assert syntax.add_to_the_end(5, [1,2,3,4]) == [1, 2, 3, 4,5]

def test_if_else():
    assert syntax.if_else(5, 6) == 'b is bigger'

def test_update_values():
    assert syntax.update_values("c", "f", ["a", "b", "c", "d", "e"]) == ["a", "b", "f", "d", "e"]

def test_for_loop():
    assert syntax.for_loop([1, 2, 3, 4, 5]) == 15

def test_while_loop():
    assert syntax.while_loop(6) == [0, 1, 2, 3, 4, 5]

def test_lookup():
    assert syntax.lookup("Mark", "Ke", 42) == "Mark"




