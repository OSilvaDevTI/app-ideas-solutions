from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        decimal = request.form['decimal']
        binario = bin(int(decimal)).replace("0b", "")
        return render_template('bin2dec.html', decimal=decimal, result=binario)
    return render_template('bin2dec.html')

if __name__ == '__main__':
    app.run(debug=True)
