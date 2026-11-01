from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        binario = request.form['binario']
        decimal = int(binario, 2)
        return render_template('bin2dec.html', binario=binario, result=decimal)
    return render_template('bin2dec.html', binario='', result='')

if __name__ == '__main__':
    app.run(debug=True)
