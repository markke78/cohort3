
import email_pr

def test_email():
    assert email_pr.email('Larry', 'Shumlich') == 'larry.shumlich@gmail.com'
    assert email_pr.email('Heiko ', 'Peters') == 'heiko .peters@gmail.com'