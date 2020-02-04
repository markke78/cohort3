def mytax(income):
    if income <= 47630:
        result = round((income * 0.15),2)
        return f'Your annual income tax is ${result}'
    elif income> 47630 and income <= 95259:
        result = round(((47630 * 0.15) + (income-47630) * 0.205),2)
        return f'Your annual income tax is ${result}'
    elif income> 95259 and income <= 147667:
        result = round(((47630 * 0.15) + (47629*0.205) + (income - 95259) * 0.26),2)
        return f'Your annual income tax is ${result}'
    elif income > 147667 and income <= 210371:
        result = round(((47630 * 0.15) + (47629*0.205) + (52408* 0.26) + (income- 147667) * 0.29),2)
        return f'Your annual income tax is ${result}'
    else:
        result = round(((47630 * 0.15) + (47629*0.205) + (52408* 0.26) + (62704 * 0.29) +(income - 210371) * 0.33),2)
        return f'Your annual income tax is ${result}'


