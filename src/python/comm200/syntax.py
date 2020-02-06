    # define attributes / variables
    #     number
def give_nums(a):
    nums = a
    return nums
    
    #     string
def give_strs(word):
    strs = word
    return strs

    #     boolean
def myboolean(a, b):
    if a>b:
        return True
    return False

    #     list
def give_list(array):
    the_list = array
    return the_list

    #     dictionary / objects
def give_dictionary(object):
    the_dictionary = object
    return the_dictionary

    #     None
def give_none(z):
    the_none = z
    return the_none

    # sample if / else
def if_else(a, b):
    a= 5
    b= 6
    if a>b:
        return "a is bigger"
    else:
        return "b is bigger"


    # functions
    #     parameters
    #     returns

def add(x, y):
   return x+y

    # lists
    #     add to the front

def add_to_the_front(item, mylist):
    mylist.insert(0, item)
    return mylist
    

    #     add to the end
def add_to_the_end(item, mylist):
    mylist.insert(len(mylist),5)
    return mylist

    #     update values
def update_values(subject, changes, mylist):
    for idx,item in enumerate(mylist):
        if subject in item:
            mylist[idx] = changes
            return mylist

    
    # loops 
    #     for/in
def for_loop(mylist):
    total = 0
    for i in mylist:
        total += i
    return total

    
    #     while:
def while_loop(x):
    j=0
    mylist =[]
    while j < x:
        mylist.append(j)
        j += 1
    return mylist
    
    # Objects / Dictionaries
    #     lookup key to retrieve value

def lookup(fstName, lstName, ag):
    person = {"Firstname":fstName, "Lastname":lstName, "age":ag}
    return person["Firstname"]
    



