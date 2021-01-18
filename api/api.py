from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route('/path')
def get_path():
    coords = [
        { 'lat': 38.55552855967063, 'lng': -121.7815494730916 },
        { 'lat': 36.2169884797185, 'lng': -112.056727493181 }
    ]
    return jsonify(coords)
