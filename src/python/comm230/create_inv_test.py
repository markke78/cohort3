import pytest

from create_inv import get_product_name, get_customer_name, my_invoice


def test_get_product_name():
    assert get_product_name(1) == "Dishwasher\t\t599.99"


def test_get_customer_name():
    assert get_customer_name(1) == "Customer Name: Rachel Smith"


def test_my_invoice():
    assert my_invoice(2) == "Invoice generated"

