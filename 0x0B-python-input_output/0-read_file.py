#!/usr/bin/python3
""" a function that reads a text file (UTF8) and prints it to stdout"""


def read_file(filename=""):
    """prints the content of a UTF8 text file"""

    with open(filename, encoding='utf-8') as f:
        print(f.read(), end="")
