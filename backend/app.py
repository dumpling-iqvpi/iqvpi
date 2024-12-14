from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend is running"}), 200

@app.route("/auth/register", methods=["POST"])
def register():
    data = request.json
    return jsonify({"message": "User registered successfully"}), 201

@app.route("/auth/login", methods=["POST"])
def login():
    data = request.json
    return jsonify({"message": "Login successful"}), 200

@app.route("/pet/status", methods=["GET"])
def pet_status():
    pet_data = {
        "name": "Fluffy",
        "health": 80,
        "mood": "Happy"
    }
    return jsonify(pet_data), 200

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)