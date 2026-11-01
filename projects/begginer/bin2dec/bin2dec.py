from flask import Flask

app = Flask(__name__)

from views import *

if __name__ == '__main__':
    app.run()

  decimal = input("Enter a decimal number: ")
    binario = bin(int(decimal)).replace("0b", "")
    print(f"The binary representation of {decimal} is: {binario}")