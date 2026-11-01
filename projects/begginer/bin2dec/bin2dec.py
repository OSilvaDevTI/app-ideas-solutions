from pathlib import Path

from flask import Flask, send_from_directory

PROJECT_ROOT = Path(__file__).resolve().parents[3]
app = Flask(__name__)


def decimal_to_binary(decimal):
    """Keep the original conversion logic available to the web form."""
    return bin(int(decimal)).replace("0b", "")


@app.get("/assets/<path:filename>")
def global_assets(filename):
    return send_from_directory(PROJECT_ROOT / "assets", filename)


import views


if __name__ == "__main__":
    app.run(debug=True)
