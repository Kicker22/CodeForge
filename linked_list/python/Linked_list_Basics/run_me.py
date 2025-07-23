
from linked_list import LinkedList

# Visual helper for printing in terminal
# ===============================================
my_list = LinkedList()
print("===========================")
print("OG List")
print("===========================")


# This function populates the list with a default of 5 nodes
def call_in_range(num=5):
    count = 1
    for _ in range(num):
        my_list.insert_at_head(count)
        # see it grow eneble print here 
        # ==============================
        # my_list.print_list()
        # ==============================
        count += 1
    #just want finished list? Eneble here.
    # ===================================
    my_list.print_list()
    # ===================================


# change size of list here
call_in_range(20)

# Try different methods here (check linked_list file for methods)
print("===========================")
my_list.reverse_list()
print("Reversed list")
my_list.print_list()
print("===========================")
# ===============================================
