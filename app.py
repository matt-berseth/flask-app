from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Example balance
account_balance = {"balance": 200.00}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/balance", methods=["GET"])
def get_balance():
    # typically this would be read from the database
    return jsonify(account_balance)

if __name__ == "__main__":
    app.run(debug=True)
