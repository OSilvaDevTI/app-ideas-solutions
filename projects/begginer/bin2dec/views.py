from bin2dec import app, decimal_to_binary
from flask import render_template, request


@app.route("/", methods=["GET", "POST"])
def home():
    result = None
    error = None
    decimal = ""

    if request.method == "POST":
        decimal = request.form.get("decimal", "").strip()

        if not decimal:
            error = "Digite um número decimal para converter."
        else:
            try:
                result = decimal_to_binary(decimal)
            except ValueError:
                error = "Use apenas um número inteiro decimal válido."

    return render_template(
        "bin2dec.html",
        decimal=decimal,
        result=result,
        error=error,
    )
