import Cantax

def test_mytax():
    assert Cantax.mytax(35000) == 'Your annual income tax is $5250.0'
    assert Cantax.mytax(50000) == 'Your annual income tax is $7630.35'
    assert Cantax.mytax(100000) == 'Your annual income tax is $18141.1'
    assert Cantax.mytax(180000) == 'Your annual income tax is $39911.1'
    assert Cantax.mytax(257896) == 'Your annual income tax is $64401.93'
    
