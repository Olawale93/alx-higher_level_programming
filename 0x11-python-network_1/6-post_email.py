#!/usr/bin/python3
"""
given URL & email as parameters, send POST req to URL, display response body utf-8
usage: ./6-post_email.py http://0.0.0.0:5000/post_email hr@holbertonschool.com
"""
import requests
from sys import argv


if __name__ == "__main__":
    url = argv[1]
    payload = {'email': argv[2]}
    r = requests.post(url, data=payload)
    print(r.text)
