    # define attributes / variables
    #     number
a=5
    #     string
name="Mark"
    #     boolean
def myboolean(a, b):
    if a>b:
        return True
    return False

    #     array
b=[1,2,3,4,5]
    #     dictionary / objects
students ={'name':'Mark', 'id':'123456'}
    #     None
b= 6
    # sample if / else

def if_else(a, b):
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
    #     declare object
    #     lookup key to retrieve value



